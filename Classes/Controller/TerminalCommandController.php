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
use Neos\Flow\Reflection\ReflectionService;
use Neos\Flow\Security\Exception\AccessDeniedException;
use Neos\Neos\Ui\Domain\Model\FeedbackCollection;
use Shel\Neos\Terminal\Command\CommandContext;
use Shel\Neos\Terminal\Command\CommandInvocationResult;
use Shel\Neos\Terminal\Command\TerminalCommandControllerPluginInterface;
use Shel\Neos\Terminal\Exception as TerminalException;

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
     *
     */
    public function getCommandsAction(): void
    {
        $commands = $this->detectCommands();

        $commandDefinitions = array_reduce($commands, function ($carry, TerminalCommandControllerPluginInterface $command) {
            try {
                $carry[$command::getCommandName()] = $this->loadCommand($command::getCommandName(), $command);
            } catch (AccessDeniedException $e) {
            }
            return $carry;
        }, []);

        $this->view->assign('value', ['success' => true, 'result' => $commandDefinitions]);
    }

    /**
     * Detects plugins for this command controller
     *
     * @return array<TerminalCommandControllerPluginInterface>
     */
    protected function detectCommands(): array
    {
        $commandConfiguration = [];
        $classNames = $this->objectManager->get(ReflectionService::class)->getAllImplementationClassNamesForInterface(TerminalCommandControllerPluginInterface::class);
        foreach ($classNames as $className) {
            $objectName = $this->objectManager->getObjectNameByClassName($className);
            if ($objectName) {
                $commandConfiguration[$className] = $this->objectManager->get($objectName);
            }
        }
        return $commandConfiguration;
    }

    /**
     * This method is mainly used to limit command access via method privileges
     *
     * @param string $commandName
     * @param TerminalCommandControllerPluginInterface $command
     * @return array
     * @throws AccessDeniedException thrown by the policy if a role is not allowed access to the specified command
     */
    protected function loadCommand(string $commandName, TerminalCommandControllerPluginInterface $command): array
    {
        return [
            'name' => $commandName,
            'description' => $command::getCommandDescription(),
            'usage' => $command::getCommandUsage(),
        ];
    }

    public function invokeCommandAction(
        string $commandName,
        string $argument = null,
        NodeInterface $siteNode = null,
        NodeInterface $documentNode = null,
        NodeInterface $focusedNode = null
    ): void
    {
        $commands = $this->detectCommands();
        $result = null;

        $this->response->setContentType('application/json');

        foreach ($commands as $command) {
            if ($command::getCommandName() === $commandName) {
                try {
                    $this->loadCommand($commandName, $command);

                    $commandContext = (new CommandContext($this->getControllerContext()))
                        ->setSiteNode($siteNode)
                        ->setDocumentNode($documentNode)
                        ->setFocusedNode($focusedNode)
                        ->setFocusedNode($focusedNode);

                    $result = $command->invokeCommand($argument, $commandContext);
                } catch (AccessDeniedException $e) {
                }
                break;
            }
        }

        if (!$result) {
            $result = new CommandInvocationResult(false, $this->translator->translateById('commandNotFound', ['command' => $commandName]));
        }

        if ($result->getFeedback()) {
            // Change format to prevent url generation errors when serialising url based feedback
            $this->getControllerContext()->getRequest()->getMainRequest()->setFormat('html');
            $result->setFeedbackCollection($this->feedbackCollection);
        }

        $this->view->assign('value', $result);
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
