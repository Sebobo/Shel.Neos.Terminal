<?php

declare(strict_types=1);

namespace Shel\Neos\Terminal\Tests\Functional;

use GuzzleHttp\Psr7\ServerRequest;
use Neos\ContentRepository\Domain\Model\Node;
use Neos\ContentRepository\Domain\Model\NodeData;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\ContentRepository\Domain\Service\Context;
use Neos\Flow\Mvc\ActionRequest;
use Neos\Flow\Mvc\ActionResponse;
use Neos\Flow\Mvc\Controller\Arguments;
use Neos\Flow\Mvc\Controller\ControllerContext;
use Neos\Flow\Mvc\Routing\UriBuilder;
use Neos\Flow\Tests\FunctionalTestCase;
use Shel\Neos\Terminal\Command\EvaluateEelExpressionCommand;
use Shel\Neos\Terminal\Domain\CommandContext;

class EvaluateEelExpressionTest extends FunctionalTestCase
{
    const HOMEPAGE = 'homepage';
    const ABOUTUS = 'aboutus';
    const HEADLINE = 'headline';

    /**
     * @var EvaluateEelExpressionCommand
     */
    private $evaluateEelExpressionCommand;

    /**
     * @var CommandContext
     */
    private $commandContext;

    public function setUp(): void
    {
        parent::setUp();
        $this->evaluateEelExpressionCommand = $this->objectManager->get(EvaluateEelExpressionCommand::class);
        $context = $this->getMockBuilder(\Neos\Rector\ContentRepository90\Legacy\LegacyContextStub::class)->disableOriginalConstructor()->getMock();

        $siteNodeData = $this->getMockBuilder(NodeData::class)->disableOriginalConstructor()->getMock();
        $siteNodeData->method('getName')->willReturn(self::HOMEPAGE);
        $documentNodeData = $this->getMockBuilder(NodeData::class)->disableOriginalConstructor()->getMock();
        $documentNodeData->method('getName')->willReturn(self::ABOUTUS);
        $focusedNodeData = $this->getMockBuilder(NodeData::class)->disableOriginalConstructor()->getMock();
        $focusedNodeData->method('getName')->willReturn(self::HEADLINE);

        $this->commandContext = (new CommandContext($this->createControllerContext()))
            ->withSiteNode(new \Neos\ContentRepository\Core\Projection\ContentGraph\Node($siteNodeData, $context))
            ->withDocumentNode(new \Neos\ContentRepository\Core\Projection\ContentGraph\Node($documentNodeData, $context))
            ->withFocusedNode(new \Neos\ContentRepository\Core\Projection\ContentGraph\Node($focusedNodeData, $context));
    }

    /**
     * @test
     */
    public function failOnMissingExpression(): void
    {
        $expression = '';

        $result = $this->evaluateEelExpressionCommand->invokeCommand($expression, $this->commandContext);

        $this->assertFalse($result->isSuccess(), 'Command should fail on missing expression');
    }

    /**
     * @test
     */
    public function evaluateSimpleMathExpression(): void
    {
        $expression = '1 + 1';

        $result = $this->evaluateEelExpressionCommand->invokeCommand($expression, $this->commandContext);

        $this->assertTrue($result->isSuccess(), 'Evaluation of expression "' . $expression . '" failed');
        $this->assertEquals(2, $result->getResult());
    }

    /**
     * @test
     */
    public function evaluateSimpleStringConcatenationExpression(): void
    {
        $singleQuotedStringsExpression = "'a' + 'b'";
        $doubleQuotedStringsExpression = '"a" + "b"';
        $mixedQuotedStringsExpression = "\"a\" + 'b'";

        $resultSingleQuoted = $this->evaluateEelExpressionCommand->invokeCommand($singleQuotedStringsExpression,
            $this->commandContext);
        $resultDoubleQuoted = $this->evaluateEelExpressionCommand->invokeCommand($doubleQuotedStringsExpression,
            $this->commandContext);
        $resultMixedQuoted = $this->evaluateEelExpressionCommand->invokeCommand($mixedQuotedStringsExpression,
            $this->commandContext);

        $this->assertTrue($resultSingleQuoted->isSuccess(), 'Single quoted strings are not supported');
        $this->assertTrue($resultDoubleQuoted->isSuccess(), 'Double quoted strings are not supported');
        $this->assertTrue($resultMixedQuoted->isSuccess(), 'Mixed quoted strings are not supported');

        $this->assertEquals('ab', $resultSingleQuoted->getResult(), 'Concatenation of single quoted strings failed');
        $this->assertEquals('ab', $resultDoubleQuoted->getResult(), 'Concatenation of double quoted strings failed');
        $this->assertEquals('ab', $resultMixedQuoted->getResult(), 'Concatenation of mixed quoted strings failed');
    }

    /**
     * @test
     */
    public function failOnIncompleteExpression(): void
    {
        $expression = 'q(site).find("';

        $result = $this->evaluateEelExpressionCommand->invokeCommand($expression, $this->commandContext);

        $this->assertFalse($result->isSuccess(), 'Evaluation of expression "' . $expression . '" should fail');
    }

    /**
     * @test
     */
    public function evaluateExpressionWithSiteNodeContext(): void
    {
        $expression = 'site';

        $result = $this->evaluateEelExpressionCommand->invokeCommand($expression, $this->commandContext);

        $this->assertTrue($result->isSuccess(), 'Evaluation of expression "' . $expression . '" failed');
        $this->assertInstanceOf(\Neos\ContentRepository\Core\Projection\ContentGraph\Node::class, $result->getResult(),
            'Evaluation of expression "' . $expression . '" should return a node');
        $this->assertEquals(self::HOMEPAGE, $result->getResult()->nodeName,
            'Evaluation of expression "' . $expression . '" should return the site node');
    }

    /**
     * @test
     */
    public function evaluateExpressionWithDocumentNodeContext(): void
    {
        $expression = 'documentNode';

        $result = $this->evaluateEelExpressionCommand->invokeCommand($expression, $this->commandContext);

        $this->assertTrue($result->isSuccess(), 'Evaluation of expression "' . $expression . '" failed');
        $this->assertInstanceOf(\Neos\ContentRepository\Core\Projection\ContentGraph\Node::class, $result->getResult(),
            'Evaluation of expression "' . $expression . '" should return a node');
        $this->assertEquals(self::ABOUTUS, $result->getResult()->nodeName,
            'Evaluation of expression "' . $expression . '" should return the "about us" document node');
    }

    /**
     * @test
     */
    public function evaluateExpressionWithFocusedNodeContext(): void
    {
        $expression = 'node';

        $result = $this->evaluateEelExpressionCommand->invokeCommand($expression, $this->commandContext);

        $this->assertTrue($result->isSuccess(), 'Evaluation of expression "' . $expression . '" failed');
        $this->assertInstanceOf(\Neos\ContentRepository\Core\Projection\ContentGraph\Node::class, $result->getResult(),
            'Evaluation of expression "' . $expression . '" should return a node');
        $this->assertEquals(self::HEADLINE, $result->getResult()->nodeName,
            'Evaluation of expression "' . $expression . '" should return the focused headline content node');
    }

    /**
     * @test
     */
    public function evaluateComplexEelExpression(): void
    {
        $expression = 'Array.map([1,2,3], (i) => i * 2)';

        $result = $this->evaluateEelExpressionCommand->invokeCommand($expression, $this->commandContext);

        $this->assertTrue($result->isSuccess(), 'Evaluation of expression "' . $expression . '" failed');
        $this->assertEquals([2, 4, 6], $result->getResult(),
            'Evaluation of expression "' . $expression . '" should return an array');
    }

    /**
     * Create a simple controller context which can be used to instantiate a Fusion runtime etc.
     */
    protected function createControllerContext(): ControllerContext
    {
        $httpRequest = new ServerRequest('POST', 'http://localhost');
        $request = ActionRequest::fromHttpRequest($httpRequest);
        $response = new ActionResponse();
        $arguments = new Arguments([]);
        $uriBuilder = new UriBuilder();
        $uriBuilder->setRequest($request);

        return new ControllerContext($request, $response, $arguments, $uriBuilder);
    }
}
