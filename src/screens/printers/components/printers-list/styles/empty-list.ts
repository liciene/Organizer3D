import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        padding: 12,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    subContainer: {
        alignItems: 'center',
    },
    focus: {
        backgroundColor: '#fff',
        width: 200,
        height: 200,
        borderRadius: 200,
        position: 'absolute',
        bottom: 10,
        right: -50,
    },
    text: {
        fontSize: 32,
        textAlign: 'center',
        color: '#fff',
    },
});

export default styles;
