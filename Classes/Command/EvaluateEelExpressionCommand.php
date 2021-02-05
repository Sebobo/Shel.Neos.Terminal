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

use Neos\Eel\ParserException;
use Neos\Flow\Annotations as Flow;
use Flowpack\NodeTemplates\Service\EelEvaluationService;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Eel\Exception as EelException;

class EvaluateEelExpressionCommand implements TerminalCommandControllerPluginInterface
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
        return 'eel <string>';
    }

    public function invokeCommand(
        string $argument,
        NodeInterface $siteNode = null,
        NodeInterface $documentNode = null,
        NodeInterface $focusedNode = null
    ): CommandInvocationResult
    {
        $success = true;

        $evaluationContext = [
            'site' => $siteNode,
            'documentNode' => $documentNode,
            'node' => $focusedNode,
        ];

        try {
            $result = json_encode($this->eelEvaluationService->evaluateEelExpression('${' . $argument . '}', $evaluationContext), JSON_THROW_ON_ERROR);
        } catch (EelException | \JsonException | ParserException $e) {
            $success = false;
            $result = $e->getMessage();
        }

        return new CommandInvocationResult($success, $result);
    }
}
