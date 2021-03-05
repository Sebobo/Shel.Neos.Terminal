<?php
declare(strict_types=1);

namespace Shel\Neos\Terminal\Controller;

/**
 * This file is part of the Shel.Neos.Terminal package.
 *
 * (c) 2021 Sebastian Helzle
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */

use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\I18n\Translator;
use Neos\Flow\Mvc\ActionRequest;
use Neos\Flow\Mvc\ActionResponse;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\Exception\UnsupportedRequestTypeException;
use Neos\Flow\Mvc\View\JsonView;
use Neos\Flow\Security\Authorization\PrivilegeManagerInterface;
use Neos\Flow\Security\Exception\AccessDeniedException;
use Neos\Neos\Ui\Domain\Model\FeedbackCollection;
use Shel\Neos\Terminal\Command\CommandContext;
use Shel\Neos\Terminal\Command\CommandInvocationResult;
use Shel\Neos\Terminal\Exception as TerminalException;
use Shel\Neos\Terminal\Security\TerminalCommandPrivilege;
use Shel\Neos\Terminal\Security\TerminalCommandPrivilegeSubject;
use Shel\Neos\Terminal\Service\TerminalCommandService;

/**
 * @Flow\Scope("singleton")
 */
class TerminalCommandController extends ActionController
{

    /**
     * @var array
     */
    protected $viewFormatToObjectNameMap = [
        'json' => JsonView::class,
    ];

    /**
     * @Flow\Inject
     * @var Translator
     */
    protected $translator;

    /**
     * @Flow\Inject
     * @var FeedbackCollection
     */
    protected $feedbackCollection;

    /**
     * @Flow\InjectConfiguration(path="frontendConfiguration", package="Neos.Neos.Ui")
     * @var array
     */
    protected $frontendConfiguration;

    /**
     * @Flow\Inject
     * @var TerminalCommandService
     */
    protected $terminalCommandService;

    /**
     * @Flow\Inject
     * @var PrivilegeManagerInterface
     */
    protected $privilegeManager;

    /**
     *
     */
    public function getCommandsAction(): void
    {
        $commandNames = $this->terminalCommandService->getCommandNames();

        $availableCommandNames = array_filter($commandNames, function ($commandName) {
            return $this->privilegeManager->isGranted(TerminalCommandPrivilege::class,
                new TerminalCommandPrivilegeSubject($commandName));
        });

        $commandDefinitions = array_map(function ($commandName) {
            $command = $this->terminalCommandService->getCommand($commandName);
            return [
                'name' => $commandName,
                'description' => $command::getCommandDescription(),
                'usage' => $command::getCommandUsage(),
            ];
        }, $availableCommandNames);

        $this->view->assign('value', ['success' => true, 'result' => $commandDefinitions]);
    }

    public function invokeCommandAction(
        string $commandName,
        string $argument = null,
        NodeInterface $siteNode = null,
        NodeInterface $documentNode = null,
        NodeInterface $focusedNode = null
    ): void {
        $result = null;

        $this->response->setContentType('application/json');

        $command = $this->terminalCommandService->getCommand($commandName);

        $commandContext = (new CommandContext($this->request->getHttpRequest()))
            ->withSiteNode($siteNode)
            ->withDocumentNode($documentNode)
            ->withFocusedNode($focusedNode)
            ->withFocusedNode($focusedNode);
        try {
            $result = $command->invokeCommand($argument, $commandContext);
        } catch (AccessDeniedException $e) {
        }

        if (!$result) {
            $result = new CommandInvocationResult(false,
                $this->translator->translateById('commandNotFound', ['command' => $commandName]));
        }

        if ($result->getFeedback()) {
            // Change format to prevent url generation errors when serialising url based feedback
            $this->getControllerContext()->getRequest()->getMainRequest()->setFormat('html');
            foreach ($result->getFeedback() as $feedback) {
                $this->feedbackCollection->add($feedback);
            }
        }

        $this->view->assign('value', [
            'success' => $result->isSuccess(),
            'result' => $result->getResult(),
            'uiFeedback' => $this->feedbackCollection,
        ]);
    }

    /**
     * @param ActionRequest $request
     * @param ActionResponse $response
     * @throws UnsupportedRequestTypeException
     */
    protected function initializeController(ActionRequest $request, ActionResponse $response)
    {
        parent::initializeController($request, $response);
        $this->feedbackCollection->setControllerContext($this->getControllerContext());
    }

    /**
     * Throws an exception when terminal is disabled
     *
     * @throws TerminalException
     */
    protected function initializeAction(): void
    {
        $terminalConfiguration = $this->frontendConfiguration['Shel.Neos.Terminal:Terminal'];

        $terminalEnabled = $terminalConfiguration['enabled'] ?? false;
        if (!$terminalEnabled) {
            throw new TerminalException($this->translator->translateById('disabled'));
        }

        parent::initializeAction();
    }

}
