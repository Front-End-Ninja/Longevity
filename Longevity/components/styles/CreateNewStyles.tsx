import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        padding: 30
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        color: '#111',
        paddingHorizontal: 10,
        opacity: 0.5,
        fontSize: 16,
        borderRadius: 10
    },
    buttonContainer: {
        backgroundColor: '#7e7575',
        paddingVertical: 12,
        opacity: 0.5,
        borderRadius: 10,
        marginTop: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
        fontSize: 18
    },
    title: {
        marginBottom: 50,
        color: '#fff',
        width: 200,
        textAlign: 'center',
        opacity: 0.6,
        alignSelf: 'center',
        fontSize: 20,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
})

export default styles;