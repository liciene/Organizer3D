import { createDrawerNavigator } from 'react-navigation-drawer';

import { PrinterStack } from './stack';

const AppDrawer = createDrawerNavigator({
    PrinterScreens: {
        screen: PrinterStack,
    },
});

export default AppDrawer;
