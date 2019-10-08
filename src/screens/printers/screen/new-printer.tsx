import { Formik, FormikProps } from 'formik';
import * as React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Appbar } from 'react-native-paper';
import { NavigationInjectedProps } from 'react-navigation';
import { NavigationStackOptions } from 'react-navigation-stack';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { RootActions, RootState } from '../../../config/store/typescript';
import { Form } from '../containers/new-printer';
import validationSchema from '../services/new-printer/validationSchema';
import * as printerActions from '../store/actions';
import { Printer } from '../store/typescript';
import styles from './styles/new-printer';
import { Props } from './typescript/new-printer';

class NewPrinter extends React.Component<Props> {
    public static navigationOptions = ({ navigation }: NavigationInjectedProps): NavigationStackOptions => ({
        header: () => (
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="New Printer" />
            </Appbar.Header>
        ),
    });

    constructor(props: Props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    protected handleSubmit = (values: Printer) => {
        const { printerDispatch, navigation } = this.props;

        printerDispatch.addNewPrinter(values);
        navigation.goBack();
    };

    public render() {
        return (
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
                <Formik<Printer>
                    initialValues={{
                        id: (Math.random() * Date.now()).toFixed(0),
                        name: '',
                        model: '',
                        cost: '',
                        wattsUsage: '',
                    }}
                    validateOnBlur={false}
                    validateOnChange={false}
                    validationSchema={validationSchema}
                    onSubmit={this.handleSubmit}
                    render={(formikProps: FormikProps<Printer>) => (
                        <View style={styles.container}>
                            <Form
                                setFieldValue={formikProps.setFieldValue}
                                values={formikProps.values}
                                errors={formikProps.errors}
                                handleSubmit={formikProps.handleSubmit}
                            />
                        </View>
                    )}
                />
            </KeyboardAwareScrollView>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    printerReducer: state.printerReducer,
});

const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
    printerDispatch: bindActionCreators(printerActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewPrinter);
