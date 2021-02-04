<?php
declare(strict_types=1);

namespace Shel\Neos\Terminal\Controller;

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
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\View\JsonView;
use Shel\Neos\Terminal\Exception as TerminalException;

class AbstractTerminalController extends ActionController
{

    /**
     * @var array
     */
    protected $viewFormatToObjectNameMap = [
        'json' => JsonView::class,
    ];

    /**
     * @Flow\InjectConfiguration(path="frontendConfiguration", package="Neos.Neos.Ui")
     * @var array
     */
    protected $frontendConfiguration;

    /**
     * Thorws exception when terminal is disabled or the called command doesn't exist
     *
     * @throws TerminalException
     */
    protected function initializeAction()
    {
        $terminalConfiguration = $this->frontendConfiguration['Shel.Neos.Terminal:Terminal'];

        $terminalEnabled = $terminalConfiguration['enabled'] ?? false;
        if (!$terminalEnabled) {
            throw new TerminalException('Terminal commands are disabled');
        }

        $actionName = $this->request->getControllerActionName();
        $commandEnabled = $terminalConfiguration['commands'][$actionName] ?? false;
        if (!$commandEnabled) {
            throw new TerminalException('Terminal command "' . $actionName . '" is disabled');
        }

        parent::initializeAction();
    }
}
