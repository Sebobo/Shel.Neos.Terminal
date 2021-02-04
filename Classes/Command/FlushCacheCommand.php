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

use Neos\Flow\Annotations as Flow;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Flow\Cache\CacheManager;

class FlushCacheCommand implements TerminalCommandControllerPluginInterface
{

    /**
     * @Flow\Inject
     * @var CacheManager
     */
    protected $cacheManager;

    public static function getCommandName(): string
    {
        return 'flushCache';
    }

    public static function getCommandDescription(): string
    {
        return 'Shel.Neos.Terminal:Main:command.flushCache.description';
    }

    public static function getCommandUsage(): string
    {
        return 'flushCache [<string>]';
    }

    public function invokeCommand(
        string $argument,
        NodeInterface $siteNode = null,
        NodeInterface $documentNode = null,
        NodeInterface $focusedNode = null
    ): CommandInvocationResult
    {
        $cacheIdentifier = $argument;
        $success = true;

        // TODO: Translate responses
        if ($cacheIdentifier) {
            if ($this->cacheManager->hasCache($cacheIdentifier)) {
                $this->cacheManager->getCache($cacheIdentifier)->flush();
                $result = 'The cache "' . $cacheIdentifier . '" has been flushed';
            } else {
                $success = false;
                $result = 'The cache "' . $cacheIdentifier . '" does not exist';
            }
        } else {
            $this->cacheManager->flushCaches();
            $result = 'Flushed all caches';
        }

        // Echo response as we have to exit the process prematurely or the application
        // will throw errors due to the flushed caches.
        header('Content-Type: application/json');
        echo json_encode([
            'success' => $success,
            'result' => $result,
        ], JSON_THROW_ON_ERROR);
        exit;
    }
}
