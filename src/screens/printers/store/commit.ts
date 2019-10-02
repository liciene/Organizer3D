import { put } from 'redux-saga/effects';

import * as types from './types';
import * as ts from './typescript';

export function* AddNewPrinter(meta: ts.CommitAddNewPrinter) {
    const printer = {
        id: (Math.random() * 1234567).toFixed(0),
        ...meta.meta,
    };
    yield put({ type: types.ADD_NEW_PRINTER_FULFILLED, payload: { printer } });
}
