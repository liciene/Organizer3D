import { all, takeLatest } from 'redux-saga/effects';

import * as commit from './commit';
import * as types from './types';

export default function* printerMiddleware() {
    yield all([takeLatest(types.ADD_NEW_PRINTER, commit.AddNewPrinter)]);
}
