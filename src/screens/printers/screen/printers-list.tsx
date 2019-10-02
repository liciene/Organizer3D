import * as React from 'react';
import { Text, View } from 'react-native';
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
        const { printersReducer } = this.props;
        return (
            <View>
                <Text>{`List of printers ${printersReducer.loading}`}</Text>
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
