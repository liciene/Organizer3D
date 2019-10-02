import { action } from 'typesafe-actions';

import * as types from './types';
import * as ts from './typescript';

export const addNewPrinter = (meta: ts.MetaAddNewPrinter) => action(types.ADD_NEW_PRINTER, meta);
