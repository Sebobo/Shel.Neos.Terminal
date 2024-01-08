import manifest from '@neos-project/neos-ui-extensibility';

import { reducer, actions } from './actions';
import Terminal from './Terminal';
import getTerminalCommandRegistry from './registry/TerminalCommandRegistry';

window['NeosTerminal'] = window.NeosTerminal || {};

manifest('Shel.Neos.Terminal:Terminal', {}, (globalRegistry, { store, frontendConfiguration }) => {
    const config = frontendConfiguration['Shel.Neos.Terminal:Terminal'];

    if (!config.enabled) return;

    const i18nRegistry = globalRegistry.get('i18n');
    const terminalCommandRegistry = getTerminalCommandRegistry(config, i18nRegistry, store);

    globalRegistry.get('reducers').set('Shel.Neos.Terminal', { reducer });
    globalRegistry.get('containers').set('PrimaryToolbar/Middle/Terminal', Terminal);

    if (frontendConfiguration.hotkeys !== null && frontendConfiguration.hotkeys.length !== 0) {
        globalRegistry.get('hotkeys').set('Shel.Neos.Terminal.toggle', {
            description: 'Toggle Neos Terminal',
            action: actions.toggleNeosTerminal,
        });
    }

    // Register commands for command bar if installed
    const commandBarRegistry = globalRegistry.get('Shel.Neos.CommandBar');
    if (commandBarRegistry) {
        commandBarRegistry.set('plugins/terminal', terminalCommandRegistry.getCommandsForCommandBar);
    }
});
