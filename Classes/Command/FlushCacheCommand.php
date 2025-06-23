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
use Symfony\Component\Console\Exception\RuntimeException;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputDefinition;
use Symfony\Component\Console\Input\StringInput;

class FlushCacheCommand implements TerminalCommandInterface
{

    #[Flow\Inject]
    protected CacheManager $cacheManager;

    #[Flow\Inject]
    protected Translator $translator;

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
        return 'flushCache ' . self::getInputDefinition()->getSynopsis();
    }

    public static function getInputDefinition(): InputDefinition
    {
        return new InputDefinition([
            new InputArgument('cacheIdentifier', InputArgument::OPTIONAL),
        ]);
    }

    public function invokeCommand(string $argument, CommandContext $commandContext): CommandInvocationResult
    {
        $input = new StringInput($argument);
        $input->bind(self::getInputDefinition());

        try {
            $input->validate();
        } catch (RuntimeException $e) {
            return new CommandInvocationResult(false, $e->getMessage());
        }

        $cacheIdentifier = $input->getArgument('cacheIdentifier');
        $success = true;

        if ($cacheIdentifier) {
            if ($this->cacheManager->hasCache($cacheIdentifier)) {
                $this->cacheManager->getCache($cacheIdentifier)->flush();
                $result = $this->translator->translateById('command.flushCache.flushedOne',
                    ['cacheIdentifier' => $cacheIdentifier], null, null, 'Main', 'Shel.Neos.Terminal');
            } else {
                $success = false;
                $result = $this->translator->translateById('command.flushCache.cacheDoesNotExist',
                    ['cacheIdentifier' => $cacheIdentifier], null, null, 'Main', 'Shel.Neos.Terminal');
            }
        } else {
            $result = $this->translator->translateById('command.flushCache.flushedAll', [], null, null, 'Main',
                'Shel.Neos.Terminal');
            $this->cacheManager->flushCaches();
        }

        // Echo response as we have to exit the process prematurely or the application
        // will throw errors due to the flushed caches.
        // TODO: Find out if there is a better way to do this
        header('Content-Type: application/json');
        echo json_encode([
            'success' => $success,
            'result' => $result,
        ], JSON_THROW_ON_ERROR);
        exit;
    }
}
