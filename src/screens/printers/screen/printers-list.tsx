import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Appbar, FAB } from 'react-native-paper';
import { NavigationInjectedProps } from 'react-navigation';
import { NavigationStackOptions } from 'react-navigation-stack';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { RootActions, RootState } from '../../../config/store/typescript';
import * as printersActions from '../store/actions';
import { Printer } from '../store/typescript';
import styles from './styles/printers-list';
import { Props } from './typescript/printers-list';

// eslint-disable-next-line react/prefer-stateless-function
class PrintersList extends React.Component<Props> {
    public static navigationOptions = ({ navigation }: NavigationInjectedProps): NavigationStackOptions => ({
        header: () => (
            <Appbar.Header>
                <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
                <Appbar.Content title="Printers List" />
            </Appbar.Header>
        ),
    });

    protected renderItem = ({ item }: { item: Printer }) => (
        <View>
            <Text>{item.model}</Text>
        </View>
    );

    protected ListEmptyComponent = () => (
        <View>
            <Text>Empty</Text>
        </View>
    );

    protected handleAddPrinter = () => {
        const { navigation } = this.props;
        navigation.navigate('newPrinter');
    };

    public render() {
        const { printersReducer } = this.props;
        return (
            <>
                <FlatList
                    data={printersReducer.printers}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.ListEmptyComponent}
                    refreshing={printersReducer.loading}
                />
                <FAB icon="add" style={styles.fab} onPress={this.handleAddPrinter} />
            </>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    printersReducer: state.printerReducer,
    generalReducers: state.generalReducer,
});

const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
    printersDispatch: bindActionCreators(printersActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PrintersList);
