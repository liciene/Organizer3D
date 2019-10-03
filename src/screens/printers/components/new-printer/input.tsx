import * as React from 'react';
import { View } from 'react-native';
import { Input, InputProps } from 'react-native-elements';

import styles from './styles/input';

type Ref = React.Ref<Input>;

const InputComponent = React.forwardRef((props: InputProps, ref: Ref) => {
    const { value, errorMessage, label, onChangeText, onSubmitEditing, returnKeyType, placeholder } = props;
    return (
        <View style={styles.container}>
            <Input
                ref={ref}
                value={value}
                label={label}
                errorMessage={errorMessage}
                onSubmitEditing={onSubmitEditing}
                onChangeText={onChangeText}
                returnKeyType={returnKeyType}
                placeholder={placeholder}
            />
        </View>
    );
});

export default InputComponent;
