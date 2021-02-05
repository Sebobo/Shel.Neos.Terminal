import * as React from 'react';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

// @ts-ignore
import { fetchWithErrorHandling } from '@neos-project/neos-ui-backend-connector';

import { NodeContextPath } from '../interfaces/Node';
import CommandList from '../interfaces/CommandList';

interface CommandsContextProps {
    children: React.ReactElement;
    getCommandsEndPoint: string;
    invokeCommandEndPoint: string;
    siteNode: NodeContextPath;
    documentNode: NodeContextPath;
    focusedNode?: NodeContextPath;
}

interface CommandsContextValues {
    commands: CommandList;
    invokeCommand: (endPoint: string, param: string[]) => Promise<string>;
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

    const invokeCommand = useCallback(
        (commandName: string, args: string[]): Promise<string> => {
            const command = commands[commandName];

            // TODO: translate
            if (!command) throw Error(`Command ${commandName} does not exist!`);

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
                .then((data) => {
                    if (data.success) {
                        let result = data.result;
                        try {
                            result = JSON.parse(result);
                        } catch (e) {
                            // Treat result as simple string
                        }
                        // TODO: translate
                        console.log(result, `Output of command "${commandName} ${args.join(' ')}"`);
                        return data.result;
                    }
                    throw new Error(data.result);
                });
        },
        [commands, siteNode, documentNode, focusedNode]
    );

    return <CommandsContext.Provider value={{ invokeCommand, commands }}>{children}</CommandsContext.Provider>;
};
