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

use Neos\Cache\Exception\NoSuchCacheException;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Eel\Exception as EelException;
use Neos\Eel\ParserException;
use Neos\Flow\Annotations as Flow;
use Neos\Flow\Cache\CacheManager;
use Neos\Flow\ObjectManagement\ObjectManagerInterface;
use Neos\Flow\Reflection\ReflectionService;
use Shel\ContentRepository\Debugger\Service\EelEvaluationService;

/**
 * @Flow\Scope("singleton")
 */
class TerminalCommandController extends AbstractTerminalController
{

    /**
     * @Flow\Inject
     * @var EelEvaluationService
     */
    protected $eelEvaluationService;

    /**
     * @Flow\Inject
     * @var CacheManager
     */
    protected $cacheManager;

    /**
     * @param string $expression
     * @param NodeInterface $siteNode
     * @param NodeInterface $documentNode
     * @param NodeInterface|null $focusedNode
     */
    public function evaluateEelExpressionAction(
        string $expression,
        NodeInterface $siteNode,
        NodeInterface $documentNode,
        NodeInterface $focusedNode = null
    ): void {
        $success = true;

        $evaluationContext = [
            'site' => $siteNode,
            'documentNode' => $documentNode,
            'node' => $focusedNode,
        ];

        try {
            $result = $this->eelEvaluationService->evaluateEelExpression('${' . $expression . '}', $evaluationContext);
            $result = json_encode($result, JSON_THROW_ON_ERROR);
        } catch (EelException | ParserException | \JsonException $e) {
            $success = false;
            $result = $e->getMessage();
        }

        $this->view->assign('value', [
            'success' => $success,
            'result' => $result,
        ]);
    }

    /**
     * @param string|null $cacheIdentifier
     * @throws \JsonException|NoSuchCacheException
     */
    public function flushCacheAction(string $cacheIdentifier = null): void
    {
        $result = '';
        $success = true;

        // TODO: Translate responses
        if ($cacheIdentifier) {
            if ($this->cacheManager->hasCache($cacheIdentifier)) {
                $this->cacheManager->getCache($cacheIdentifier)->flush();
                $result = 'The cache "' . $cacheIdentifier . '" has been flushed';
            } else {
                $success = false;
                $result = 'The cache "' . $cacheIdentifier . '" does not exist';
            }
        } else {
            $this->cacheManager->flushCaches();
            $result = 'Flushed all caches';
        }

        // Echo response as we have to exit the process prematurely or the application
        // will throw errors due to the flushed caches.
        echo json_encode([
            'success' => $success,
            'result' => $result,
        ], JSON_THROW_ON_ERROR);
        exit;
    }

    public function executeCommand(): void
    {
        $this->pluginConfigurations = self::detectPlugins($this->objectManager);


    }

    /**
     * Detects plugins for this command controller
     *
     * @param ObjectManagerInterface $objectManager
     * @return array
     */
    protected static function detectPlugins(ObjectManagerInterface $objectManager): array
    {
        $pluginConfigurations = [];
        $classNames = $objectManager->get(ReflectionService::class)->getAllImplementationClassNamesForInterface(NodeCommandControllerPluginInterface::class);
        foreach ($classNames as $className) {
            $pluginConfigurations[$className] = [
                'object' => $objectManager->get($objectManager->getObjectNameByClassName($className))
            ];
        }
        return $pluginConfigurations;
    }
}
