import { FormikErrors } from 'formik';
import * as React from 'react';
import { View } from 'react-native';
import { Input as ElementInput } from 'react-native-elements';

import { Button, Input } from '../../components/new-printer';
import { Printer } from '../../store/typescript';

export interface Props {
    handleSubmit: () => void;
    values: Printer;
    errors: FormikErrors<Printer>;
    setFieldValue: (keys: keyof Printer, text: string) => void;
}

export default class Form extends React.PureComponent<Props> {
    model!: ElementInput | null;

    cost!: ElementInput | null;

    watts!: ElementInput | null;

    public render() {
        const { handleSubmit, values, errors, setFieldValue } = this.props;
        return (
            <View>
                <Input
                    label="Name"
                    placeholder="Insert the printer name (Ex: Prometheus)"
                    errorMessage={errors.name}
                    value={values.name}
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
                    errorMessage={errors.model}
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
                    errorMessage={errors.cost}
                    value={values.cost}
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
                    errorMessage={errors.wattsUsage}
                    value={values.wattsUsage}
                    onSubmitEditing={handleSubmit}
                />
                <Button handleSubmit={handleSubmit} />
            </View>
        );
    }
}
