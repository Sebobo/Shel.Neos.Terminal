<?php

namespace Shel\Neos\Terminal\Domain\Dto;

use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Flow\Annotations as Flow;

#[Flow\Proxy(false)]
class NodeResult implements \JsonSerializable
{

    private function __construct(
        public readonly string $identifier,
        public readonly string $label,
        public readonly string $nodeType,
        public readonly string $icon,
        public readonly string $breadcrumb,
        public readonly string $uri,
        public readonly float $score = 0,
    ) {
    }

    public static function fromNode(NodeInterface $node, string $uri, float $score = 0): self
    {
        $breadcrumbs = [];
        $parent = $node->getParent();
        while ($parent) {
            if ($parent->getNodeType()->isOfType('Neos.Neos:Document')) {
                $breadcrumbs[] = $parent->getLabel();
            }
            $parent = $parent->getParent();
        }

        return new self(
            $node->getIdentifier(),
            $node->getLabel(),
            $node->getNodeType()->getLabel(),
            $node->getNodeType()->getConfiguration('ui.icon') ?? 'question',
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
