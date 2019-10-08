import * as types from './types';

// #region General

export interface Printer {
    id: string;
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

interface AddNewPrinterFulFilled {
    type: typeof types.ADD_NEW_PRINTER_FULFILLED;
    payload: {
        printer: Printer;
    };
}

interface DeletePrinter {
    type: typeof types.DELETE_PRINTER;
    payload: {
        id: string;
    };
}

interface SelectPrinter {
    type: typeof types.SELECT_PRINTER;
    payload: {
        id: string;
    };
}
// #endregion

export type Actions = AddNewPrinter | AddNewPrinterFulFilled | DeletePrinter | SelectPrinter;

export interface State {
    loading: boolean;
    printers: Array<Printer>;
    printerSelected?: Printer;
}
// #endregion

// #region Commit

export interface CommitAddNewPrinter {
    type: typeof types.ADD_NEW_PRINTER;
    payload: MetaAddNewPrinter;
}

// #endregion
