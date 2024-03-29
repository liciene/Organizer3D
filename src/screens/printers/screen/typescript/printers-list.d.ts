import { NavigationInjectedProps } from 'react-navigation';
import { StateType } from 'typesafe-actions';

import printersReducer from '../../store/reducers';

export interface Props extends NavigationInjectedProps {
    printersReducer: StateType<typeof printersReducer>;
}
