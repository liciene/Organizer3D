import { FormikErrors } from 'formik';
import * as React from 'react';
import { View } from 'react-native';
import { TextField } from 'react-native-material-textfield';

import { Button, Input } from '../../components/new-printer';
import { Printer } from '../../store/typescript';

export interface Props {
    handleSubmit: () => void;
    values: Printer;
    errors: FormikErrors<Printer>;
    setFieldValue: (keys: keyof Printer, text: string) => void;
}

export default class Form extends React.PureComponent<Props> {
    model!: TextField | null;

    cost!: TextField | null;

    watts!: TextField | null;

    public render() {
        const { handleSubmit, values, errors, setFieldValue } = this.props;
        return (
            <View>
                <Input
                    autoFocus
                    label="Name"
                    placeholder="Insert the printer name (Ex: Prometheus)"
                    error={errors.name}
                    value={values.name}
                    characterRestriction={15}
                    returnKeyType="next"
                    onChangeText={text => setFieldValue('name', text)}
                    onSubmitEditing={() => {
                        this.model.focus();
                    }}
                />
                <Input
                    ref={refs => {
                        this.model = refs;
                    }}
                    label="Model"
                    onChangeText={text => setFieldValue('model', text)}
                    placeholder="Insert the printer model (Ex: Prusa i3)"
                    characterRestriction={30}
                    error={errors.model}
                    value={values.model}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        this.cost.focus();
                    }}
                />
                <Input
                    ref={refs => {
                        this.cost = refs;
                    }}
                    label="Cost"
                    onChangeText={text => setFieldValue('cost', text)}
                    placeholder="Insert the printer cost (Ex: 15000)"
                    error={errors.cost}
                    keyboardType="numeric"
                    value={values.cost}
                    prefix="R$ "
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        this.watts.focus();
                    }}
                />
                <Input
                    ref={refs => {
                        this.watts = refs;
                    }}
                    label="Watts"
                    onChangeText={text => setFieldValue('wattsUsage', text)}
                    placeholder="Insert the watts usage of printer (Ex: 250)"
                    keyboardType="numeric"
                    error={errors.wattsUsage}
                    suffix="W"
                    value={values.wattsUsage}
                    onSubmitEditing={handleSubmit}
                />
                <Button handleSubmit={handleSubmit} />
            </View>
        );
    }
}
