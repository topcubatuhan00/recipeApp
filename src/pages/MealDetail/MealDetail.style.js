import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
    },
    image: {
        width: Dimensions.get('window').width,
        height: 300,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#A52A2A',
    },
    area: {
        fontWeight: 'bold',
        color: '#A52A2A',
        fontSize: 18,
    },
    innerContainer: {
        padding: 10,
    },
    header: {
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginBottom: 5,
    },
    description: {
        color: 'black',
        fontSize: 16,
        paddingBottom: 15,
    },
    button: {
        padding: 7,
        marginBottom: 20,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
});