import React from "react";
import {ImageBackground} from "react-native";
import styles from "../components/styles/LoginScreenStyles";
import LoginForm from "../components/login/LoginForm";
import Header from "../components/home/variables/Header";
import {ScrollView} from "react-native-gesture-handler";


export default class LoginScreen extends React.Component {
    render() {
        return (
                <ImageBackground style= { styles.backgroundImage } source={require('../assets/bg5.jpg')}>
                    <ScrollView>
                        <Header title="Longevity"/>
                        <LoginForm/>
                    </ScrollView>
                </ImageBackground>
        );
    }
}
