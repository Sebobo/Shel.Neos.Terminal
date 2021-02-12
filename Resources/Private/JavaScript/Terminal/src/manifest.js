import { version as ReactVersion } from 'react';

import manifest from '@neos-project/neos-ui-extensibility';

import doInvokeCommand from './helpers/doInvokeCommand';
import fetchCommands from './helpers/fetchCommands';

window['NeosTerminal'] = window.NeosTerminal || {};

manifest('Shel.Neos.Terminal:Terminal', {}, (globalRegistry, { frontendConfiguration }) => {
    const containersRegistry = globalRegistry.get('containers');

    const { enabled, getCommandsEndPoint, invokeCommandEndPoint } = frontendConfiguration[
        'Shel.Neos.Terminal:Terminal'
    ];

    if (!enabled) return;

    const [major, minor] = ReactVersion.split('.');

    // Terminal UI integration requires minimum React version (provided since Neos 5.2.0)
    if (major >= 16 && minor >= 8) {
        import(/* webpackMode: "eager" */ './Terminal').then((Terminal) => {
            containersRegistry.set('PrimaryToolbar/Middle/Terminal', Terminal.default);
        });
    } else {
        // Fetch and register all available commands
        fetchCommands(getCommandsEndPoint).then(({ success, result }) => {
            if (!success) return;

            // TODO: Find a way to forward context nodes to command
            const invokeCommand = (commandName, ...args) => {
                return doInvokeCommand(invokeCommandEndPoint, commandName, args).then(({ success, result }) => {
                    if (success) console.log(result);
                    else console.error(result);
                });
            };

            Object.keys(result).forEach((commandName) => {
                // Register command globally
                window.NeosTerminal[commandName] = (...args) => invokeCommand(commandName, args);
            });

            console.info('Neos Terminal commands are available via "NeosTerminal".');
        });
    }
});
