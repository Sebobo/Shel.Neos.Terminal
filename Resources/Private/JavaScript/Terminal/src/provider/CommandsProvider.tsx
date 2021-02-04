import * as React from 'react';
import { useContext, createContext, useCallback } from 'react';

// @ts-ignore
import { fetchWithErrorHandling } from '@neos-project/neos-ui-backend-connector';

import Command from '../interfaces/Command';
import { NodeContextPath } from '../interfaces/Node';

interface CommandsContextProps {
    children: React.ReactElement;
    commands: { [key: string]: Command };
    siteNode: NodeContextPath;
    documentNode: NodeContextPath;
    focusedNode?: NodeContextPath;
}

interface CommandsContextValues {
    commands: { [key: string]: Command };
    executeCommand: (endPoint: string, param: string[]) => Promise<string>;
}

export const CommandsContext = createContext({} as CommandsContextValues);
export const useCommands = (): CommandsContextValues => useContext(CommandsContext);

export const CommandsProvider = ({ children, commands, documentNode, focusedNode, siteNode }: CommandsContextProps) => {
    const executeCommand = useCallback(
        (commandName: string, args: string[]): Promise<string> => {
            const command = commands[commandName];

            // TODO: translate
            if (!command) throw Error(`Command ${commandName} does not exist!`);

            const contextData = command.requiresNodeContext
                ? {
                      siteNode,
                      focusedNode,
                      documentNode,
                  }
                : {};

            return fetchWithErrorHandling
                .withCsrfToken((csrfToken) => ({
                    url: `${command.endPoint}`,
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'X-Flow-Csrftoken': csrfToken,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        [command.argumentName || 'payload']: args.join(' '),
                        ...contextData,
                    }),
                }))
                .then((response) => response && response.json())
                .then((data) => {
                    if (data.success) {
                        // TODO: translate
                        console.log(JSON.parse(data.result), `Output of command "${commandName} ${args.join(' ')}"`);
                        return data.result;
                    }
                    throw new Error(data.message);
                });
        },
        [commands, siteNode, documentNode, focusedNode]
    );

    return <CommandsContext.Provider value={{ executeCommand, commands }}>{children}</CommandsContext.Provider>;
};
