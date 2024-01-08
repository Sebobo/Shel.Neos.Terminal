<?php
declare(strict_types=1);

namespace Shel\Neos\Terminal\Domain;

use Neos\Neos\Ui\Domain\Model\FeedbackInterface;

/**
 * This file is part of the Shel.Neos.Terminal package.
 *
 * (c) 2021 Sebastian Helzle
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */

class CommandInvocationResult
{
    protected bool $success;

    /**
     * @var mixed
     */
    protected $result;

    /**
     * @var array<FeedbackInterface>
     */
    protected array $uiFeedback;

    /**
     * @param mixed $result has to be json serializable
     */
    public function __construct(bool $success, $result, array $uiFeedback = [])
    {
        $this->success = $success;
        $this->result = $result;
        $this->uiFeedback = $uiFeedback;
    }

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

    public function getUiFeedback(): array
    {
        return $this->uiFeedback;
    }
}
