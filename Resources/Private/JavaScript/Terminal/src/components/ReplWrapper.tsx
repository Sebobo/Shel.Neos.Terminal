import React, { useMemo, useRef, useState } from 'react';
import Terminal from 'react-console-emulator';
// @ts-ignore
import { themr } from '@friendsofreactjs/react-css-themr';

// @ts-ignore
import { IconButton } from '@neos-project/react-ui-components';

import I18nRegistry from '../interfaces/I18nRegistry';
import { Node } from '../interfaces/Node';
import { useCommands } from '../provider/CommandsProvider';

// @ts-ignore
import style from './ReplWrapper.css';
import SponsorshipWidget from './SponsorshipWidget';

export interface TerminalTheme {
    contentStyle: Record<string, any> | string;
    styleEchoBack: Record<string, any> | string;
    promptLabelStyle: Record<string, any> | string;
    inputTextStyle: Record<string, any> | string;
}

interface ReplProps {
    config: {
        theme: TerminalTheme;
        welcomeMessage?: string;
    };
    i18nRegistry: I18nRegistry;
    user: {
        firstName: string;
        lastName: string;
        fullName: string;
    };
    siteNode: Node;
    documentNode: Node;
    className?: string;
    theme?: Record<string, string>;
    registrationKey: string;
}

window['NeosTerminal'] = {};

const ReplWrapper: React.FC<ReplProps> = ({
    config,
    i18nRegistry,
    theme,
    user,
    siteNode,
    documentNode,
    registrationKey,
}) => {
    const { invokeCommand, commands } = useCommands();
    const terminal = useRef<Terminal>();
    const [showTerminal, setShowTerminal] = useState(false);

    const promptLabel = useMemo(() => {
        const currentPath =
            siteNode.contextPath === documentNode.contextPath ? '~' : documentNode.properties.uriPathSegment;
        return `${user.firstName}@${siteNode.name}:${currentPath}$`;
    }, [user.firstName, siteNode.name, documentNode.contextPath, documentNode.properties.uriPathSegment]);

    const commandsDefinition = useMemo(() => {
        return Object.keys(commands).reduce((carry, commandName) => {
            const command = commands[commandName];

            // Register command globally
            window['NeosTerminal'][commandName] = (...args) => invokeCommand(commandName, args);

            carry[commandName] = {
                ...command,
                description: i18nRegistry.translate(command.description ?? ''),
                fn: (...args) => {
                    const currentTerminal = terminal.current;
                    invokeCommand(commandName, args)
                        .then((result) => {
                            currentTerminal.state.stdout.pop();
                            let output;
                            if (!result) {
                                output = i18nRegistry.translate('Shel.Neos.Terminal:Main:command.empty');
                            } else {
                                output = typeof result === 'string' ? result : JSON.stringify(result);
                            }
                            currentTerminal.pushToStdout(output);
                        })
                        .catch((error) => {
                            // TODO: Translate error
                            console.error(error, `An error occurred during invocation of the "${commandName}" command`);
                            currentTerminal.state.stdout.pop();
                            currentTerminal.pushToStdout(
                                i18nRegistry.translate('Shel.Neos.Terminal:Main:command.error')
                            );
                        });
                    return i18nRegistry.translate('Shel.Neos.Terminal:Main:command.evaluating');
                },
            };
            return carry;
        }, {});
    }, [commands, invokeCommand]);

    return (
        <div className={theme.replWrapper}>
            <IconButton
                onClick={() => setShowTerminal(!showTerminal)}
                isActive={showTerminal}
                title={i18nRegistry.translate('Shel.Neos.Terminal:Main:toggleTerminal')}
                icon="terminal"
            />
            <div className={theme.terminalWrapper} style={{ display: showTerminal ? 'block' : 'none' }}>
                <Terminal
                    autoFocus={true}
                    ref={terminal}
                    commands={commandsDefinition}
                    ignoreCommandCase={true}
                    welcomeMessage={i18nRegistry.translate(config.welcomeMessage)}
                    promptLabel={promptLabel}
                    contentStyle={config.theme.contentStyle}
                    styleEchoBack={config.theme.styleEchoBack}
                    promptLabelStyle={config.theme.promptLabelStyle}
                    inputTextStyle={config.theme.inputTextStyle}
                    className={theme.terminalContainer}
                />
                <SponsorshipWidget i18nRegistry={i18nRegistry} registrationKey={registrationKey} />
            </div>
        </div>
    );
};

export default React.memo(themr('shel-neos-terminal/replWrapper', style)(ReplWrapper));
