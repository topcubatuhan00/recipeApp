import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 10,
    },
    image: {
        height: 190,
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontSize: 22,
    },
    textContainer: {
        position: 'absolute',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        width: Dimensions.get('window').width/1.05,
        height:60,
        bottom: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
