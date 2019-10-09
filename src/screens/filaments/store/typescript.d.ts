import * as types from './types';

// #region General

export interface Filament {
    id: string;
    name: string;
    company: string;
    cost: string;
    type: string;
    dimension: number;
}

// #endregion

// #region Actions

export interface MetaAddNewFilament {
    id: string;
    name: string;
    company: string;
    cost: string;
    type: string;
    dimension: number;
}

// #endregion

// #region Reducers

// #region Actions

interface AddNewFilament {
    type: typeof types.ADD_NEW_FILAMENT;
}

interface AddNewFilamentFulFilled {
    type: typeof types.ADD_NEW_FILAMENT_FULFILLED;
    payload: {
        filament: Filament;
    };
}

interface DeleteFilament {
    type: typeof types.DELETE_FILAMENT;
    payload: {
        id: string;
    };
}

interface SelectFilament {
    type: typeof types.SELECT_FILAMENT;
    payload: {
        id: string;
    };
}
// #endregion

export type Actions = AddNewFilament | AddNewFilamentFulFilled | DeleteFilament | SelectFilament;

export interface State {
    loading: boolean;
    filaments: Array<Filament>;
    filamentSelected?: Filament;
}
// #endregion

// #region Commit

export interface CommitAddNewFilament {
    type: typeof types.ADD_NEW_FILAMENT;
    payload: MetaAddNewFilament;
}

// #endregion
