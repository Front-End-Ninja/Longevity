import {StyleSheet} from "react-native";

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        paddingHorizontal: 40
    },
    text: {
        color: '#111',
        marginTop: 30,
        padding: 15,
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 22,
        backgroundColor: 'lightyellow',
        borderRadius: 10,
        opacity: 0.9
    },
    bold: {
        marginTop: 60,
        bottom: 30,
        padding: 15,
        fontWeight: 'bold',
        fontSize: 22,
        backgroundColor: 'lightyellow',
        borderRadius: 10,
        opacity: 0.7
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
})

export default styles;