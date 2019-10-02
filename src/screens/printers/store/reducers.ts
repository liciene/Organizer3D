import * as types from './types';
import { Actions } from './typescript';

const initialState = {
    loading: false
};

const printerReducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case types.ADD_NEW_PRINTER:
            return { ...state };

        default:
            return state;
    }
};

export default printerReducer;
