<?php
declare(strict_types=1);

namespace Shel\Neos\Terminal\Command;

use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Flow\Mvc\Controller\ControllerContext;

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
    protected $controllerContext;

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
     * @param ControllerContext $controllerContext
     */
    public function __construct(ControllerContext $controllerContext)
    {
        $this->controllerContext = $controllerContext;
    }

    /**
     * @return ControllerContext
     */
    public function getControllerContext(): ControllerContext
    {
        return $this->controllerContext;
    }

    /**
     * @return NodeInterface|null
     */
    public function getSiteNode(): NodeInterface
    {
        return $this->siteNode;
    }

    /**
     * @param NodeInterface|null $siteNode
     * @return CommandContext
     */
    public function setSiteNode(NodeInterface $siteNode = null): CommandContext
    {
        $this->siteNode = $siteNode;
        return $this;
    }

    /**
     * @return NodeInterface|null
     */
    public function getDocumentNode(): NodeInterface
    {
        return $this->documentNode;
    }

    /**
     * @param NodeInterface|null $documentNode
     * @return CommandContext
     */
    public function setDocumentNode(NodeInterface $documentNode = null): CommandContext
    {
        $this->documentNode = $documentNode;
        return $this;
    }

    /**
     * @return NodeInterface|null
     */
    public function getFocusedNode(): NodeInterface
    {
        return $this->focusedNode;
    }

    /**
     * @param NodeInterface|null $focusedNode
     * @return CommandContext
     */
    public function setFocusedNode(NodeInterface $focusedNode = null): CommandContext
    {
        $this->focusedNode = $focusedNode;
        return $this;
    }

}
