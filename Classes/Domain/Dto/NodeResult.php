<?php
declare(strict_types=1);

namespace Shel\Neos\Terminal\Domain\Dto;

use Neos\ContentRepository\Core\ContentRepository;
use Neos\ContentRepository\Core\Projection\ContentGraph\Filter\FindAncestorNodesFilter;
use Neos\ContentRepository\Core\Projection\ContentGraph\Node;
use Neos\Flow\Annotations as Flow;
use Neos\Neos\Domain\NodeLabel\NodeLabelGeneratorInterface;

#[Flow\Proxy(false)]
readonly class NodeResult implements \JsonSerializable
{

    private function __construct(
        public string $identifier,
        public string $label,
        public string $nodeType,
        public string $icon,
        public string $breadcrumb,
        public string $uri,
        public string $score = '',
    )
    {
    }

    public static function fromNode(
        Node                        $node,
        string                      $uri,
        ContentRepository           $contentRepository,
        NodeLabelGeneratorInterface $nodeLabelGenerator,
        mixed                       $score = '',
    ): self
    {
        $nodeType = $contentRepository->getNodeTypeManager()->getNodeType($node->nodeTypeName);
        $breadcrumbs = $contentRepository
            ->getContentSubgraph($node->workspaceName, $node->dimensionSpacePoint)
            ->findAncestorNodes(
                $node->aggregateId,
                FindAncestorNodesFilter::create('Neos.Neos:Node')
            )
            ->map(fn(Node $parent) => $nodeLabelGenerator->getLabel($parent));

        return new self(
            $node->aggregateId->value,
            $nodeLabelGenerator->getLabel($node),
            $nodeType?->getLabel() ?? $node->nodeTypeName->value,
            $nodeType?->getConfiguration('ui.icon') ?? 'question',
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
