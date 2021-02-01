import * as React from 'react';
import { connect } from 'react-redux';
import { $get, $transform } from 'plow-js';

// Neos dependencies are provided by the UI
// @ts-ignore
import { neos } from '@neos-project/neos-ui-decorators';
// @ts-ignore
import { actions } from '@neos-project/neos-ui-redux-store';

import I18nRegistry from './interfaces/I18nRegistry';

interface DebuggerToolbarProps {
    i18nRegistry: I18nRegistry;
}

@connect($transform({}), {
    addFlashMessage: actions.UI.FlashMessages.add,
})
@neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get('i18n'),
}))
// eslint-disable-next-line prettier/prettier
export default class Terminal extends React.PureComponent<DebuggerToolbarProps> {
    constructor(props: DebuggerToolbarProps) {
        super(props);
    }

    render() {
        return <div>Hier ist ne Toolbar</div>;
    }
}
