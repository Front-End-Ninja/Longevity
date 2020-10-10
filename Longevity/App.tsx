import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import Header from './components/home/Header';
import Footer from "./components/home/Footer";
import Meditation from "./components/features/Meditation";
import Ketogenic from "./components/features/Ketogenic";
import BMI from "./components/features/BMI";
import Cold from "./components/features/ColdExposition";



export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    }
  });
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
  }
