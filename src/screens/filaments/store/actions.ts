import { action } from 'typesafe-actions';

import * as types from './types';
import * as ts from './typescript';

export const addNewFilament = (meta: ts.MetaAddNewFilament) => action(types.ADD_NEW_FILAMENT, meta);

export const deleteFilament = (id: string) => action(types.DELETE_FILAMENT, { id });
export const selectFilament = (id: string) => action(types.SELECT_FILAMENT, { id });
