import * as types from './types';
import { Actions, State } from './typescript';

const initialState: State = {
    loading: false,
    filaments: [],
    filamentSelected: undefined,
};

const filamentReducer = (state: State = initialState, action: Actions): State => {
    switch (action.type) {
        case types.ADD_NEW_FILAMENT:
            return { ...state, loading: true };

        case types.ADD_NEW_FILAMENT_FULFILLED: {
            const filamentsList = state.filaments;
            let { filamentSelected } = state;
            const filamentIndex = filamentsList.findIndex(item => item.id === action.payload.filament.id);

            if (filamentIndex >= 0) {
                filamentsList.splice(filamentIndex, 1, action.payload.filament);

                if (filamentSelected && filamentSelected.id === action.payload.filament.id) {
                    filamentSelected = action.payload.filament;
                }
            } else {
                filamentsList.push(action.payload.filament);
            }

            return { ...state, loading: false, filamentSelected };
        }
        case types.DELETE_FILAMENT: {
            const filamentList = state.filaments;

            if (filamentList.length > 0) {
                const index = filamentList.findIndex(item => item.id === action.payload.id);

                filamentList.splice(index, 1);
            }
            return { ...state };
        }
        case types.SELECT_FILAMENT: {
            const filamentList = state.filaments;
            let filamentSelected;
            if (filamentList.length > 0) {
                const index = filamentList.findIndex(item => item.id === action.payload.id);

                [filamentSelected] = filamentList.slice(index, index + 1);
            }
            return { ...state, filamentSelected };
        }
        default:
            return state;
    }
};

export default filamentReducer;
