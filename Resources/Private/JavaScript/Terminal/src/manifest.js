import manifest from '@neos-project/neos-ui-extensibility';
import { reducer, actions } from './actions';
import Terminal from './Terminal';

window['NeosTerminal'] = window.NeosTerminal || {};

manifest('Shel.Neos.Terminal:Terminal', {}, (globalRegistry, { frontendConfiguration }) => {
    const { enabled } = frontendConfiguration['Shel.Neos.Terminal:Terminal'];

    if (!enabled) return;

    const containersRegistry = globalRegistry.get('containers');
    const hotkeyRegistry = globalRegistry.get('hotkeys');
    const reducersRegistry = globalRegistry.get('reducers');

    if (frontendConfiguration.hotkeys !== null && frontendConfiguration.hotkeys.length !== 0) {
        hotkeyRegistry.set('Shel.Neos.Terminal.toggle', {
            description: 'Toggle Neos Terminal',
            action: actions.toggleNeosTerminal,
        });

        reducersRegistry.set('Shel.Neos.Terminal', { reducer });
    }

    containersRegistry.set('PrimaryToolbar/Middle/Terminal', Terminal);
});
