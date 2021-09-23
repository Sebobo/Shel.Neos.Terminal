<?php
declare(strict_types=1);

namespace Shel\Neos\Terminal\Command;

/**
 * This file is part of the Shel.Neos.Terminal package.
 *
 * (c) 2021 Sebastian Helzle
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */

use Neos\ContentRepository\Command\EventDispatchingNodeCommandControllerPluginInterface;
use Neos\ContentRepository\Command\NodeCommandControllerPluginInterface;
use Neos\ContentRepository\Domain\Service\NodeTypeManager;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\Cli\ConsoleOutput;
use Neos\Flow\I18n\Translator;
use Neos\Flow\ObjectManagement\ObjectManagerInterface;
use Neos\Flow\Reflection\ReflectionService;
use Shel\Neos\Terminal\Domain\CommandContext;
use Shel\Neos\Terminal\Domain\CommandInvocationResult;
use Symfony\Component\Console\Exception\RuntimeException;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputDefinition;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\StringInput;
use Symfony\Component\Console\Output\BufferedOutput;

class NodeRepairCommand implements TerminalCommandInterface
{
    /**
     * @Flow\Inject
     * @var ObjectManagerInterface
     */
    protected $objectManager;

    /**
     * @Flow\Inject
     * @var NodeTypeManager
     */
    protected $nodeTypeManager;

    /**
     * @Flow\Inject
     * @var Translator
     */
    protected $translator;

    public static function getCommandName(): string
    {
        return 'nodeRepair';
    }

    public static function getCommandDescription(): string
    {
        return 'Shel.Neos.Terminal:Main:command.nodeRepair.description';
    }

    public static function getCommandUsage(): string
    {
        return 'nodeRepair ' . self::getInputDefinition()->getSynopsis();
    }

    public static function getInputDefinition(): InputDefinition
    {
        return new InputDefinition([
            new InputArgument('methodName', InputArgument::REQUIRED),
            new InputArgument('nodeType', InputArgument::REQUIRED),
            new InputOption('workspace', 'w', InputOption::VALUE_OPTIONAL),
            new InputOption('dryRun', 'd', InputOption::VALUE_NEGATABLE, 'Desc', false),
        ]);
    }

    public function invokeCommand(string $argument, CommandContext $commandContext): CommandInvocationResult
    {
        $input = new StringInput($argument);
        $input->bind(self::getInputDefinition());

        try {
            $input->validate();
        } catch (RuntimeException $e) {
            return new CommandInvocationResult(false, $e->getMessage());
        }

        $success = false;

        $methodName = $input->getArgument('methodName');
        $nodeTypeName = $input->getArgument('nodeType');
        $workspace = $input->getOption('workspace');
        $dryRun = $input->getOption('dryRun');

        if ($this->nodeTypeManager->hasNodeType($nodeTypeName)) {
            $nodeType = $this->nodeTypeManager->getNodeType($nodeTypeName);

            $bufferedOutput = new BufferedOutput();
            $consoleOutput = new ConsoleOutput();
            $consoleOutput->setOutput($bufferedOutput);

            $plugins = $this->getPlugins();
            foreach ($plugins as $plugin) {
                if ($plugin instanceof EventDispatchingNodeCommandControllerPluginInterface) {
                    $this->attachPluginEventHandlers($plugin, $dryRun, $consoleOutput);
                }
                $plugin->invokeSubCommand(
                    'repair',
                    $consoleOutput,
                    $nodeType,
                    $workspace ?? 'live',
                    $dryRun,
                    true,
                    null,
                    $methodName
                );
            }
            $result = strip_tags($bufferedOutput->fetch());

            if ($result) {
                $success = true;
            } else {
                $result = $this->translator->translateById(
                    'command.nodeRepair.noMatchingMethodName',
                    ['methodName' => $methodName],
                    null,
                    null,
                    'Main',
                    'Shel.Neos.Terminal'
                );
            }
        } else {
            $result = $this->translator->translateById(
                'command.nodeRepair.nodeTypeNotFound',
                ['nodeType' => $nodeTypeName],
                null,
                null,
                'Main',
                'Shel.Neos.Terminal'
            );
        }

        return new CommandInvocationResult($success, $result);
    }

    /**
     * Get plugins for the repair command
     *
     * @return array<NodeCommandControllerPluginInterface>
     */
    protected function getPlugins(): array
    {
        $plugins = [];
        $classNames = $this->objectManager->get(ReflectionService::class)->getAllImplementationClassNamesForInterface(NodeCommandControllerPluginInterface::class);
        foreach ($classNames as $className) {
            /** @var NodeCommandControllerPluginInterface $plugin */
            $plugin = $this->objectManager->get($this->objectManager->getObjectNameByClassName($className));
            $plugins[$className] = $plugin;
        }
        return $plugins;
    }

    /**
     * Attach plugin events to write to output
     */
    protected function attachPluginEventHandlers(EventDispatchingNodeCommandControllerPluginInterface $plugin, bool $dryRun, ConsoleOutput $consoleOutput): void
    {
        $plugin->on(EventDispatchingNodeCommandControllerPluginInterface::EVENT_NOTICE, function (string $text) use ($consoleOutput) {
            $consoleOutput->outputLine($text);
        });
        $plugin->on(EventDispatchingNodeCommandControllerPluginInterface::EVENT_TASK, function (string $description, \Closure $task, bool $requiresConfirmation = false) use ($dryRun, $consoleOutput) {
            $text = sprintf(' <b>❱ %s</b> ', $description);

            $consoleOutput->outputLine($text);
            if ($dryRun) {
                $consoleOutput->outputLine('    skipped (dry run)');
            } else {
                $task();
                $consoleOutput->outputLine('    <success>applied ✔</success>');
            }
        });
        $plugin->on(EventDispatchingNodeCommandControllerPluginInterface::EVENT_WARNING, function (string $text) use ($consoleOutput) {
            $consoleOutput->outputLine('<comment>WARNING: %s</comment>', [$text]);
        });
        $plugin->on(EventDispatchingNodeCommandControllerPluginInterface::EVENT_ERROR, function (string $text) use ($consoleOutput) {
            $consoleOutput->outputLine('<error>%s</error>', [$text]);
        });
    }
}

