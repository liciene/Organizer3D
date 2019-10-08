import * as React from 'react';
import { View } from 'react-native';
import { Divider, IconButton, Menu, Subheading, Surface, Title, TouchableRipple } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Printer } from '../../store/typescript';
import styles from './styles/render-item';

interface Props {
    item: Printer;
    selected: boolean;
    handleDeletePrinter: (id: string) => void;
    handleSelectPrinter: (id: string) => void;
    handleItemPress: (id: string) => void;
}

const RenderItem = (props: Props) => {
    const { item, selected, handleDeletePrinter, handleItemPress, handleSelectPrinter } = props;

    const [menuVisible, handleMenuVisible] = React.useState(false);

    return (
        <Surface style={styles.container}>
            <TouchableRipple onPress={() => handleItemPress(item.id)} style={styles.subContainer}>
                <>
                    <View style={styles.iconContainer}>
                        <Icon name={selected ? 'printer-3d-nozzle-outline' : 'printer-3d'} size={32} />
                    </View>
                    <View style={styles.detailContainer}>
                        <Title>{item.name}</Title>
                        <Subheading>{`${item.model} - $${item.cost} - ${item.wattsUsage}W`}</Subheading>
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
                            handleDeletePrinter(item.id);
                        }}
                    />
                    <Divider />
                    <Menu.Item
                        icon="check"
                        title="Select"
                        onPress={() => {
                            handleMenuVisible(false);
                            handleSelectPrinter(item.id);
                        }}
                    />
                </Menu>
            </View>
        </Surface>
    );
};

export default RenderItem;
