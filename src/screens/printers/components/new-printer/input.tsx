import * as React from 'react';
import { View } from 'react-native';
import { TextField, TextFieldProps } from 'react-native-material-textfield';

import styles from './styles/input';

type Ref = React.Ref<TextField>;

const InputComponent = React.forwardRef((props: TextFieldProps, ref: Ref) => {
    const {
        value,
        error,
        label,
        onChangeText,
        onSubmitEditing,
        returnKeyType,
        placeholder,
        prefix,
        suffix,
        characterRestriction,
        keyboardType,
        autoFocus,
    } = props;
    return (
        <View style={styles.container}>
            <TextField
                autoFocus={autoFocus}
                ref={ref}
                value={value}
                label={label}
                suffix={suffix}
                error={error}
                onSubmitEditing={onSubmitEditing}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                placeholder={placeholder}
                prefix={prefix}
                characterRestriction={characterRestriction}
            />
        </View>
    );
});

export default InputComponent;
