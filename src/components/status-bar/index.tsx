import * as React from 'react';
import { StatusBar as NativeStatusBar } from 'react-native';
import { Theme, withTheme } from 'react-native-paper';

interface Props {
    theme: Theme;
}

const StatusBar = (props: Props) => {
    const { theme } = props;
    return <NativeStatusBar backgroundColor={theme.colors.primary} />;
};

export default withTheme(StatusBar);
