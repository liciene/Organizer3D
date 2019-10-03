import * as types from './types';
import { Actions, State } from './typescript';

const initialState: State = {
    loading: false,
    printers: [],
    printerSelected: undefined,
};

const printersReducer = (state: State = initialState, action: Actions): State => {
    switch (action.type) {
        case types.ADD_NEW_PRINTER:
            return { ...state, loading: true };

        case types.ADD_NEW_PRINTER_FULFILLED: {
            const printersList = state.printers;

            printersList.push(action.payload.printer);

            return { ...state, loading: false };
        }
        default:
            return state;
    }
};

export default printersReducer;
