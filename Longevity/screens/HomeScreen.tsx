import React from 'react';
import {ImageBackground} from 'react-native';
import styles from "../components/styles/HomeScreenStyles";
import Header from "../components/home/variables/Header";

export default class HomeScreen extends React.Component {
    render() {
        return (
            <ImageBackground style={styles.backgroundImage} source={require('../assets/bg4.jpg')}>
                <Header title="Longevity"/>
            </ImageBackground>
        );
    }
}