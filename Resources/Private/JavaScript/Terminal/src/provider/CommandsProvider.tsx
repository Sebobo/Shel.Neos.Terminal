import * as React from 'react';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

// @ts-ignore
import { fetchWithErrorHandling } from '@neos-project/neos-ui-backend-connector';

import { NodeContextPath } from '../interfaces/Node';
import I18nRegistry from '../interfaces/I18nRegistry';
import CommandList from '../interfaces/CommandList';

interface CommandsContextProps {
    children: React.ReactElement;
    getCommandsEndPoint: string;
    invokeCommandEndPoint: string;
    siteNode: NodeContextPath;
    documentNode: NodeContextPath;
    focusedNode?: NodeContextPath;
    i18nRegistry: I18nRegistry;
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
    invokeCommandEndPoint,
    getCommandsEndPoint,
    children,
    documentNode,
    focusedNode,
    siteNode,
    i18nRegistry,
}: CommandsContextProps) => {
    const [commands, setCommands] = useState<CommandList>({});

    useEffect(() => {
        fetchWithErrorHandling
            .withCsrfToken((csrfToken) => ({
                url: `${getCommandsEndPoint}`,
                method: 'POST',
                credentials: 'include',
                headers: {
                    'X-Flow-Csrftoken': csrfToken,
                    'Content-Type': 'application/json',
                },
            }))
            .then((response) => response && response.json())
            .then(({ result }) => setCommands(result));
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

            // TODO: translate
            if (!command)
                throw Error(
                    translate('command.doesNotExist', `The command {commandName} does not exist!`, { commandName })
                );

            const contextData = {
                commandName,
                argument: args.join(' '),
                siteNode,
                focusedNode,
                documentNode,
            };

            return fetchWithErrorHandling
                .withCsrfToken((csrfToken) => ({
                    url: `${invokeCommandEndPoint}`,
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'X-Flow-Csrftoken': csrfToken,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(contextData),
                }))
                .then((response) => response && response.json())
                .then(({ success, result }) => {
                    let parsedResult = result;
                    let textResult = result;

                    if (success) {
                        // Try to prettify json results
                        try {
                            parsedResult = JSON.parse(result);
                            textResult = JSON.stringify(parsedResult, null, 2);
                        } catch (e) {
                            // Treat result as simple string
                        }
                    }
                    console[success ? 'log' : 'error'](
                        parsedResult,
                        translate('command.output', `Output of command "{commandName} {argument}"`, {
                            commandName,
                            argument: args.join(' '),
                        })
                    );
                    return textResult;
                });
        },
        [commands, siteNode, documentNode, focusedNode]
    );

    return (
        <CommandsContext.Provider value={{ invokeCommand, commands, translate }}>{children}</CommandsContext.Provider>
    );
};
