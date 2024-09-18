import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import Terminal from 'react-console-emulator';

// @ts-ignore
import { themr } from '@friendsofreactjs/react-css-themr';

// @ts-ignore
import { IconButton } from '@neos-project/react-ui-components';

import { Node, RegistrationKey } from '../interfaces';
import SponsorshipBadge from './SponsorshipBadge';
import { useCommands } from '../provider/CommandsProvider';

// @ts-ignore
import style from './ReplWrapper.css';

interface ReplProps {
    config: {
        theme: TerminalTheme;
        welcomeMessage?: string;
        registrationKey?: RegistrationKey;
    };
    user: TerminalUser;
    siteNode: Node;
    documentNode: Node;
    theme?: Record<string, string>;
    terminalOpen?: boolean;
    toggleNeosTerminal: (visible?: boolean) => void;
}

const ReplWrapper: React.FC<ReplProps> = ({
    config,
    theme,
    user,
    siteNode,
    documentNode,
    terminalOpen,
    toggleNeosTerminal,
}) => {
    const { invokeCommand, commands, translate } = useCommands();
    const terminal = useRef<Terminal>();

    const promptLabel = useMemo(() => {
        const currentPath =
            siteNode?.contextPath === documentNode?.contextPath ? '~' : documentNode?.properties?.uriPathSegment;
        return `${user.firstName}@${siteNode?.name}:${currentPath}$`;
    }, [user.firstName, siteNode?.name, documentNode?.contextPath, documentNode?.properties?.uriPathSegment]);

    const commandsDefinition = useMemo(() => {
        const newCommands = Object.keys(commands).reduce((carry, commandName) => {
            const command = commands[commandName];

            // Register command globally
            window.NeosTerminal[commandName] = (...args: any[]) => invokeCommand(commandName, args);

            carry[commandName] = {
                ...command,
                description: translate(command.description ?? ''),
                fn: async (...args: any[]) => {
                    const currentTerminal = terminal.current;
                    currentTerminal.pushToStdout(translate('command.evaluating'));
                    let evaluatingMessageRemoved = false;
                    for await (const result of invokeCommand(commandName, args)) {
                        if (!evaluatingMessageRemoved) {
                            currentTerminal.state.stdout.pop();
                            evaluatingMessageRemoved = true;
                        }
                        let output = result;
                        if (!result) {
                            output = translate('command.empty');
                        }
                        currentTerminal.pushToStdout(output);
                    }
                },
            };
            return carry;
        }, {});

        newCommands['help'] = {
            name: 'help',
            description: translate('command.help.description'),
            usage: 'help <commandName>',
            fn: (commandName) => {
                const currentTerminal = terminal.current;
                if (!commandName) {
                    currentTerminal.showHelp();
                } else if (!commands[commandName]) {
                    currentTerminal.pushToStdout(translate('command.help.unknownCommand'));
                } else {
                    const command = commands[commandName];
                    currentTerminal.pushToStdout(`${translate(command.description)} - ${command.usage}`);
                }
            },
        };

        newCommands['clear'] = {
            name: 'clear',
            description: translate('command.clear.description'),
            usage: 'clear',
            fn: () => terminal.current.clearStdout(),
        };

        return newCommands;
    }, [commands, invokeCommand]);

    const autocomplete = useCallback(
        (input) => {
            const commandNames = Object.keys(commands);
            const currentValue = input.value;
            const matches = commandNames.filter((key) => key.startsWith(currentValue));

            if (!matches) return;

            if (matches.length === 1) {
                input.value = matches[0] + ' ';
            } else {
                const currentTerminal = terminal.current;
                const [lastItem] = currentTerminal.state.stdout.slice(-1);
                const message = translate('matchingCommands', 'Matching commands: {commands}', {
                    commands: matches.join(' '),
                });
                if (lastItem.message !== message) {
                    currentTerminal.pushToStdout(message, { isEcho: true });
                }
            }
        },
        [commands]
    );

    // Focus terminal when opened
    useEffect(() => {
        if (terminalOpen) {
            setTimeout(() => terminal.current?.focusTerminal(), 0);
        }
    }, [terminalOpen]);

    // Close terminal on ESC
    const onKeyUp = useCallback(
        (e) => {
            if (terminalOpen && e.keyCode === 27) {
                toggleNeosTerminal(false);
            }
        },
        [terminalOpen]
    );

    if (!Object.keys(commands).length) return null;

    return (
        <div className={theme.replWrapper} onKeyUp={onKeyUp}>
            <IconButton
                onClick={() => toggleNeosTerminal()}
                isActive={terminalOpen}
                title={translate('toggleTerminal')}
                icon="terminal"
            />
            <div className={theme.terminalWrapper} style={{ display: terminalOpen ? 'block' : 'none' }}>
                <Terminal
                    autoFocus={true}
                    ref={terminal}
                    commands={commandsDefinition}
                    ignoreCommandCase={true}
                    welcomeMessage={translate(config.welcomeMessage)}
                    promptLabel={promptLabel}
                    onTab={autocomplete}
                    noDefaults
                    style={{ borderRadius: 0, maxHeight: '50vh' }}
                    {...config.theme}
                />
                <SponsorshipBadge registrationKey={config.registrationKey} />
            </div>
        </div>
    );
};

export default React.memo(themr('shel-neos-terminal/replWrapper', style)(ReplWrapper));
