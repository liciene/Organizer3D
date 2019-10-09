import { FormikErrors } from 'formik';
import * as React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { Button, Input } from '../../components/new-filament';
import { Filament } from '../../store/typescript';

export interface Props {
    handleSubmit: () => void;
    values: Filament;
    errors: FormikErrors<Filament>;
    setFieldValue: (keys: keyof Filament, text: string) => void;
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
                    label="Company"
                    placeholder="Insert the printer company (Ex: PYD)"
                    error={errors.company}
                    value={values.company}
                    returnKeyType="next"
                    onChangeText={text => setFieldValue('company', text)}
                    onSubmitEditing={() => {
                        if (this.model) this.model.focus();
                    }}
                />

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
                    autoFocus
                    label="Type"
                    placeholder="Insert the printer type (Ex: ?)"
                    error={errors.type}
                    value={values.type}
                    returnKeyType="next"
                    onChangeText={text => setFieldValue('type', text)}
                    onSubmitEditing={() => {
                        if (this.model) this.model.focus();
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

                <Button handleSubmit={handleSubmit} />
            </View>
        );
    }
}
