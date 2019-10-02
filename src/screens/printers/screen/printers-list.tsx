import * as React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationStackOptions } from 'react-navigation-stack';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { RootActions, RootState } from '../../../config/store/typescript';
import * as printersActions from '../store/actions';
import { Props } from './typescript/printers-list';

// eslint-disable-next-line react/prefer-stateless-function
class PrintersList extends React.Component<Props> {
    public static navigationOptions = (): NavigationStackOptions => ({
        title: 'Printers List',
    });

    public render() {
        return (
            <View>
                <Icon name="plus" size={30} color="#000" />
            </View>
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
