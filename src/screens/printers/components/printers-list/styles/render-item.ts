import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 80,
        elevation: 4,

        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subContainer: {
        padding: 8,
        flexDirection: 'row',
    },
    iconContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        marginVertical: 5,
    },
    detailContainer: {
        marginLeft: 10,
    },
});

export default styles;
