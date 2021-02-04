import manifest from '@neos-project/neos-ui-extensibility';

import Terminal from './Terminal';

manifest('Shel.Neos.Terminal:Terminal', {}, (globalRegistry, { frontendConfiguration }) => {
    const containersRegistry = globalRegistry.get('containers');

    const { enabled } = frontendConfiguration['Shel.Neos.Terminal:Terminal'];

    if (enabled) {
        containersRegistry.set('PrimaryToolbar/Middle/Terminal', Terminal);
    }
});
