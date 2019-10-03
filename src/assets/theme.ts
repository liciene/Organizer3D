import { Theme } from 'react-native-elements';

export const lightTheme: Theme = {
    colors: {
        primary: '#7bb241',
        secondary: '#1e88e5',
        error: '#e53935',
    },
    Header: {
        centerComponent: {
            style: { fontSize: 18 },
        },
    },
};

export const darkTheme: Theme = {
    colors: {
        primary: '#200149',
        secondary: '#004d40',
        error: '#e53935',
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
