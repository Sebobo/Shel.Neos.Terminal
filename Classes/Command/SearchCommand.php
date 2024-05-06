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

use GuzzleHttp\Psr7\Uri;
use http\Env\Request;
use http\Message;
use Neos\Cache\Exception;
use Neos\ContentRepository\Core\Projection\ContentGraph\Filter\FindDescendantNodesFilter;
use Neos\Flow\Mvc\Routing\Dto\ResolveContext;
use Neos\Flow\Mvc\Routing\Dto\RouteParameters;
use Neos\Neos\FrontendRouting\EventSourcedFrontendNodeRoutePartHandler;
use Neos\Neos\FrontendRouting\Projection\DocumentUriPathFinder;
use ProxyManager\Exception\ExceptionInterface;
use Symfony\Component\Console\Exception\InvalidArgumentException;
use Neos\ContentGraph\DoctrineDbalAdapter\Domain\Repository\ContentSubgraph;
use Neos\ContentRepository\Core\ContentRepository;
use Neos\ContentRepository\Core\Projection\ContentGraph\Filter\FindAncestorNodesFilter;
use Neos\ContentRepository\Core\Projection\ContentGraph\Filter\FindChildNodesFilter;
use Neos\ContentRepository\Core\Projection\ContentGraph\Filter\NodeType\NodeTypeCriteria;
use Neos\ContentRepository\Core\Projection\ContentGraph\Node;
use Neos\ContentRepository\Core\Projection\ContentGraph\Nodes;
use Neos\ContentRepository\Core\Projection\ContentGraph\VisibilityConstraints;
use Neos\ContentRepositoryRegistry\ContentRepositoryRegistry;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\Cache\CacheManager;
use Neos\Flow\I18n\Translator;
use Neos\Flow\Mvc\Controller\ControllerContext;
use Neos\Neos\Service\LinkingService;
use Shel\Neos\Terminal\Domain\CommandContext;
use Shel\Neos\Terminal\Domain\CommandInvocationResult;
use Symfony\Component\Console\Exception\RuntimeException;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputDefinition;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\StringInput;

class SearchCommand implements TerminalCommandInterface
{

    /**
     * @Flow\Inject
     * @var CacheManager
     */
    protected $cacheManager;

    /**
     * @Flow\Inject
     * @var Translator
     */
    protected $translator;

    /**
     * @Flow\Inject
     * @var LinkingService
     */
    protected $linkingService;

    /**
     * @Flow\Inject
     * @var ContentRepositoryRegistry
     */
    protected $contentRepositoryRegistry;

    /**
     * @Flow\Inject
     * @var EventSourcedFrontendNodeRoutePartHandler
     */
    protected $frontendNodeRoutePartHandler;

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
            new InputArgument('searchword', InputArgument::REQUIRED),
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
        $documentNode = $commandContext->getDocumentNode();

        switch ($input->getOption('contextNode')) {
            case 'node':
            case 'focusedNode':
                $contextNode = $commandContext->getFocusedNode();
                break;
            case 'document':
            case 'documentNode':
                $contextNode = $commandContext->getDocumentNode();
                break;
            default:
                $contextNode = $siteNode;
        }

        if (!$contextNode) {
            return new CommandInvocationResult(false,
                $this->translator->translateById('command.search.noContext', [], null, null, 'Main',
                    'Shel.Neos.Terminal'));
        }

        /** @var ContentSubgraph $subgraph */
        $subgraph = $this->contentRepositoryRegistry->subgraphForNode(($contextNode));

        try{
            $searchedNodeTypes = $input->getArgument('nodeTypes');
        }catch (InvalidArgumentException $e){
            $searchedNodeTypes = null;
        }

        $nodes = iterator_to_array($subgraph->findDescendantNodes(
            $contextNode->nodeAggregateId,
            FindDescendantNodesFilter::create(nodeTypes: $searchedNodeTypes, searchTerm: $input->getArgument('searchword')))
        );

        // todo get live uri
        // probably use UriBuilder Packages/Framework/Neos.Flow/Classes/Mvc/Routing/UriBuilder.php
        //$documentUriPathFinder = $this->contentRepositoryRegistry->projectionState(DocumentUriPathFinder::class);
        //$documentUriPathFinder-> getLiveContentStreamId
        //or
        // DynamicRoutePart::resolveWithParameters

        $results = array_map(function ($node) use ($documentNode, $commandContext, $subgraph, $contextNode) {

            try{
                $nodePath = $subgraph->retrieveNodePath($node->nodeAggregateId);
            }catch(\InvalidArgumentException $e){
                $nodePath = "NodePath could not be retrieved: $e";
            }

            return [
                'label' => $node->getLabel(),
                'nodeType' => $node->nodeTypeName,
                'nodePath' => $nodePath,
                'uri' => $this->getUriForNode($commandContext->getControllerContext(), $documentNode, $documentNode),
                'tst' => $this->getUriForNode(ControllerContext(new Request(), new Res))
            ];
        }, $nodes);

        return new CommandInvocationResult(true, $results);
    }

    protected function getUriForNode(
        ControllerContext $controllerContext,
        Node              $node,
        Node              $baseNode
    ): string
    {
        try {
            return $this->linkingService->createNodeUri(
                $controllerContext,
                $node,
                $baseNode,
                $controllerContext->getRequest()->getFormat(),
                true
            );
        } catch (\Exception $e) {
        }
        return '';
    }
}
