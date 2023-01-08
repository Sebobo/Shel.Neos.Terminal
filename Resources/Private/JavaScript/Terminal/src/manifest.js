import manifest from '@neos-project/neos-ui-extensibility';
import { reducer, actions } from './actions';
import Terminal from './Terminal';

window['NeosTerminal'] = window.NeosTerminal || {};

manifest('Shel.Neos.Terminal:Terminal', {}, (globalRegistry, { frontendConfiguration }) => {
    const { enabled } = frontendConfiguration['Shel.Neos.Terminal:Terminal'];

    if (!enabled) return;

    globalRegistry.get('reducers').set('Shel.Neos.Terminal', { reducer });
    globalRegistry.get('containers').set('PrimaryToolbar/Middle/Terminal', Terminal);

    if (frontendConfiguration.hotkeys !== null && frontendConfiguration.hotkeys.length !== 0) {
        globalRegistry.get('hotkeys').set('Shel.Neos.Terminal.toggle', {
            description: 'Toggle Neos Terminal',
            action: actions.toggleNeosTerminal,
        });
    }
});
