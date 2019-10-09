import * as React from 'react';
import { View } from 'react-native';
import {
    Divider,
    IconButton,
    Menu,
    Subheading,
    Surface,
    Theme,
    Title,
    TouchableRipple,
    withTheme,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Filament } from '../../store/typescript';
import styles from './styles/render-item';

interface Props {
    item: Filament;
    selected: boolean;
    handleDeleteFilament: (id: string) => void;
    handleSelectFilament: (id: string) => void;
    handleEditFilament: (item: Filament) => void;
    theme: Theme;
}

const RenderItem = (props: Props) => {
    const { item, selected, handleDeleteFilament, handleEditFilament, handleSelectFilament, theme } = props;

    const [menuVisible, handleMenuVisible] = React.useState(false);

    return (
        <Surface
            style={[
                styles.container,
                { borderWidth: selected ? 2 : 0, borderColor: selected ? theme.colors.primary : 'transparent' },
            ]}
        >
            <TouchableRipple onPress={() => handleSelectFilament(item.id)} style={styles.subContainer}>
                <>
                    <View style={styles.iconContainer}>
                        <Icon name={selected ? 'printer-3d-nozzle-outline' : 'printer-3d'} size={32} />
                    </View>
                    <View style={styles.detailContainer}>
                        <Title>{item.name}</Title>
                        <Subheading>{`${item.dimension} - $${item.cost} - ${item.type}`}</Subheading>
                    </View>
                </>
            </TouchableRipple>
            <View>
                <Menu
                    anchor={<IconButton icon="more-vert" onPress={() => handleMenuVisible(true)} />}
                    visible={menuVisible}
                    onDismiss={() => handleMenuVisible(false)}
                >
                    <Menu.Item
                        icon="delete"
                        title="Delete"
                        onPress={() => {
                            handleMenuVisible(false);
                            handleDeleteFilament(item.id);
                        }}
                    />
                    <Divider />
                    <Menu.Item
                        icon="edit"
                        title="Edit"
                        onPress={() => {
                            handleMenuVisible(false);
                            handleEditFilament(item);
                        }}
                    />
                </Menu>
            </View>
        </Surface>
    );
};

export default withTheme(RenderItem);
