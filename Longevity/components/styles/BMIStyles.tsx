import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 40,
        bottom: 30
    },
    input: {
        height: 50,
        margin: 20,
        backgroundColor: '#fff',
        marginBottom: 10,
        color: '#111',
        paddingHorizontal: 10,
        opacity: 0.9,
        fontSize: 16,
        borderRadius: 10
    },
    submitButton: {
        margin: 20,
        height: 50,
        backgroundColor: '#111',
        paddingVertical: 12,
        opacity: 0.7,
        borderRadius: 10,
        marginTop: 10
    },
    submitButtonText:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
        fontSize: 18
    },
    output:{
        textAlign: "center",
        fontSize: 30,
        marginTop: 20
    },
    title:{
        paddingTop:30,
        paddingBottom:10,
        textAlign: "center",
        fontSize: 30,
        fontWeight:"bold",
    },
    resultText:{
        paddingTop:20,
        paddingBottom:10,
        textAlign: "center",
        fontSize: 30,
        color: '#fff',
    },
    label:{
        marginLeft: 30,
        fontSize: 20,
        fontWeight: "700"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
})

export default styles;