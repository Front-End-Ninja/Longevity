import React from "react";
import {View, ImageBackground, KeyboardAvoidingView} from "react-native";
import styles from "../components/styles/CreateNewStyles";
import CreateNewForm from "../components/login/CreateNewForm";
import Header from "../components/home/variables/Header";

export default class CreateAccScreen extends React.Component {
    render() {
        return (
            <ImageBackground style= { styles.backgroundImage } source={require('../assets/bg5.jpg')}>
                <Header title="Longevity"/>
                <KeyboardAvoidingView behavior="padding">
                    <View>
                    <CreateNewForm/>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}
