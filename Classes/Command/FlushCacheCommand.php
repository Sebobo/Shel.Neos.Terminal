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
use Neos\Flow\Cache\CacheManager;
use Neos\Flow\I18n\Translator;
use Shel\Neos\Terminal\Domain\CommandContext;
use Shel\Neos\Terminal\Domain\CommandInvocationResult;

class FlushCacheCommand implements TerminalCommandInterface
{

    /**
     * @Flow\Inject
     * @var CacheManager
     */
    protected $cacheManager;

    /**
     * @Flow\Inject
     * @var Translator
     */
    protected $translator;

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

    public function invokeCommand(string $argument, CommandContext $commandContext): CommandInvocationResult
    {
        $cacheIdentifier = $argument;
        $success = true;

        if ($cacheIdentifier) {
            if ($this->cacheManager->hasCache($cacheIdentifier)) {
                $this->cacheManager->getCache($cacheIdentifier)->flush();
                $result = $this->translator->translateById('command.flushCache.flushedOne', ['cacheIdentifier' => $cacheIdentifier]);
            } else {
                $success = false;
                $result = $this->translator->translateById('command.flushCache.cacheDoesNotExist', ['cacheIdentifier' => $cacheIdentifier]);
            }
        } else {
            $this->cacheManager->flushCaches();
            $result = $this->translator->translateById('command.flushCache.flushedAll');
        }

        // Echo response as we have to exit the process prematurely or the application
        // will throw errors due to the flushed caches.
        // TODO: Find out if there is a better way to do this
        header('Content-Type: application/json');
        echo json_encode([
            'success' => $success,
            'result' => $result,
        ]);
        exit;
    }
}
