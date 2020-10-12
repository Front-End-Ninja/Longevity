import React from 'react';
import {StyleSheet, Image, View,Text, ImageBackground} from 'react-native';
import Header from './components/home/Header';
import Footer from "./components/home/Footer";
import Meditation from "./components/features/Meditation";
import Ketogenic from "./components/features/Ketogenic";
import BMI from "./components/features/BMI";
import Cold from "./components/features/ColdExposition";
import AppIntroSlider from "react-native-app-intro-slider";
import Ionicons from 'react-native-vector-icons/Ionicons';


const slides = [
    {
        key: 1,
        title: 'Fight for Yourself',
        text: 'Cold Exposition,\nhere You can learn best practice,\nsay no more to getting sick!',
        image: require('../Longevity/assets/bg1.jpg'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'Meditate',
        text: 'Meditation is very important!\nLearn how to improve Your mindfulness,\nrelief from stress!',
        image: require('../Longevity/assets/bg2.jpg'),
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        title: 'Lifestyle matters',
        text: 'Find Your way to increase life quality.\nLongevity is created on purpose to help You out!',
        image: require('../Longevity/assets/bg3.jpg'),
        backgroundColor: '#22bcb5',
    }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
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

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        App: false
    }}
    _renderItem = ({ item }) => {
        return (
            <View style={{flex:1}}>
                <Image source={item.image} style={styles.onboardScreen}/>
                <Text style={styles.tittle}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    }
    _onDone = () => {
        this.setState({ App: true });
    }
    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons
                    name="md-arrow-round-forward"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    };
    _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons
                    name="md-checkmark"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
            </View>
        );
    };
    render() {
        if (this.state.App) {
            return (
                <View style={styles.container}>
                    <ImageBackground style= { styles.backgroundImage } source={require('./assets/bg4.jpg')}>
                        <Header title="Longevity"/>
                        <Footer title={''}/>
                        <Meditation title="Guided Meditation"/>
                        <Ketogenic title="Ketogenic Diet"/>
                        <BMI title="BMI Calculator"/>
                        <Cold title="Cold Exposition"/>
                    </ImageBackground>
                </View>
            );
        } else {
            return <AppIntroSlider
                renderItem={this._renderItem}
                renderDoneButton={this._renderDoneButton}
                renderNextButton={this._renderNextButton}
                data={slides} onDone={this._onDone}
                activeDotStyle={styles.dotStyle}/>;
        }
    }
}

