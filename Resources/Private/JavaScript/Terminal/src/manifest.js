import { version as ReactVersion } from 'react';

import manifest from '@neos-project/neos-ui-extensibility';
// @ts-ignore
import { selectors } from '@neos-project/neos-ui-redux-store';

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

            const siteNode = selectors.CR.Nodes.siteNodeSelector;
            const documentNode = selectors.CR.Nodes.documentNodeSelector;
            const focusedNodes = selectors.CR.Nodes.focusedNodePathsSelector;

            debugger;

            const invokeCommand = (commandName, ...args) => {
                const focusedNode = focusedNodes && focusedNodes.length > 0 ? focusedNodes[0] : null;
                return doInvokeCommand(
                    invokeCommandEndPoint,
                    commandName,
                    args,
                    siteNode,
                    documentNode,
                    focusedNode
                ).then(({ success, result }) => {
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
