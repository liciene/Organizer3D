import * as types from './types';

// #region Reducers

// #region Actions

interface ChangeTheme {
    type: typeof types.CHANGE_THEME;
    payload: { isDark: boolean };
}

// #endregion

export type Actions = ChangeTheme;

export interface State {
    isDark: boolean;
}

// #endregion
