import { version as ReactVersion } from 'react';

import manifest from '@neos-project/neos-ui-extensibility';
import { reducer, actions } from './actions';

window['NeosTerminal'] = window.NeosTerminal || {};

manifest('Shel.Neos.Terminal:Terminal', {}, (globalRegistry, { frontendConfiguration }) => {
    const { enabled } = frontendConfiguration['Shel.Neos.Terminal:Terminal'];

    if (!enabled) return;

    const containersRegistry = globalRegistry.get('containers');
    const [major, minor] = ReactVersion.split('.');

    // Terminal UI integration requires minimum React version (provided since Neos 5.2.0)
    if (major >= 16 && minor >= 8) {
        const hotkeyRegistry = globalRegistry.get('hotkeys');
        const reducersRegistry = globalRegistry.get('reducers');

        if (frontendConfiguration.hotkeys !== null && frontendConfiguration.hotkeys.length !== 0) {
            hotkeyRegistry.set('Shel.Neos.Terminal.toggle', {
                description: 'Toggle Neos Terminal',
                action: actions.toggleNeosTerminal,
            });

            reducersRegistry.set('Shel.Neos.Terminal', { reducer });
        }

        import(/* webpackMode: "eager" */ './Terminal').then((Terminal) => {
            containersRegistry.set('PrimaryToolbar/Middle/Terminal', Terminal.default);
        });
    } else {
        import(/* webpackMode: "eager" */ './FallbackPlugin').then((FallbackPlugin) => {
            containersRegistry.set('PrimaryToolbar/Left/Terminal', FallbackPlugin.default);
        });
    }
});
