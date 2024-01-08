import React from 'react';

// @ts-ignore
import { selectors } from '@neos-project/neos-ui-redux-store';

import fetchCommands from '../helpers/fetchCommands';
import { CommandList, I18nRegistry, NeosRootState } from '../interfaces';
import doInvokeCommand from '../helpers/doInvokeCommand';
import Command from '../interfaces/Command';

interface NeosStore {
    getState: () => NeosRootState;
    dispatch: () => void;
}

/**
 * Provides a registry for terminal commands for the Shel.Neos.CommandBar plugin
 */
// noinspection JSPotentiallyInvalidUsageOfClassThis
class TerminalCommandRegistry {
    constructor(readonly config: TerminalConfig, readonly i18nRegistry: I18nRegistry, readonly store: NeosStore) {
        this.invokeCommand = this.invokeCommand.bind(this);
    }

    private commands: CommandList;

    public getCommands = async () => {
        if (this.commands) return this.commands;
        return (this.commands = await fetchCommands(this.config.getCommandsEndPoint).then(({ result }) => result));
    };

    public translate = (
        id: string,
        fallback = '',
        params: Record<string, unknown> | string[] = [],
        packageKey = 'Shel.Neos.Terminal',
        sourceName = 'Main'
    ): string => {
        return this.i18nRegistry.translate(id, fallback, params, packageKey, sourceName);
    };

    public getCommandsForCommandBar = async () => {
        const commands = await this.getCommands();
        const invokeCommand = this.invokeCommand;
        return {
            'shel.neos.terminal': {
                name: 'Terminal',
                description: 'Execute terminal commands',
                icon: 'terminal',
                subCommands: Object.values(commands).reduce((acc, { name, description }) => {
                    acc[name] = {
                        name,
                        icon: 'terminal',
                        description: this.translate(description),
                        action: async function* (arg) {
                            yield* invokeCommand(name, arg);
                        },
                        canHandleQueries: true,
                        executeManually: true,
                    };
                    return acc;
                }, {}),
            },
        };
    };

    public invokeCommand = async function* (commandName: string, arg = '') {
        const state = this.store.getState();
        const siteNode = selectors.CR.Nodes.siteNodeSelector(state);
        const documentNode = selectors.CR.Nodes.documentNodeSelector(state);
        const focusedNodes = selectors.CR.Nodes.focusedNodePathsSelector(state);
        const command = this.commands[commandName] as Command;

        if (!arg) {
            yield {
                success: true,
                message: this.translate(
                    'TerminalCommandRegistry.message.provideArguments',
                    `Please provide arguments for command "${commandName}"`,
                    { commandName }
                ),
                view: (
                    <div>
                        <p>{this.translate(command.description)}</p>
                        <code>{command.usage}</code>
                    </div>
                ),
            };
        } else {
            const response = await doInvokeCommand(
                this.config.invokeCommandEndPoint,
                commandName,
                [arg],
                siteNode.contextPath,
                focusedNodes[0]?.contextPath,
                documentNode.contextPath
            );

            let result = response.result;

            // Try to prettify json results
            try {
                const parsedResult = JSON.parse(result);
                if (typeof parsedResult !== 'string') {
                    result = (
                        <pre>
                            <code>{JSON.stringify(parsedResult, null, 2)}</code>
                        </pre>
                    );
                } else {
                    result = <p>{result.replace(/\\n/g, '\n')}</p>;
                }
            } catch (e) {
                // Treat result as simple string
            }

            yield {
                success: response.success,
                message: this.translate(
                    'TerminalCommandRegistry.message.result',
                    `Result of command "${commandName}"`,
                    { commandName }
                ),
                view: result,
            };
        }
    };
}

let singleton = null;

export default function getTerminalCommandRegistry(
    config: TerminalConfig,
    i18nRegistry: I18nRegistry,
    store: NeosStore
): TerminalCommandRegistry {
    return singleton ?? (singleton = new TerminalCommandRegistry(config, i18nRegistry, store));
}
