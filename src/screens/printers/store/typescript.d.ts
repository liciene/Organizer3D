import * as types from './types';

// #region General

export interface Printer {
    id: number;
    name: string;
    model: string;
    cost: string;
    wattsUsage: string;
}

// #endregion

// #region Actions

export interface MetaAddNewPrinter {
    name: string;
    model: string;
    cost: string;
    wattsUsage: string;
}

// #endregion

// #region Reducers

// #region Actions

interface AddNewPrinter {
    type: typeof types.ADD_NEW_PRINTER;
}

// #endregion

export type Actions = AddNewPrinter;

export interface State {
    loading: boolean;
    printers: Array<Printer>;
    printerSelected?: Printer;
}
// #endregion

// #region Commit

export interface CommitAddNewPrinter {
    type: typeof types.ADD_NEW_PRINTER;
    meta: MetaAddNewPrinter;
}

// #endregion
