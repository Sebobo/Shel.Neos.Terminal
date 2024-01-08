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

use Neos\Flow\Annotations as Flow;
use Shel\Neos\Terminal\Domain\CommandContext;
use Shel\Neos\Terminal\Domain\CommandInvocationResult;
use Shel\Neos\Terminal\Service\EelEvaluationService;
use Symfony\Component\Console\Exception\RuntimeException;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputDefinition;
use Symfony\Component\Console\Input\StringInput;

class EvaluateEelExpressionCommand implements TerminalCommandInterface
{
    /**
     * @Flow\Inject
     * @var EelEvaluationService
     */
    protected $eelEvaluationService;

    public static function getCommandName(): string
    {
        return 'eel';
    }

    public static function getCommandDescription(): string
    {
        return 'Shel.Neos.Terminal:Main:command.eel.description';
    }

    public static function getCommandUsage(): string
    {
        return 'eel ' . self::getInputDefinition()->getSynopsis();
    }

    public static function getInputDefinition(): InputDefinition
    {
        return new InputDefinition([
            new InputArgument('expression', InputArgument::REQUIRED | InputArgument::IS_ARRAY),
        ]);
    }

    public function invokeCommand(string $argument, CommandContext $commandContext): CommandInvocationResult
    {
        $input = new StringInput($argument);

        try {
            $input->bind(self::getInputDefinition());
            $input->validate();
        } catch (RuntimeException $e) {
            return new CommandInvocationResult(false, $e->getMessage());
        }

        $success = true;

        $evaluationContext = [
            'site' => $commandContext->getSiteNode(),
            'documentNode' => $commandContext->getDocumentNode(),
            'node' => $commandContext->getFocusedNode(),
        ];

        try {
            $result = $this->eelEvaluationService->evaluateEelExpression('${' . $argument . '}', $evaluationContext);
        } catch (\Exception $e) {
            $success = false;
            $result = $e->getMessage();
        }

        return new CommandInvocationResult($success, $result);
    }
}
