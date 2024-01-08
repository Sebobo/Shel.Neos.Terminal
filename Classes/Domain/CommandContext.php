<?php
declare(strict_types=1);

namespace Shel\Neos\Terminal\Domain;

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

    public function __construct(ControllerContext $controllerContext)
    {
        $this->controllerContext = $controllerContext;
    }

    public function getControllerContext(): ControllerContext
    {
        return $this->controllerContext;
    }

    public function getSiteNode(): ?NodeInterface
    {
        return $this->siteNode;
    }

    public function withSiteNode(NodeInterface $siteNode = null): CommandContext
    {
        $instance = clone $this;
        $instance->siteNode = $siteNode;
        return $instance;
    }

    public function getDocumentNode(): ?NodeInterface
    {
        return $this->documentNode;
    }

    public function withDocumentNode(NodeInterface $documentNode = null): CommandContext
    {
        $instance = clone $this;
        $instance->documentNode = $documentNode;
        return $instance;
    }

    public function getFocusedNode(): ?NodeInterface
    {
        return $this->focusedNode;
    }

    public function withFocusedNode(NodeInterface $focusedNode = null): CommandContext
    {
        $instance = clone $this;
        $instance->focusedNode = $focusedNode;
        return $instance;
    }

}
