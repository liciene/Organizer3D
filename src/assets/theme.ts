import { DefaultTheme, Theme } from 'react-native-paper';

export const lightTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#7bb241',
        accent: '#1e88e5',
        error: '#e53935',
        background: '#fff',
    },
};

export const darkTheme: Theme = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: '#200149',
        accent: '#004d40',
    },
};

interface Props {
    isDark: boolean;
}

const getTheme = (props: Props) => {
    if (props.isDark) {
        return darkTheme;
    }
    return lightTheme;
};

export default getTheme;
