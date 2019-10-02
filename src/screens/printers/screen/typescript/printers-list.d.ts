import { StateType } from 'typesafe-actions';

import printersReducer from '../../store/reducers';

export interface Props {
    printersReducer: StateType<typeof printersReducer>;
}
