import { NavigationActions } from 'react-navigation';
import { ActionType, StateType } from 'typesafe-actions';

import * as printersActions from '../../screens/printers/store/actions';
import reducers from './reducers';

export type RootState = StateType<typeof reducers>;

export type RootActions = ActionType<typeof NavigationActions> | ActionType<typeof printersActions>;
