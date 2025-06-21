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
     * @var \Neos\ContentRepository\Core\Projection\ContentGraph\Node
     */
    protected $siteNode;

    /**
     * @var \Neos\ContentRepository\Core\Projection\ContentGraph\Node
     */
    protected $documentNode;

    /**
     * @var \Neos\ContentRepository\Core\Projection\ContentGraph\Node
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

    public function getSiteNode(): ?\Neos\ContentRepository\Core\Projection\ContentGraph\Node
    {
        return $this->siteNode;
    }

    public function withSiteNode(\Neos\ContentRepository\Core\Projection\ContentGraph\Node $siteNode = null): CommandContext
    {
        $instance = clone $this;
        $instance->siteNode = $siteNode;
        return $instance;
    }

    public function getDocumentNode(): ?\Neos\ContentRepository\Core\Projection\ContentGraph\Node
    {
        return $this->documentNode;
    }

    public function withDocumentNode(\Neos\ContentRepository\Core\Projection\ContentGraph\Node $documentNode = null): CommandContext
    {
        $instance = clone $this;
        $instance->documentNode = $documentNode;
        return $instance;
    }

    public function getFocusedNode(): ?\Neos\ContentRepository\Core\Projection\ContentGraph\Node
    {
        return $this->focusedNode;
    }

    public function withFocusedNode(\Neos\ContentRepository\Core\Projection\ContentGraph\Node $focusedNode = null): CommandContext
    {
        $instance = clone $this;
        $instance->focusedNode = $focusedNode;
        return $instance;
    }

}
