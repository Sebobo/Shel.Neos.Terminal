import { createAction, handleActions } from 'redux-actions';

export const actionTypes = {
    TOGGLE_NEOS_TERMINAL: 'TOGGLE_NEOS_TERMINAL',
};

const toggleNeosTerminal = createAction(actionTypes.TOGGLE_NEOS_TERMINAL);

export const actions = {
    toggleNeosTerminal,
};

export const reducer = handleActions(
    {
        TOGGLE_NEOS_TERMINAL: (state, action) => ({
            ...state,
            plugins: {
                ...state.plugins,
                neosTerminal: {
                    open: action.payload !== undefined ? action.payload.open : !state.plugins?.neosTerminal?.open,
                },
            },
        }),
    },
    {
        plugins: {
            neosTerminal: {
                open: false,
            },
        },
    }
);

export const selectors = {
    terminalOpen: (state) => state.plugins?.neosTerminal?.open,
};
