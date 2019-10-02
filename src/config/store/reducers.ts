import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { combineReducers } from 'redux';

import printerReducer from '../../screens/printers/store/reducers';
import AppContainer from '../routes/routes';

const navReducer = createNavigationReducer(AppContainer);

const reducers = combineReducers({
    printerReducer,
    nav: navReducer,
});

export default reducers;
