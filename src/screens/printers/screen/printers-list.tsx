import * as React from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { NavigationInjectedProps } from 'react-navigation';
import { NavigationStackOptions } from 'react-navigation-stack';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { RootActions, RootState } from '../../../config/store/typescript';
import * as printersActions from '../store/actions';
import { Printer } from '../store/typescript';
import { Props } from './typescript/printers-list';

// eslint-disable-next-line react/prefer-stateless-function
class PrintersList extends React.Component<Props> {
    public static navigationOptions = ({ navigation }: NavigationInjectedProps): NavigationStackOptions => ({
        header: () => (
            <Header
                leftComponent={{ icon: 'menu' }}
                centerComponent={{ text: 'Printer List' }}
                rightComponent={{ icon: 'add', onPress: () => navigation.navigate('newPrinter') }}
            />
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

    public render() {
        const { printersReducer } = this.props;
        return (
            <>
                <StatusBar translucent />
                <FlatList
                    data={printersReducer.printers}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.ListEmptyComponent}
                    refreshing={printersReducer.loading}
                />
            </>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    printersReducer: state.printerReducer,
});

const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
    printersDispatch: bindActionCreators(printersActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PrintersList);
