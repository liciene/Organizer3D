import { createStackNavigator } from 'react-navigation-stack';

import { NewPrinter, PrintersList } from '../../screens/printers';

const PrinterStack = createStackNavigator({
    printersList: {
        screen: PrintersList,
    },
    newPrinter: {
        screen: NewPrinter,
    },
});

export { PrinterStack };
