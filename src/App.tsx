import * as React from 'react';
import { useScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

import configureStore from './config/store/store';

const { store, AppRedux } = configureStore();
const App = () => {
    useScreens();
    return (
        <Provider store={store}>
            <AppRedux />
        </Provider>
    );
};
export default App;
