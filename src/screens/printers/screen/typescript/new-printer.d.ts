import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { StateType } from 'typesafe-actions';

import * as printerActions from '../../store/actions';
import printersReducer from '../../store/reducers';
import { Printer } from '../../store/typescript';

interface NavigationParams {
    item: Printer;
}

export type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

export interface Props {
    printerReducer: StateType<typeof printersReducer>;
    printerDispatch: typeof printerActions;
    navigation: Navigation;
}
