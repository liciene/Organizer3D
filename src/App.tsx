import * as React from 'react';
import { useScreens } from 'react-native-screens';

import AppContainer from './config/routes/routes';

const App = () => {
    useScreens();
    return <AppContainer />;
};
export default App;
