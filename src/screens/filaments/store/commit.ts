import { put } from 'redux-saga/effects';

import * as types from './types';
import * as ts from './typescript';

export function* AddNewFilament(meta: ts.CommitAddNewFilament) {
    const printer = {
        ...meta.payload,
    };

    yield put({ type: types.ADD_NEW_FILAMENT_FULFILLED, payload: { printer } });
}
