<?php
declare(strict_types=1);

namespace Shel\Neos\Terminal\Service;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\ObjectManagement\ObjectManagerInterface;
use Neos\Flow\Reflection\ReflectionService;
use Shel\Neos\Terminal\Command\TerminalCommandInterface;

/**
 * Class TerminalCommandService
 * @Flow\Scope("singleton")
 */
class TerminalCommandService {

    /**
     * @var ObjectManagerInterface
     */
    private $objectManager;

    /**
     * @param ObjectManagerInterface $objectManager
     */
    public function __construct(ObjectManagerInterface $objectManager)
    {
        $this->objectManager = $objectManager;
    }

    /**
     * Detects plugins for this command controller
     *
     * @Flow\CompileStatic
     * @param ObjectManagerInterface $objectManager
     * @return array<string>
     */
    public static function detectCommandNames(ObjectManagerInterface $objectManager): array
    {
        $commandConfiguration = [];
        $classNames = $objectManager->get(ReflectionService::class)->getAllImplementationClassNamesForInterface(TerminalCommandInterface::class);
        foreach ($classNames as $className) {
            $objectName = $objectManager->getObjectNameByClassName($className);
            /** @var TerminalCommandInterface $objectName */
            if ($objectName) {
                $commandConfiguration[$objectName::getCommandName()] = $className;
            }
        }
        return $commandConfiguration;
    }

    /**
     * @param string $commandName
     * @return TerminalCommandInterface
     */
    public function getCommand(string $commandName): TerminalCommandInterface
    {
        /** @var TerminalCommandInterface $command */
        $command = $this->objectManager->get($this->getCommandClassName($commandName));
        return $command;
    }

    /**
     * @return array<string>
     */
    public function getCommandNames(): array
    {
        return array_keys(self::detectCommandNames($this->objectManager));
    }

    /**
     * @param string $commandName
     * @return string
     */
    public function getCommandClassName(string $commandName): string
    {
        $commandNames = self::detectCommandNames($this->objectManager);

        if (!array_key_exists($commandName, $commandNames)) {
            // TODO: Add message
            throw new \InvalidArgumentException($commandName . json_encode($commandNames), 1614873907);
        }

        return $commandNames[$commandName];
    }
}
