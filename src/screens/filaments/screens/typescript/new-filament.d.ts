import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { StateType } from 'typesafe-actions';

import * as filamentActions from '../../store/actions';
import filamentsReducer from '../../store/reducers';
import { Filament } from '../../store/typescript';

interface NavigationParams {
    item: Filament;
}

export type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

export interface Props {
    filamentReducer: StateType<typeof filamentsReducer>;
    filamentDispatch: typeof filamentActions;
    navigation: Navigation;
}
