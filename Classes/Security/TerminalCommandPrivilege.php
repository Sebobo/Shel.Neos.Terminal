<?php
declare(strict_types=1);

namespace Shel\Neos\Terminal\Security;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Aop\Pointcut\PointcutFilterInterface;
use Neos\Flow\Reflection\ReflectionService;
use Neos\Flow\Security\Authorization\Privilege\AbstractPrivilege;
use Neos\Flow\Security\Authorization\Privilege\Method\MethodPrivilege;
use Neos\Flow\Security\Authorization\Privilege\Method\MethodPrivilegeInterface;
use Neos\Flow\Security\Authorization\Privilege\Method\MethodPrivilegeSubject;
use Neos\Flow\Security\Authorization\Privilege\PrivilegeSubjectInterface;
use Neos\Flow\Security\Authorization\Privilege\PrivilegeTarget;
use Neos\Flow\Security\Exception\InvalidPolicyException;
use Neos\Flow\Security\Exception\InvalidPrivilegeTypeException;
use Shel\Neos\Terminal\Command\TerminalCommandInterface;
use Shel\Neos\Terminal\Service\TerminalCommandService;

/**
 */
class TerminalCommandPrivilege extends AbstractPrivilege implements MethodPrivilegeInterface
{
    /**
     * @var MethodPrivilegeInterface
     */
    private $methodPrivilege;

    /**
     * @var boolean
     */
    private $initialized = false;

    /**
     * @return void
     * @throws \Neos\Flow\Security\Exception
     */
    public function initialize()
    {
        if ($this->initialized) {
            return;
        }
        $this->initialized = true;

        if ($this->getParsedMatcher() === '*') {
            $methodPrivilegeMatcher = 'within(' . TerminalCommandInterface::class . ') && method(public .*->invokeCommand())';
        } else {
            $classNames = $this->objectManager->get(ReflectionService::class)->getAllImplementationClassNamesForInterface(TerminalCommandInterface::class);
            $commandClassName = null;
            foreach ($classNames as $className) {
                $objectName = $this->objectManager->getObjectNameByClassName($className);
                if ($objectName instanceof TerminalCommandInterface && $objectName::getCommandName() === $this->getParsedMatcher()) {
                    $commandClassName = $className;
                    break;
                }
            }
            if ($commandClassName === null) {
                // TODO: Add message
                throw new InvalidPolicyException();
            }
            $methodPrivilegeMatcher = 'method(' . $commandClassName . '->invokeCommand())';
        }
        $methodPrivilegeTarget = new PrivilegeTarget($this->privilegeTarget->getIdentifier() . '__methodPrivilege', MethodPrivilege::class, $methodPrivilegeMatcher);
        $methodPrivilegeTarget->injectObjectManager($this->objectManager);
        $this->methodPrivilege = $methodPrivilegeTarget->createPrivilege($this->getPermission(), $this->getParameters());
    }

    /**
     * Returns a string which distinctly identifies this object and thus can be used as an identifier for cache entries
     * related to this object.
     *
     * @return string
     */
    public function getCacheEntryIdentifier(): string
    {
        $this->initialize();
        return $this->methodPrivilege->getCacheEntryIdentifier();
    }

    /**
     * Returns true, if this privilege covers the given subject
     *
     * @param PrivilegeSubjectInterface $subject
     * @return boolean
     * @throws InvalidPrivilegeTypeException if the given $subject is not supported by the privilege
     */
    public function matchesSubject(PrivilegeSubjectInterface $subject)
    {
        if (!($subject instanceof TerminalCommandPrivilegeSubject) && !($subject instanceof MethodPrivilegeSubject)) {
            throw new InvalidPrivilegeTypeException(
                sprintf(
                    'Privileges of type "%s" only support subjects of type "%s" or "%s", but we got a subject of type: "%s".',
                    self::class,
                    TerminalCommandPrivilegeSubject::class,
                    MethodPrivilegeSubject::class,
                    get_class($subject)
                ),
                1614872267
            );
        }
        $this->initialize();
        if ($subject instanceof MethodPrivilegeSubject) {
            return $this->methodPrivilege->matchesSubject($subject);
        }
        return $subject->getCommandName() === $this->getParsedMatcher();
    }

    /**
     * @param string $className
     * @param string $methodName
     * @return boolean
     */
    public function matchesMethod($className, $methodName)
    {
        $this->initialize();
        return $this->methodPrivilege->matchesMethod($className, $methodName);
    }

    /**
     * @return PointcutFilterInterface
     */
    public function getPointcutFilterComposite()
    {
        $this->initialize();
        return $this->methodPrivilege->getPointcutFilterComposite();
    }
}
