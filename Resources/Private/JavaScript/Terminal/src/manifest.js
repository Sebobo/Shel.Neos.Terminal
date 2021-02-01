import manifest from '@neos-project/neos-ui-extensibility';

import Terminal from './Terminal';

manifest('Shel.Neos.Terminal:Terminal', {}, (globalRegistry, { frontendConfiguration }) => {
    const containersRegistry = globalRegistry.get('containers');

    const terminalConfig = frontendConfiguration['Shel.Neos.Terminal'];

    if (terminalConfig.enabled) {
        containersRegistry.set('PrimaryToolbar/Middle/Terminal', {
            component: class extends Terminal {
                getConfig() {
                    return terminalConfig;
                }
            },
        });
    }
});
