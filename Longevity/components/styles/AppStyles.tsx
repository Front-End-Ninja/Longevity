import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    tittle: {
        paddingTop: 25,
        paddingBottom: 10,
        fontWeight: 'bold',
        color: '#21465b',
        alignSelf: 'center',
        fontSize: 30,
    },
    text: {
        textAlign: 'center',
        color: '#b5b5b5',
        fontSize: 15,
        paddingHorizontal: 30,
    },
    dotStyle: {
        backgroundColor: '#21456b',
        width: 10,
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    onboardScreen: {
        resizeMode:'cover',
        height:'73%',
        width: '100%'
    }
});

export default styles;