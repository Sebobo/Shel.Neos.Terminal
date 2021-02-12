import { version as ReactVersion } from 'react';

import manifest from '@neos-project/neos-ui-extensibility';

window['NeosTerminal'] = window.NeosTerminal || {};

manifest('Shel.Neos.Terminal:Terminal', {}, (globalRegistry, { frontendConfiguration }) => {
    const containersRegistry = globalRegistry.get('containers');

    const { enabled } = frontendConfiguration['Shel.Neos.Terminal:Terminal'];

    if (!enabled) return;

    const [major, minor] = ReactVersion.split('.');

    // Terminal UI integration requires minimum React version (provided since Neos 5.2.0)
    if (major >= 16 && minor >= 8) {
        import(/* webpackMode: "eager" */ './Terminal').then((Terminal) => {
            containersRegistry.set('PrimaryToolbar/Middle/Terminal', Terminal.default);
        });
    } else {
        import(/* webpackMode: "eager" */ './FallbackPlugin').then((FallbackPlugin) => {
            containersRegistry.set('PrimaryToolbar/Left/Terminal', FallbackPlugin.default);
        });
    }
});
