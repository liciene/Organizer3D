import * as React from 'react';
import { FlatList, View } from 'react-native';
import { Appbar, FAB, Text } from 'react-native-paper';
import { NavigationInjectedProps } from 'react-navigation';
import { NavigationStackOptions } from 'react-navigation-stack';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import StatusBar from '../../../components/status-bar';
import { RootActions, RootState } from '../../../config/store/typescript';
import { RenderItem } from '../components/printers-list';
import * as printersActions from '../store/actions';
import { Printer } from '../store/typescript';
import styles from './styles/printers-list';
import { Props } from './typescript/printers-list';

class PrintersList extends React.Component<Props> {
    public static navigationOptions = ({ navigation }: NavigationInjectedProps): NavigationStackOptions => ({
        header: () => (
            <Appbar.Header>
                <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
                <Appbar.Content title="Printers List" />
            </Appbar.Header>
        ),
    });

    constructor(props: Props) {
        super(props);
        this.handleSelectPrinter = this.handleSelectPrinter.bind(this);
        this.handleDeletePrinter = this.handleDeletePrinter.bind(this);
    }

    protected handleSelectPrinter = () => {};

    protected handleDeletePrinter = () => {};

    protected renderItem = ({ item }: { item: Printer }) => {
        const { printersReducer } = this.props;
        let selected = false;
        if (printersReducer.printerSelected) {
            selected = printersReducer.printerSelected.id === item.id;
        }
        return (
            <RenderItem
                handleDeletePrinter={this.handleDeletePrinter}
                handleSelectPrinter={this.handleSelectPrinter}
                item={item}
                selected={selected}
            />
        );
    };

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
                <StatusBar />
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
