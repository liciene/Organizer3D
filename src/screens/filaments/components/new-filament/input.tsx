import * as React from 'react';
import { TextInputProps, View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

import styles from './styles/input';

type Ref = React.Ref<TextInput>;

interface Props extends TextInputProps {
    error?: string;
    label: string;
}

const InputComponent = React.forwardRef((props: Props, ref: Ref) => {
    const {
        value,
        error,
        label,
        onChangeText,
        onSubmitEditing,
        returnKeyType,
        placeholder,
        keyboardType,
        autoFocus,
    } = props;
    return (
        <View style={styles.container}>
            <TextInput
                autoFocus={autoFocus}
                mode="outlined"
                ref={ref}
                value={value}
                label={label}
                error={!!error}
                onSubmitEditing={onSubmitEditing}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                placeholder={placeholder}
            />
            <HelperText visible={!!error} type="error">
                {error}
            </HelperText>
        </View>
    );
});

export default InputComponent;
