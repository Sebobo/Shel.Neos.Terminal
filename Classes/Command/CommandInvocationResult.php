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

class CommandInvocationResult implements \JsonSerializable
{
    protected $success;

    protected $result;

    /**
     * @param bool $success
     * @param mixed $result anything that can be json serialised
     */
    public function __construct(bool $success, $result)
    {
        $this->success = $success;
        $this->result = $result;
    }

    /**
     * @return bool
     */
    public function isSuccess(): bool
    {
        return $this->success;
    }

    /**
     * @return mixed
     */
    public function getResult()
    {
        return $this->result;
    }

    public function jsonSerialize(): array
    {
        return [
            'success' => $this->success,
            'result' => $this->result,
        ];
    }
}
