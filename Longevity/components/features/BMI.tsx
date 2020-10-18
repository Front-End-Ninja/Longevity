import React from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from "../styles/BMIStyles";

export default class BMI extends React.Component {
    state = {
        height: '',
        weight: '',
        bmi: '',
        BmiResult: '',
    }
    // @ts-ignore
    handleHeight = (text) => {
        this.setState({ height: text })
    }
    // @ts-ignore
    handleWeight = (text) => {
        this.setState({ weight: text })
    }
    // @ts-ignore
    calculate = (height, weight) => {
        //calculation
        let result = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
        // @ts-ignore

        result = result.toFixed(2);
        //display result
        this.setState({ bmi: result })
        if(result<18.5){
            this.setState({BmiResult:'Underweight'})
        }
        else if(result>=18.5&&result<25){
            this.setState({BmiResult:'Normal weight'})
        }
        else if(result>=25&&result<30){
            this.setState({BmiResult:'Overweight'})
        }
        else if(result>=30){
            this.setState({BmiResult:'Obese'})
        }
        else{
            alert('Incorrect Input!');
            this.setState({BmiResult:''})
        }
    }
    render() {
        return (
            <View style = {styles.container}><Text style={styles.title}>BMI Calculator</Text>
                <Text  style = {styles.label}>Height</Text>
                <TextInput style = {styles.input}
                           clearTextOnFocus={true}
                           underlineColorAndroid = "transparent"
                           placeholder = "Height (Cm)"
                           placeholderTextColor="#111"
                           returnKeyType="next"
                           keyboardType="number-pad"
                    // @ts-ignore
                           onSubmitEditing={() => this.passwordInput.focus()}
                           autoCapitalize = "none"
                           onChangeText = {this.handleHeight}/><Text  style = {styles.label}>Weight</Text>
                <TextInput style = {styles.input}
                           clearTextOnFocus={true}
                           underlineColorAndroid = "transparent"
                           placeholderTextColor="#111"
                           returnKeyType="go"
                           keyboardType="number-pad"
                    // @ts-ignore
                           ref={(input) => this.passwordInput = input}
                           placeholder = "Weight (Kg)"
                           autoCapitalize = "none"
                           onChangeText = {this.handleWeight}/>
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => this.calculate(this.state.height, this.state.weight)
                    }>
                    <Text style = {styles.submitButtonText}> Calculate </Text>
                </TouchableOpacity><Text style = {styles.output}>{this.state.bmi}</Text>
                <Text style = {styles.resultText}>{this.state.BmiResult}</Text></View>
        );
    }
}

