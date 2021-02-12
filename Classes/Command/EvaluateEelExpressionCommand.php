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
use Neos\Flow\Error\Exception as ErrorException;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Eel\Exception as EelException;
use Shel\Neos\Terminal\Service\EelEvaluationService;

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
            $result = $this->eelEvaluationService->evaluateEelExpression('${' . $argument . '}', $evaluationContext);
            $result = $this->convertResult($result);
            $result = json_encode($result);
        } catch (EelException | ParserException | ErrorException | \Exception $e) {
            $success = false;
            $result = $e->getMessage();
        }

        return new CommandInvocationResult($success, $result);
    }

    /**
     * Unwraps certain object types in the evaluation result.
     * This makes it easier to view them when displayed in the terminal.
     *
     * @param mixed $result
     * @return mixed
     */
    protected function convertResult($result)
    {
        if (is_array($result)) {
            return array_map(function ($item) {
                if ($item instanceof NodeInterface) {
                    return $this->convertNode($item);
                }
                return $item;
            }, $result);
        }
        if (is_object($result) && $result instanceof NodeInterface) {
            return $this->convertNode($result);
        }
        return $result;
    }

    protected function convertNode(NodeInterface $node): array
    {
        $result = [];
        foreach ($node->getProperties()->getIterator() as $key => $property) {
            if (is_object($property)) {
                $property = get_class($property);
            }
            if (is_array($property)) {
                $property = '[…]';
            }
            $result[$key] = $property;
        }
        return $result;
    }
}
