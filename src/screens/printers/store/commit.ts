import { put } from 'redux-saga/effects';

import * as types from './types';
import * as ts from './typescript';

export function* AddNewPrinter(meta: ts.CommitAddNewPrinter) {
    const printer = {
        ...meta.payload,
    };

    yield put({ type: types.ADD_NEW_PRINTER_FULFILLED, payload: { printer } });
}
