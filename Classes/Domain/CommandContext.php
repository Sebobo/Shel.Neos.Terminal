<?php
declare(strict_types=1);

namespace Shel\Neos\Terminal\Domain;

use Neos\ContentRepository\Core\Projection\ContentGraph\Node;
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
     * @var Node
     */
    protected $siteNode;

    /**
     * @var Node
     */
    protected $documentNode;

    /**
     * @var Node
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

    public function getSiteNode(): ?Node
    {
        return $this->siteNode;
    }

    public function withSiteNode(Node $siteNode = null): CommandContext
    {
        $instance = clone $this;
        $instance->siteNode = $siteNode;
        return $instance;
    }

    public function getDocumentNode(): ?Node
    {
        return $this->documentNode;
    }

    public function withDocumentNode(Node $documentNode = null): CommandContext
    {
        $instance = clone $this;
        $instance->documentNode = $documentNode;
        return $instance;
    }

    public function getFocusedNode(): ?Node
    {
        return $this->focusedNode;
    }

    public function withFocusedNode(Node $focusedNode = null): CommandContext
    {
        $instance = clone $this;
        $instance->focusedNode = $focusedNode;
        return $instance;
    }

}
