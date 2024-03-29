<?php
declare(strict_types=1);

namespace Shel\Neos\Terminal\Service;

/**
 * This file is part of the Shel.Neos.Terminal package.
 *
 * (c) 2021 Sebastian Helzle
 *
 * This package is Open Source Software. For the full copyright and license
 * information, please view the LICENSE file which was distributed with this
 * source code.
 */

use Neos\Eel\CompilingEvaluator;
use Neos\Eel\Exception as EelException;
use Neos\Eel\Utility as EelUtility;
use Neos\Flow\Annotations as Flow;

/**
 * @Flow\Scope("singleton")
 */
class EelEvaluationService
{
    /**
     * @Flow\Inject(lazy=false)
     * @var CompilingEvaluator
     */
    protected $eelEvaluator;

    /**
     * @Flow\InjectConfiguration(path="defaultContext", package="Neos.Fusion")
     */
    protected array $defaultContext;

    protected ?array $defaultContextVariables = null;

    /**
     * Evaluate an Eel expression.
     *
     * @return mixed The result of the evaluated Eel expression
     * @throws EelException
     */
    public function evaluateEelExpression(string $expression, array $contextVariables = [])
    {
        if ($this->defaultContextVariables === null) {
            $this->defaultContextVariables = EelUtility::getDefaultContextVariables($this->defaultContext);
        }
        $contextVariables = array_merge($this->defaultContextVariables, $contextVariables);
        return EelUtility::evaluateEelExpression($expression, $this->eelEvaluator, $contextVariables);
    }

}
