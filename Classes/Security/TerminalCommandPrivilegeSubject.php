<?php
declare(strict_types=1);

namespace Shel\Neos\Terminal\Security;

/**
 * This file is part of the Shel.Neos.Terminal package.
 *
 * (c) 2021 Sebastian Helzle
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */

use Neos\Flow\Security\Authorization\Privilege\PrivilegeSubjectInterface;

class TerminalCommandPrivilegeSubject implements PrivilegeSubjectInterface
{
    /**
     * @var string
     */
    private $commandName;

    public function __construct(string $commandName)
    {
        $this->commandName = $commandName;
    }

    public function getCommandName(): string
    {
        return $this->commandName;
    }
}
