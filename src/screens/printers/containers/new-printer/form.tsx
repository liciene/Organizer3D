import { FormikErrors } from 'formik';
import * as React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { Button, Input } from '../../components/new-printer';
import { Printer } from '../../store/typescript';

export interface Props {
    handleSubmit: () => void;
    values: Printer;
    errors: FormikErrors<Printer>;
    setFieldValue: (keys: keyof Printer, text: string) => void;
}

export default class Form extends React.PureComponent<Props> {
    model!: TextInput | null;

    cost!: TextInput | null;

    watts!: TextInput | null;

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
                    returnKeyType="next"
                    onChangeText={text => setFieldValue('name', text)}
                    onSubmitEditing={() => {
                        if (this.model) this.model.focus();
                    }}
                />
                <Input
                    ref={refs => {
                        this.model = refs;
                    }}
                    label="Model"
                    onChangeText={text => setFieldValue('model', text)}
                    placeholder="Insert the printer model (Ex: Prusa i3)"
                    error={errors.model}
                    value={values.model}
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        if (this.cost) this.cost.focus();
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
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        if (this.watts) this.watts.focus();
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
                    value={values.wattsUsage}
                    onSubmitEditing={handleSubmit}
                />
                <Button handleSubmit={handleSubmit} />
            </View>
        );
    }
}
