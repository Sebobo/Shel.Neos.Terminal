import React from 'react';

// @ts-ignore
import { selectors, actions } from '@neos-project/neos-ui-redux-store';

import fetchCommands from '../helpers/fetchCommands';
import { CommandList, I18nRegistry, NeosRootState } from '../interfaces';
import doInvokeCommand from '../helpers/doInvokeCommand';
import Command from '../interfaces/Command';
import logToConsole from '../helpers/logger';

interface NeosStore {
    getState: () => NeosRootState;
    dispatch: (action: any) => void;
}

// noinspection JSPotentiallyInvalidUsageOfClassThis
/**
 * Provides a registry for terminal commands for the Shel.Neos.CommandBar plugin
 */
class TerminalCommandRegistry {
    constructor(readonly config: TerminalConfig, readonly i18nRegistry: I18nRegistry, readonly store: NeosStore) {
        this.invokeCommand = this.invokeCommand.bind(this);
    }

    private commands: CommandList;
    private loading = false;

    public getCommands = async (): Promise<CommandList> => {
        // Wait for commands to be loaded if another call already requested them
        let i = 0;
        while (this.loading) {
            i++;
            await new Promise((resolve) => setTimeout(resolve, 100));
            if (i > 100) {
                logToConsole('warn', 'Loading commands timed out');
                break;
            }
        }
        if (this.commands) return this.commands;

        // Load commands
        this.loading = true;
        return (this.commands = await fetchCommands(this.config.getCommandsEndPoint)
            .then(({ result }) => result)
            .finally(() => (this.loading = false)));
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

    public getCommandsForCommandBar = async (): Promise<Record<string, object>> => {
        const commands = await this.getCommands();
        const invokeCommand = this.invokeCommand;
        return Object.keys(commands).length > 0
            ? {
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
              }
            : {};
    };

    public invokeCommand = async function* (
        commandName: string,
        argument = ''
    ): AsyncGenerator<CommandInvocationResult, CommandInvocationResult, void> {
        const state = this.store.getState();
        const siteNode = selectors.CR.Nodes.siteNodeSelector(state);
        const documentNode = selectors.CR.Nodes.documentNodeSelector(state);
        const focusedNodes = selectors.CR.Nodes.focusedNodePathsSelector(state);
        const setActiveContentCanvasSrc = actions.UI.ContentCanvas.setSrc;
        const command = this.commands[commandName] as Command;

        if (!argument) {
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
                argument,
                siteNode.contextPath,
                focusedNodes[0]?.contextPath,
                documentNode.contextPath
            ).catch((error) => {
                console.error(
                    error,
                    this.translate(
                        'command.invocationError',
                        `An error occurred during invocation of the command "${commandName}"`,
                        { commandName }
                    )
                );
                return {
                    success: false,
                    message: this.translate(
                        'TerminalCommandRegistry.message.error',
                        `An error occurred during invocation of the command "${commandName}"`,
                        { commandName }
                    ),
                    result: error.message,
                    uiFeedback: null,
                };
            });

            const { success, result, uiFeedback } = response;
            let view = result;

            if (uiFeedback) {
                this.store.dispatch(actions.ServerFeedback.handleServerFeedback(uiFeedback));
            }

            // Try to prettify json results
            try {
                const parsedResult = JSON.parse(result);
                if (typeof parsedResult !== 'string') {
                    view = (
                        <pre>
                            <code>{JSON.stringify(parsedResult, null, 2)}</code>
                        </pre>
                    );
                    if (Array.isArray(parsedResult)) {
                        const resultType = parsedResult[0].__typename ?? '';
                        if (resultType === 'NodeResult') {
                            yield {
                                success: true,
                                message: this.translate(
                                    'TerminalCommandRegistry.message.nodeResults',
                                    `${parsedResult.length} results`,
                                    { matches: parsedResult.length }
                                ),
                                view,
                                options: (parsedResult as NodeResult[]).reduce(
                                    (carry, { identifier, label, nodeType, breadcrumb, uri, icon, score }) => {
                                        if (!uri) {
                                            // Skip nodes without uri
                                            return carry;
                                        }

                                        carry[identifier] = {
                                            id: identifier,
                                            name: label + (score ? ` ${score}` : ''),
                                            description: breadcrumb,
                                            category: nodeType,
                                            action: async () => {
                                                this.store.dispatch(setActiveContentCanvasSrc(uri));
                                            },
                                            closeOnExecute: true,
                                            icon,
                                        };
                                        return carry;
                                    },
                                    {}
                                ),
                            };
                            return;
                        }
                    }
                } else {
                    view = <p>{result.replace(/\\n/g, '\n')}</p>;
                }
            } catch (e) {
                // Treat result as simple string
            }

            yield {
                success,
                message: this.translate(
                    'TerminalCommandRegistry.message.result',
                    `Result of command "${commandName}"`,
                    { commandName }
                ),
                view,
            };
        }
    };
}

let singleton = null;

export default function getTerminalCommandRegistry(
    config?: TerminalConfig,
    i18nRegistry?: I18nRegistry,
    store?: NeosStore
): TerminalCommandRegistry {
    if (singleton) return singleton;
    if (!config) throw Error('No config provided for TerminalCommandRegistry');
    if (!i18nRegistry) throw Error('No i18nRegistry provided for TerminalCommandRegistry');
    if (!store) throw Error('No store provided for TerminalCommandRegistry');
    return (singleton = new TerminalCommandRegistry(config, i18nRegistry, store));
}
