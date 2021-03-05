<?php
declare(strict_types=1);

namespace Shel\Neos\Terminal\Command;

use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Flow\Mvc\ActionRequest;
use Neos\Flow\Mvc\Controller\ControllerContext;
use Psr\Http\Message\ServerRequestInterface;

/**
 * This file is part of the Shel.Neos.Terminal package.
 *
 * (c) 2021 Sebastian Helzle
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */

class CommandContext
{

    /**
     * @var ControllerContext
     */
    protected $request;

    /**
     * @var NodeInterface
     */
    protected $siteNode;

    /**
     * @var NodeInterface
     */
    protected $documentNode;

    /**
     * @var NodeInterface
     */
    protected $focusedNode;

    /**
     * @param ServerRequestInterface $request
     */
    public function __construct(ServerRequestInterface $request)
    {
        $this->request = $request;
    }

    /**
     * @return ControllerContext
     */
    public function getControllerContext(): ControllerContext
    {
        return $this->request;
    }

    /**
     * @return NodeInterface|null
     */
    public function getSiteNode(): ?NodeInterface
    {
        return $this->siteNode;
    }

    /**
     * @param NodeInterface|null $siteNode
     * @return CommandContext
     */
    public function withSiteNode(NodeInterface $siteNode = null): CommandContext
    {
        $instance = clone $this;
        $instance->siteNode = $siteNode;
        return $instance;
    }

    /**
     * @return NodeInterface|null
     */
    public function getDocumentNode(): ?NodeInterface
    {
        return $this->documentNode;
    }

    /**
     * @param NodeInterface|null $documentNode
     * @return CommandContext
     */
    public function withDocumentNode(NodeInterface $documentNode = null): CommandContext
    {
        $instance = clone $this;
        $instance->documentNode = $documentNode;
        return $instance;
    }

    /**
     * @return NodeInterface|null
     */
    public function getFocusedNode(): ?NodeInterface
    {
        return $this->focusedNode;
    }

    /**
     * @param NodeInterface|null $focusedNode
     * @return CommandContext
     */
    public function withFocusedNode(NodeInterface $focusedNode = null): CommandContext
    {
        $instance = clone $this;
        $instance->focusedNode = $focusedNode;
        return $instance;
    }

}
