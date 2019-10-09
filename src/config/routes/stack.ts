import { createStackNavigator } from 'react-navigation-stack';

import { FilamentsList, NewFilament } from '../../screens/filaments';
import { NewPrinter, PrintersList } from '../../screens/printers';

const PrinterStack = createStackNavigator({
    printersList: {
        screen: PrintersList,
    },
    newPrinter: {
        screen: NewPrinter,
    },
});

const FilamentStack = createStackNavigator({
    filamentsList: {
        screen: FilamentsList,
    },
    newFilament: {
        screen: NewFilament,
    },
});

export { PrinterStack, FilamentStack };
