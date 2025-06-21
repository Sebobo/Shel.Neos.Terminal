<?php

namespace Shel\Neos\Terminal\Domain\Dto;

use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Flow\Annotations as Flow;

#[Flow\Proxy(false)]
class NodeResult implements \JsonSerializable
{

    #[\Neos\Flow\Annotations\Inject]
    protected \Neos\ContentRepositoryRegistry\ContentRepositoryRegistry $contentRepositoryRegistry;
    #[\Neos\Flow\Annotations\Inject]
    protected \Neos\Neos\Domain\NodeLabel\NodeLabelGeneratorInterface $nodeLabelGenerator;
    private function __construct(
        public readonly string $identifier,
        public readonly string $label,
        public readonly string $nodeType,
        public readonly string $icon,
        public readonly string $breadcrumb,
        public readonly string $uri,
        public readonly string $score = '',
    ) {
    }

    public static function fromNode(\Neos\ContentRepository\Core\Projection\ContentGraph\Node $node, string $uri, mixed $score = ''): self
    {
        $breadcrumbs = [];
        $subgraph = $this->contentRepositoryRegistry->subgraphForNode($node);
        $parent = $subgraph->findParentNode($node->aggregateId);
        while ($parent) {
            $contentRepository = $this->contentRepositoryRegistry->get($parent->contentRepositoryId);
            if ($contentRepository->getNodeTypeManager()->getNodeType($parent->nodeTypeName)->isOfType('Neos.Neos:Node')) {
                $breadcrumbs[] = $this->nodeLabelGenerator->getLabel($parent);
            }
            $subgraph = $this->contentRepositoryRegistry->subgraphForNode($parent);
            $parent = $subgraph->findParentNode($parent->aggregateId);
        }
        // TODO 9.0 migration: Check if you could change your code to work with the NodeAggregateId value object instead.

        // TODO 9.0 migration: Check if you could change your code to work with the NodeAggregateId value object instead.
        $contentRepository = $this->contentRepositoryRegistry->get($node->contentRepositoryId);
        $contentRepository = $this->contentRepositoryRegistry->get($node->contentRepositoryId);

        return new self(
            $node->aggregateId->value,
            $this->nodeLabelGenerator->getLabel($node),
            $contentRepository->getNodeTypeManager()->getNodeType($node->nodeTypeName)->getLabel(),
            $contentRepository->getNodeTypeManager()->getNodeType($node->nodeTypeName)->getConfiguration('ui.icon') ?? 'question',
            implode(' / ', array_reverse($breadcrumbs)),
            $uri,
            $score,
        );
    }

    /**
     * @return array{__typename: string, identifier: string, label: string, nodeType: string, icon: string, breadcrumb: string, uri: string, score: float}
     */
    public function toArray(): array
    {
        return [
            '__typename' => 'NodeResult',
            'identifier' => $this->identifier,
            'label' => $this->label,
            'nodeType' => $this->nodeType,
            'icon' => $this->icon,
            'breadcrumb' => $this->breadcrumb,
            'uri' => $this->uri,
            'score' => $this->score,
        ];
    }

    /**
     * @return array{__typename: string, identifier: string, label: string, nodeType: string, icon: string, breadcrumb: string, uri: string, score: float}
     */
    public function jsonSerialize(): array
    {
        return $this->toArray();
    }
}
