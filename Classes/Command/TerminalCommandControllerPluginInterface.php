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

use Neos\ContentRepository\Domain\Model\NodeInterface;

/**
 * An interface for plugins for the TerminalCommandController
 */
interface TerminalCommandControllerPluginInterface
{
    public static function getCommandName(): string;

    public static function getCommandDescription(): string;

    public static function getCommandUsage(): string;

    public function invokeCommand(
        string $argument,
        NodeInterface $siteNode = null,
        NodeInterface $documentNode = null,
        NodeInterface $focusedNode = null
    ): CommandInvocationResult;
}
