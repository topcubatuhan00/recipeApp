import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#ECEFF1',
        margin: 10,
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    image: {
        width: 75,
        minHeight: 75,
        borderRadius: 50,
        resizeMode: 'contain',
    },
    category: {
        fontSize: 16,
        marginLeft: 10,
    },
});