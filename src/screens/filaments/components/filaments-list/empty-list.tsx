import * as React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles/empty-list';

const EmptyList = () => (
    <View style={styles.container}>
        <View style={styles.subContainer}>
            <Icon name="emoticon-sad-outline" size={64} color="#fff" />
            <Text style={styles.text}>The list is empty, please add a filament</Text>
        </View>
        <View style={styles.focus} />
    </View>
);

export default EmptyList;
