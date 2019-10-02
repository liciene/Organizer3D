import { DefaultTheme, Theme } from 'react-native-paper';

export const lightTheme: Theme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: '#7bb241',
        accent: '#1e88e5',
        background: '#F5F5F6',
        surface: '#F5F5F6',
        text: '#000',
    },
};

export const darkTheme: Theme = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: '#200149',
        background: '#030023',
        surface: '#4e2a75',
        accent: '#004d40',
        text: '#fff',
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
