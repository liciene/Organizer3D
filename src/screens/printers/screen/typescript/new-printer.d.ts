import { NavigationInjectedProps } from 'react-navigation';
import { StateType } from 'typesafe-actions';

import * as printerActions from '../../store/actions';
import printersReducer from '../../store/reducers';

export interface Props extends NavigationInjectedProps {
    printerReducer: StateType<typeof printersReducer>;
    printerDispatch: typeof printerActions;
}
