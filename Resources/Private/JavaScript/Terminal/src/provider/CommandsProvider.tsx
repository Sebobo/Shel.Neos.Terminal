import React from 'react';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { I18nRegistry, CommandList } from '../interfaces';
import logToConsole from '../helpers/logger';
import getTerminalCommandRegistry from '../registry/TerminalCommandRegistry';

interface CommandsContextProps {
    children: React.ReactElement;
    i18nRegistry: I18nRegistry;
}

interface CommandsContextValues {
    commands: CommandList;
    invokeCommand: (endPoint: string, param: string[]) => AsyncGenerator<string | JSX.Element, null, void>;
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

export const CommandsProvider = ({ children, i18nRegistry }: CommandsContextProps) => {
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
        async function* (commandName: string, args: string[]): AsyncGenerator<string | JSX.Element, null, void> {
            const command = commands[commandName];

            if (!command)
                throw Error(
                    translate('command.doesNotExist', `The command {commandName} does not exist!`, { commandName })
                );

            for await (const { success, view, message, options } of getTerminalCommandRegistry().invokeCommand(
                commandName,
                args.join(' ')
            )) {
                logToConsole(
                    success ? 'log' : 'error',
                    translate('command.output', `"{commandName} {argument}":`, {
                        commandName,
                        argument: args.join(' '),
                    }),
                    message,
                    view,
                    options
                );
                yield view;
            }

            return;
        },
        [commands]
    );

    return (
        <CommandsContext.Provider value={{ invokeCommand, commands, translate }}>{children}</CommandsContext.Provider>
    );
};
