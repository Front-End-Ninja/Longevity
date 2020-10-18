import React from 'react';
import {ImageBackground} from 'react-native';
import BMI from "../components/features/BMI";
import styles from "../components/styles/BMIStyles";
import Header from "../components/home/variables/Header";
import {ScrollView} from "react-native-gesture-handler";

export default class BmiScreen extends React.Component {
    render() {
        return (
            <ImageBackground style={styles.backgroundImage} source={require('../assets/bg.jpg')}>
                <ScrollView>

                <Header title="Longevity"/>
                    <BMI/>
                </ScrollView>
            </ImageBackground>
        );
    }
}