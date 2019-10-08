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
        case types.DELETE_PRINTER: {
            const printerList = state.printers;

            if (printerList.length > 0) {
                const index = printerList.findIndex(item => item.id === action.payload.id);

                printerList.splice(index, 1);
            }
            return { ...state };
        }
        case types.SELECT_PRINTER: {
            const printerList = state.printers;
            let printerSelected;
            if (printerList.length > 0) {
                const index = printerList.findIndex(item => item.id === action.payload.id);

                [printerSelected] = printerList.slice(index, index + 1);
            }
            return { ...state, printerSelected };
        }
        default:
            return state;
    }
};

export default printersReducer;
