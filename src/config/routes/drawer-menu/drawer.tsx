/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { NavigationActions, NavigationParams } from 'react-navigation';
import { DrawerContentComponentProps } from 'react-navigation-drawer';

import DrawerItem from './item';

export default class DrawerComponent extends React.PureComponent<DrawerContentComponentProps> {
    constructor(props: DrawerContentComponentProps) {
        super(props);
        this.navigate = this.navigate.bind(this);
    }

    public navigate = (routeName: string, params?: NavigationParams) => {
        const { navigation } = this.props;
        const action = NavigationActions.navigate({
            routeName,
            params,
        });

        navigation.dispatch(action);
    };

    render() {
        const { items, activeItemKey } = this.props;

        return (
            <>
                <DrawerItem
                    key={items[0].key}
                    label="Printer List"
                    onPress={() => {
                        this.navigate('PrinterScreens');
                    }}
                    iconName="printer-3d"
                    active={activeItemKey === 'PrinterScreens'}
                />
                <DrawerItem
                    key={items[1].key}
                    label="Filament List"
                    onPress={() => {
                        this.navigate('FilamentsScreens');
                    }}
                    iconName="movie-roll"
                    active={activeItemKey === 'FilamentsScreens'}
                />
            </>
        );
    }
}
