import { NavigationAction } from 'react-navigation';
import { ActionType, StateType } from 'typesafe-actions';

import reducers from './reducers';

export type RootState = StateType<typeof reducers>;

export type RootActions = ActionType<NavigationAction>;
