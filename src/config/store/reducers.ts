import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { combineReducers } from 'redux';

import filamentReducer from '../../screens/filaments/store/reducers';
import printerReducer from '../../screens/printers/store/reducers';
import AppContainer from '../routes/routes';
import generalReducer from './redux/reducers';

const navReducer = createNavigationReducer(AppContainer);

const reducers = combineReducers({
    printerReducer,
    nav: navReducer,
    generalReducer,
    filamentReducer,
});

export default reducers;
