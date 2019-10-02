import * as types from './types';
import { Actions, State } from './typescript';

const initialState: State = {
    isDark: false,
};

const generalReducer = (state: State = initialState, action: Actions): State => {
    switch (action.type) {
        case types.CHANGE_THEME:
            return { ...state, isDark: action.payload.isDark };

        default:
            return state;
    }
};

export default generalReducer;
