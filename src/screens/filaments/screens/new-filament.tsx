import { Formik, FormikProps } from 'formik';
import * as React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Appbar } from 'react-native-paper';
import { NavigationStackOptions } from 'react-navigation-stack';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { RootActions, RootState } from '../../../config/store/typescript';
import { Form } from '../containers/new-filament';
import validationSchema from '../services/new-filament/validationSchema';
import * as filamentActions from '../store/actions';
import { Filament } from '../store/typescript';
import styles from './styles/new-filament';
import { Navigation, Props } from './typescript/new-filament';

class NewFilament extends React.Component<Props> {
    public static navigationOptions = ({ navigation }: { navigation: Navigation }): NavigationStackOptions => ({
        header: () => (
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="New Filament" />
            </Appbar.Header>
        ),
    });

    constructor(props: Props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    protected handleSubmit = (values: Filament) => {
        const { filamentDispatch, navigation } = this.props;

        filamentDispatch.addNewFilament(values);
        navigation.goBack();
    };

    public render() {
        const { navigation } = this.props;
        const initialState = navigation.state.params
            ? navigation.state.params.item
            : {
                  id: (Math.random() * Date.now()).toFixed(0),
                  name: '',
                  company: '',
                  cost: '',
                  type: '',
                  dimension: -1,
              };

        return (
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
                <Formik<Filament>
                    initialValues={initialState}
                    validateOnBlur={false}
                    validateOnChange={false}
                    validationSchema={validationSchema}
                    onSubmit={this.handleSubmit}
                    render={(formikProps: FormikProps<Filament>) => (
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
    filamentReducer: state.filamentReducer,
});

const mapDispatchToProps = (dispatch: Dispatch<RootActions>) => ({
    filamentDispatch: bindActionCreators(filamentActions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewFilament);
