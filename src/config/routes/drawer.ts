import { createDrawerNavigator } from 'react-navigation-drawer';

import Drawer from './drawer-menu/drawer';
import { FilamentStack, PrinterStack } from './stack';

const AppDrawer = createDrawerNavigator(
    {
        PrinterScreens: {
            screen: PrinterStack,
        },
        FilamentsScreens: {
            screen: FilamentStack,
        },
    },
    {
        contentComponent: Drawer,
        backBehavior: 'history',
    },
);

export default AppDrawer;
