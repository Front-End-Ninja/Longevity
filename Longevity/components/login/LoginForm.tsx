import React from "react";
import {TextInput, View, TouchableOpacity, Text, StatusBar} from "react-native";
import styles from "../styles/LoginFormStyles";

export default class LoginForm extends React.Component {
    render() {
        return (
          <View style={styles.container}>
              <StatusBar
              barStyle="light-content"
              />
              <TextInput
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
                  placeholder="password"
                  secureTextEntry
                  returnKeyType="go"
                  placeholderTextColor="#111"
                  // @ts-ignore
                  ref={(input) => this.passwordInput = input}
                  style={styles.input}/>
                  <TouchableOpacity style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>
                          LOGIN
                      </Text>
                  </TouchableOpacity>
              <TouchableOpacity
                  style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>
                      CREATE NEW
                  </Text>
              </TouchableOpacity>
          </View>
        );
    }
}

