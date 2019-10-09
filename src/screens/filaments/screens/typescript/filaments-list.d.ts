import { NavigationInjectedProps } from 'react-navigation';
import { StateType } from 'typesafe-actions';

import * as filamentsActions from '../../store/actions';
import filamentsReducer from '../../store/reducers';

export interface Props extends NavigationInjectedProps {
    filamentsReducer: StateType<typeof filamentsReducer>;
    filamentsDispatch: typeof filamentsActions;
}
