import React from "react";
import {TextInput, View, TouchableOpacity, Text, StatusBar} from "react-native";
import styles from "../styles/CreateNewStyles";

export default class CreateNewForm extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <Text style={styles.title}>Welcome to Longevity, first things first</Text>
                <TextInput
                    clearTextOnFocus={true}
                    placeholder="username or email"
                    placeholderTextColor="#111"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    // @ts-ignore
                    onSubmitEditing={() => this.passwordInput.focus()}
                    style={styles.input}/>
                <TextInput
                    clearTextOnFocus={true}
                    placeholder="password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    returnKeyType="next"
                    placeholderTextColor="#111"
                    // @ts-ignore
                    ref={(input) => this.passwordInput = input}
                    // @ts-ignore
                    onSubmitEditing={() => this.confirmPasswordInput.focus()}
                    style={styles.input}/>
                <TextInput
                    clearTextOnFocus={true}
                    placeholder="confirm password"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    returnKeyType="go"
                    placeholderTextColor="#111"
                    // @ts-ignore
                    ref={(input) => this.confirmPasswordInput = input}
                    style={styles.input}/>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}