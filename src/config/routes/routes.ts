import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { PrintersList } from '../../screens/printers';

const AppStack = createStackNavigator({
    printersList: {
        screen: PrintersList,
    },
});

const AppContainer = createAppContainer(AppStack);

export default AppContainer;
