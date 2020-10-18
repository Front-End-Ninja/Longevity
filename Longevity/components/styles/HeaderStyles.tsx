import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#111',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: "space-evenly",
    },
    title: {
        marginTop: 20,
        marginBottom: 20,
        color: '#fff',
        fontSize: 35,
        fontWeight: '900',
    },
    tinyLogo: {
        marginTop: 20,
        marginBottom: 20,
        width: 50,
        height: 50,
        borderRadius: 50
    },
});

export default styles;