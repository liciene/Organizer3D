import * as React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { useScreens } from 'react-native-screens';
import { Provider } from 'react-redux';

import getTheme from './assets/theme';
import configureStore from './config/store/store';

const { store, AppRedux } = configureStore();
const App = () => {
    useScreens();
    return (
        <Provider store={store}>
            <ThemeProvider theme={getTheme({ isDark: store.getState().generalReducer.isDark })}>
                <AppRedux />
            </ThemeProvider>
        </Provider>
    );
};
export default App;
