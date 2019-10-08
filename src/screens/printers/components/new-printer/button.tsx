import * as React from 'react';
import { Button } from 'react-native-paper';

import styles from './styles/button';

interface Props {
    handleSubmit: () => void;
}

const ButtonComponent = (props: Props) => {
    const { handleSubmit } = props;
    return (
        <Button onPress={handleSubmit} style={styles.container}>
            Save
        </Button>
    );
};

export default ButtonComponent;
