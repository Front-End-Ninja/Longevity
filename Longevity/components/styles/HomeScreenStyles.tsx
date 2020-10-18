import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 60,
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    tittle: {
        paddingTop: 25,
        paddingBottom: 10,
        fontWeight: 'bold',
        color: '#21465b',
        alignSelf: 'center',
        fontSize: 30,
    }
});

export default styles;