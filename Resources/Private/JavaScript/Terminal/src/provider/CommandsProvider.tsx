import * as React from 'react';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { FeedbackEnvelope, I18nRegistry, CommandList, NodeContextPath } from '../interfaces';
import fetchCommands from '../helpers/fetchCommands';
import doInvokeCommand from '../helpers/doInvokeCommand';

interface CommandsContextProps {
    children: React.ReactElement;
    getCommandsEndPoint: string;
    invokeCommandEndPoint: string;
    siteNode: NodeContextPath;
    documentNode: NodeContextPath;
    focusedNode?: NodeContextPath;
    i18nRegistry: I18nRegistry;
    handleServerFeedback: (feedback: FeedbackEnvelope) => void;
}

interface CommandsContextValues {
    commands: CommandList;
    invokeCommand: (endPoint: string, param: string[]) => Promise<string>;
    translate: (
        id: string,
        fallback?: string,
        params?: Record<string, unknown> | string[],
        packageKey?: string,
        sourceName?: string
    ) => string;
}

export const CommandsContext = createContext({} as CommandsContextValues);
export const useCommands = (): CommandsContextValues => useContext(CommandsContext);

const ConsoleStyle = {
    base: ['color: #fff', 'background-color: #00adee', 'font-weight: bold', 'padding: 2px 4px', 'border-radius: 2px'],
    error: ['color: #fff', 'background-color: red'],
    success: ['color: #fff', 'background-color: #00a338'],
    text: ['color:#fff'],
};

const logToConsole = (type = 'log', text: string, ...args) => {
    let finalStyle = ConsoleStyle.base.join(';') + ';';
    if (ConsoleStyle[type]) {
        finalStyle += ConsoleStyle[type].join(';');
    }
    console[type](`%c[Neos.Terminal]%c ${text}:`, finalStyle, ConsoleStyle.text.join(';'), ...args);
};

// TODO: Either provider or use TerminalCommandRegistry instead
export const CommandsProvider = ({
    invokeCommandEndPoint,
    getCommandsEndPoint,
    children,
    documentNode,
    focusedNode,
    siteNode,
    i18nRegistry,
    handleServerFeedback,
}: CommandsContextProps) => {
    const [commands, setCommands] = useState<CommandList>({});

    useEffect(() => {
        fetchCommands(getCommandsEndPoint).then(({ result }) => setCommands(result));
    }, [getCommandsEndPoint, setCommands]);

    const translate = useCallback(
        (
            id: string,
            fallback = '',
            params: Record<string, unknown> | string[] = [],
            packageKey = 'Shel.Neos.Terminal',
            sourceName = 'Main'
        ): string => {
            return i18nRegistry.translate(id, fallback, params, packageKey, sourceName);
        },
        []
    );

    const invokeCommand = useCallback(
        (commandName: string, args: string[]): Promise<string> => {
            const command = commands[commandName];

            if (!command)
                throw Error(
                    translate('command.doesNotExist', `The command {commandName} does not exist!`, { commandName })
                );

            return doInvokeCommand(invokeCommandEndPoint, commandName, args, siteNode, focusedNode, documentNode).then(
                ({ success, result, uiFeedback }) => {
                    let parsedResult = result;
                    let textResult = result;

                    // Try to prettify json results
                    try {
                        parsedResult = JSON.parse(result);
                        if (typeof parsedResult !== 'string') {
                            textResult = JSON.stringify(parsedResult, null, 2);
                        } else {
                            textResult = parsedResult;
                        }
                    } catch (e) {
                        // Treat result as simple string
                    }

                    logToConsole(
                        success ? 'log' : 'error',
                        translate('command.output', `"{commandName} {argument}":`, {
                            commandName,
                            argument: args.join(' '),
                        }),
                        parsedResult
                    );

                    // Forward server feedback to the Neos UI
                    if (uiFeedback) {
                        handleServerFeedback(uiFeedback);
                    }

                    return textResult;
                }
            );
        },
        [commands, siteNode, documentNode, focusedNode]
    );

    return (
        <CommandsContext.Provider value={{ invokeCommand, commands, translate }}>{children}</CommandsContext.Provider>
    );
};
