import * as React from 'react';
import { Theme, withTheme } from 'react-native-paper';

import { Button, Icon, Title } from './styles/item';

interface Props {
    key: string;
    iconName: string;
    label: string;
    onPress: () => void;
    active: boolean;
    theme: Theme;
}

const DrawerItem = (props: Props) => {
    const { key, theme, iconName, label, onPress, active } = props;
    return (
        <Button onPress={onPress} key={key} active={active} theme={theme}>
            <>
                <Icon name={iconName} size={34} active={active} theme={theme} />
                <Title active={active} theme={theme}>
                    {label}
                </Title>
            </>
        </Button>
    );
};

export default withTheme(DrawerItem);
