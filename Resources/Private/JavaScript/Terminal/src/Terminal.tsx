import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Neos dependencies are provided by the UI
// @ts-ignore
import { neos } from '@neos-project/neos-ui-decorators';
// @ts-ignore
import { selectors, actions } from '@neos-project/neos-ui-redux-store';

import ReplWrapper from './components/ReplWrapper';
import { CommandsProvider } from './provider/CommandsProvider';
import { Node, I18nRegistry, FeedbackEnvelope, NeosRootState } from './interfaces';
import { actions as terminalActions, selectors as terminalSelectors } from './actions';

interface TerminalProps {
    config: TerminalConfig;
    siteNode: Node;
    documentNode: Node;
    focusedNodes: string[];
    i18nRegistry: I18nRegistry;
    terminalOpen: boolean;
    handleServerFeedback: (feedback: FeedbackEnvelope) => void;
}

class Terminal extends React.PureComponent<TerminalProps> {
    static propTypes = {
        config: PropTypes.object.isRequired,
        i18nRegistry: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired,
        siteNode: PropTypes.object,
        documentNode: PropTypes.object,
        focusedNodes: PropTypes.array,
        terminalOpen: PropTypes.bool,
        toggleNeosTerminal: PropTypes.func,
        handleServerFeedback: PropTypes.func,
    };

    render() {
        const { config } = this.props as TerminalProps;

        return (
            <CommandsProvider
                getCommandsEndPoint={config.getCommandsEndPoint}
                invokeCommandEndPoint={config.invokeCommandEndPoint}
                checkCommandsEndPoint={config.checkCommandsEndPoint}
                siteNode={this.props.siteNode?.contextPath}
                documentNode={this.props.documentNode?.contextPath}
                focusedNode={this.props.focusedNodes?.length > 0 ? this.props.focusedNodes[0] : null}
                i18nRegistry={this.props.i18nRegistry}
                handleServerFeedback={this.props.handleServerFeedback}
            >
                <ReplWrapper {...this.props} />
            </CommandsProvider>
        );
    }
}

const mapStateToProps = (state: NeosRootState) => ({
    user: state?.user?.name,
    siteNode: selectors.CR.Nodes.siteNodeSelector(state),
    documentNode: selectors.CR.Nodes.documentNodeSelector(state),
    focusedNodes: selectors.CR.Nodes.focusedNodePathsSelector(state),
    terminalOpen: terminalSelectors.terminalOpen(state),
});

const mapDispatchToProps = () => ({ handleServerFeedback: actions.ServerFeedback.handleServerFeedback });

const mapGlobalRegistryToProps = neos((globalRegistry: any) => ({
    i18nRegistry: globalRegistry.get('i18n'),
    config: globalRegistry.get('frontendConfiguration').get('Shel.Neos.Terminal:Terminal'),
}));

export default connect(() => ({}), { toggleNeosTerminal: terminalActions.toggleNeosTerminal })(
    connect(mapStateToProps, mapDispatchToProps)(mapGlobalRegistryToProps(Terminal))
);
