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
use Neos\Flow\I18n\Exception\IndexOutOfBoundsException;
use Neos\Flow\I18n\Exception\InvalidFormatPlaceholderException;
use Neos\Flow\I18n\Translator;
use Neos\Flow\Mvc\ActionRequest;
use Neos\Flow\Mvc\ActionResponse;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\Exception\UnsupportedRequestTypeException;
use Neos\Flow\Mvc\View\JsonView;
use Neos\Flow\Security\Authorization\PrivilegeManagerInterface;
use Neos\Flow\Security\Exception\AccessDeniedException;
use Neos\Neos\Ui\Domain\Model\FeedbackCollection;
use Shel\Neos\Terminal\Domain\CommandContext;
use Shel\Neos\Terminal\Domain\CommandInvocationResult;
use Shel\Neos\Terminal\Exception as TerminalException;
use Shel\Neos\Terminal\Security\TerminalCommandPrivilege;
use Shel\Neos\Terminal\Security\TerminalCommandPrivilegeSubject;
use Shel\Neos\Terminal\Service\SerializationService;
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

    public function getCommandsAction(): void
    {
        if (!$this->privilegeManager->isPrivilegeTargetGranted('Neos.Neos:Backend.GeneralAccess')) {
            $this->view->assign('value', ['success' => false, 'result' => []]);
            return;
        }

        $commandNames = $this->terminalCommandService->getCommandNames();

        $availableCommandNames = array_filter($commandNames, function ($commandName) {
            return $this->privilegeManager->isGranted(TerminalCommandPrivilege::class,
                new TerminalCommandPrivilegeSubject($commandName));
        });

        $commandDefinitions = array_reduce($availableCommandNames, function (array $carry, string $commandName) {
            $command = $this->terminalCommandService->getCommand($commandName);
            $carry[$commandName] = [
                'name' => $commandName,
                'description' => $command::getCommandDescription(),
                'usage' => $command::getCommandUsage(),
            ];
            return $carry;
        }, []);

        $this->view->assign('value', ['success' => true, 'result' => $commandDefinitions]);
    }

    public function invokeCommandAction(
        string $commandName,
        string $argument = null,
        \Neos\ContentRepository\Core\Projection\ContentGraph\Node $siteNode = null,
        \Neos\ContentRepository\Core\Projection\ContentGraph\Node $documentNode = null,
        \Neos\ContentRepository\Core\Projection\ContentGraph\Node $focusedNode = null
    ): void {
        $this->response->setContentType('application/json');

        $command = $this->terminalCommandService->getCommand($commandName);

        $commandContext = (new CommandContext($this->getControllerContext()))
            ->withSiteNode($siteNode)
            ->withDocumentNode($documentNode)
            ->withFocusedNode($focusedNode)
            ->withFocusedNode($focusedNode);

        $this->getControllerContext()->getRequest()->getMainRequest()->setFormat('html');

        try {
            $result = $command->invokeCommand($argument, $commandContext);
        } catch (AccessDeniedException $e) {
            $result = new CommandInvocationResult(false,
                $this->translateById('commandNotGranted', ['command' => $commandName]));
        }

        if (!$result) {
            $result = new CommandInvocationResult(false,
                $this->translateById('commandNotFound', ['command' => $commandName]));
        }

        // TODO: Move the feedback related logic into a separate service
        if ($result->getUiFeedback()) {
            // Change format to prevent url generation errors when serialising url based feedback
            foreach ($result->getUiFeedback() as $feedback) {
                $this->feedbackCollection->add($feedback);
            }
        }

        $this->view->assign('value', [
            'success' => $result->isSuccess(),
            'result' => SerializationService::serialize($result->getResult()),
            'uiFeedback' => $this->feedbackCollection,
        ]);
    }

    /**
     * @throws UnsupportedRequestTypeException
     */
    protected function initializeController(ActionRequest $request, ActionResponse $response): void
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
            throw new TerminalException($this->translateById('disabled'));
        }

        parent::initializeAction();
    }

    protected function translateById(string $id, array $arguments = []): string
    {
        try {
            return $this->translator->translateById('disabled', $arguments);
        } catch (InvalidFormatPlaceholderException | IndexOutOfBoundsException $e) {
        }
        return $id;
    }

}
