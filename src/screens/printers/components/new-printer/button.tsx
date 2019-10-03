import * as React from 'react';
import { Button } from 'react-native-elements';

import styles from './styles/button';

interface Props {
    handleSubmit: () => void;
}

const ButtonComponent = (props: Props) => {
    const { handleSubmit } = props;
    return <Button title="Save" onPress={handleSubmit} buttonStyle={styles.container} />;
};

export default ButtonComponent;
