<?php
declare(strict_types=1);

namespace Shel\Neos\Terminal\Security;

use Neos\Flow\Security\Authorization\Privilege\PrivilegeSubjectInterface;

/**
 * A subject for the TerminalCommandPrivilege
 */
class TerminalCommandPrivilegeSubject implements PrivilegeSubjectInterface
{
    /**
     * @var string
     */
    private $commandName;

    /**
     * @param string $commandName
     */
    public function __construct(string $commandName)
    {
        $this->commandName = $commandName;
    }

    /**
     * @return string
     */
    public function getCommandName(): string
    {
        return $this->commandName;
    }
}
