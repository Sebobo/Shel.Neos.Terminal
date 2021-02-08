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
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\View\JsonView;
use Neos\Flow\Reflection\ReflectionService;
use Neos\Flow\Security\Exception\AccessDeniedException;
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
     * @Flow\InjectConfiguration(path="frontendConfiguration", package="Neos.Neos.Ui")
     * @var array
     */
    protected array $frontendConfiguration;

    public function getCommandsAction(): void
    {
        $commands = $this->detectCommands();

        $commandDefinitions = array_reduce($commands, function ($carry, TerminalCommandControllerPluginInterface $command) {
            try {
                $carry[$command::getCommandName()] = $this->loadCommand($command::getCommandName(), $command);
            } catch (AccessDeniedException $e) {}
            return $carry;
        }, []);

        $this->view->assign('value', ['success' => true, 'result' => $commandDefinitions]);
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
            $commandConfiguration[$className] = $this->objectManager->get($this->objectManager->getObjectNameByClassName($className));
        }
        return $commandConfiguration;
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
                    $result = $command->invokeCommand($argument, $siteNode, $documentNode, $focusedNode);
                }  catch (AccessDeniedException $e) {}
                break;
            }
        }

        if (!$result) {
            $result = new CommandInvocationResult(false, $this->translator->translateById('commandNotFound', ['command' => $commandName]));
        }

        $this->view->assign('value', $result);
    }

    /**
     * Throws an exception when terminal is disabled
     *
     * @throws TerminalException
     */
    protected function initializeAction()
    {
        $terminalConfiguration = $this->frontendConfiguration['Shel.Neos.Terminal:Terminal'];

        $terminalEnabled = $terminalConfiguration['enabled'] ?? false;
        if (!$terminalEnabled) {
            throw new TerminalException($this->translator->translateById('disabled'));
        }

        parent::initializeAction();
    }
}
