<?php
declare(strict_types=1);

namespace Shel\Neos\Terminal\Command;

use Neos\Neos\Ui\Domain\Model\FeedbackCollection;
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
    /**
     * @var bool
     */
    protected $success;

    /**
     * @var mixed
     */
    protected $result;

    /**
     * @var array<FeedbackInterface>
     */
    protected $feedback;

    /**
     * @param bool $success
     * @param mixed $result has to be json serializable
     * @param array $feedback
     */
    public function __construct(bool $success, $result, array $feedback = [])
    {
        $this->success = $success;
        $this->result = $result;
        $this->feedback = $feedback;
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

    public function getFeedback(): array
    {
        return $this->feedback;
    }
}
