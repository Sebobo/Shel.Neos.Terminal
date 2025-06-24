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

use Neos\ContentRepository\Core\NodeType\NodeTypeNames;
use Neos\ContentRepository\Core\Projection\ContentGraph\Filter\FindDescendantNodesFilter;
use Neos\ContentRepository\Core\Projection\ContentGraph\Filter\NodeType\NodeTypeCriteria;
use Neos\ContentRepository\Core\Projection\ContentGraph\Node;
use Neos\ContentRepositoryRegistry\ContentRepositoryRegistry;
use Neos\Flow\Cache\CacheManager;
use Neos\Flow\I18n\Translator;
use Neos\Flow\Mvc\Controller\ControllerContext;
use Neos\Neos\Domain\NodeLabel\NodeLabelGeneratorInterface;
use Neos\Neos\Service\LinkingService;
use Shel\Neos\Terminal\Domain\CommandContext;
use Shel\Neos\Terminal\Domain\CommandInvocationResult;
use Shel\Neos\Terminal\Domain\Dto\NodeResult;
use Symfony\Component\Console\Exception\RuntimeException;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputDefinition;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\StringInput;

class SearchCommand implements TerminalCommandInterface
{

    public function __construct(
        protected Translator                  $translator,
        protected LinkingService              $linkingService,
        protected CacheManager                $cacheManager,
        protected NodeLabelGeneratorInterface $nodeLabelGenerator,
        protected ContentRepositoryRegistry   $contentRepositoryRegistry,
    )
    {
    }

    public static function getCommandName(): string
    {
        return 'search';
    }

    public static function getCommandDescription(): string
    {
        return 'Shel.Neos.Terminal:Main:command.search.description';
    }

    public static function getCommandUsage(): string
    {
        return 'search ' . self::getInputDefinition()->getSynopsis();
    }

    public static function getInputDefinition(): InputDefinition
    {
        return new InputDefinition([
            new InputArgument('searchword', InputArgument::REQUIRED | InputArgument::IS_ARRAY),
            new InputOption('contextNode', 'c', InputOption::VALUE_OPTIONAL),
            new InputOption('nodeTypes', 'n', InputOption::VALUE_IS_ARRAY | InputOption::VALUE_OPTIONAL),
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

        $siteNode = $commandContext->getSiteNode();
        $contextNode = match ($input->getOption('contextNode')) {
            'node', 'focusedNode' => $commandContext->getFocusedNode(),
            'document', 'documentNode' => $commandContext->getDocumentNode(),
            default => $siteNode,
        };

        if (!$contextNode) {
            return new CommandInvocationResult(
                false,
                $this->translator->translateById(
                    'command.search.noContext',
                    [],
                    null,
                    null,
                    'Main',
                    'Shel.Neos.Terminal'
                )
            );
        }

        // The NodeSearchInterface does not yet have a 4th argument for the startingPoint but all known implementations do
        $searchTerm = $input->getArgument('searchword');
        if (is_array($searchTerm)) {
            $searchTerm = implode(' ', $searchTerm);
        }
        $subgraph = $this->contentRepositoryRegistry->subgraphForNode($contextNode);
        $contentRepository = $this->contentRepositoryRegistry->get($contextNode->contentRepositoryId);

        $nodes = $subgraph->findDescendantNodes(
            $contextNode->aggregateId,
            FindDescendantNodesFilter::create(
                nodeTypes: NodeTypeCriteria::create(
                    NodeTypeNames::fromStringArray($input->getOption('nodeTypes')
                    ),
                    NodeTypeNames::createEmpty()
                ),
                searchTerm: $searchTerm)
        );

        $results = $nodes->map(function (Node $node) use ($commandContext, $contentRepository) {
            return NodeResult::fromNode(
                $node,
                $this->getUriForNode($commandContext->getControllerContext(), $node),
                $contentRepository,
                $this->nodeLabelGenerator,
            );
        });

        return new CommandInvocationResult(true, $results);
    }

    protected function getUriForNode(
        ControllerContext $controllerContext,
        Node              $node
    ): string
    {
        // Get the closest document to create uri from for navigation
        $closestDocumentNode = $node;
        $contentRepository = $this->contentRepositoryRegistry->get($closestDocumentNode->contentRepositoryId);
        while ($closestDocumentNode
            && !$contentRepository->getNodeTypeManager()
                ->getNodeType($closestDocumentNode->nodeTypeName)
                ?->isOfType('Neos.Neos:Document')
        ) {
            $subgraph = $this->contentRepositoryRegistry->subgraphForNode($closestDocumentNode);
            $closestDocumentNode = $subgraph->findParentNode($closestDocumentNode->aggregateId);
        }
        if (!$closestDocumentNode) {
            return '';
        }

        try {
            return $this->linkingService->createNodeUri(
                $controllerContext,
                $closestDocumentNode,
                null,
                'html',
                true
            );
        } catch (\Exception) {
        }
        return '';
    }
}
