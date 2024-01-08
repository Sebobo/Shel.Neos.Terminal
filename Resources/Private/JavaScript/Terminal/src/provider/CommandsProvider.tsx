import * as React from 'react';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { FeedbackEnvelope, I18nRegistry, CommandList, NodeContextPath } from '../interfaces';
import doInvokeCommand from '../helpers/doInvokeCommand';
import logToConsole from '../helpers/logger';
import getTerminalCommandRegistry from '../registry/TerminalCommandRegistry';

interface CommandsContextProps {
    children: React.ReactElement;
    config: TerminalConfig;
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

export const CommandsProvider = ({
    config,
    children,
    documentNode,
    focusedNode,
    siteNode,
    i18nRegistry,
    handleServerFeedback,
}: CommandsContextProps) => {
    const [commands, setCommands] = useState<CommandList>({});

    useEffect(() => {
        getTerminalCommandRegistry().getCommands().then(setCommands);
    }, []);

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
        async (commandName: string, args: string[]): Promise<string> => {
            const command = commands[commandName];

            if (!command)
                throw Error(
                    translate('command.doesNotExist', `The command {commandName} does not exist!`, { commandName })
                );

            // TODO: Use TerminalCommandRegistry for invocation - needs some refactoring
            const { success, result, uiFeedback } = await doInvokeCommand(
                config.invokeCommandEndPoint,
                commandName,
                args,
                siteNode,
                focusedNode,
                documentNode
            );
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
                /* empty */
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
        },
        [commands, siteNode, documentNode, focusedNode]
    );

    return (
        <CommandsContext.Provider value={{ invokeCommand, commands, translate }}>{children}</CommandsContext.Provider>
    );
};
