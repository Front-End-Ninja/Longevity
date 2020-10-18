import 'react-native-gesture-handler';
import React from 'react';
import { Image, View, Text} from 'react-native';
import AppIntroSlider from "react-native-app-intro-slider";
import Icon from 'react-native-vector-icons/Ionicons';
import slides from "./components/onboardData/SliderData";
import styles from "./components/styles/AppStyles";
import HomeScreen from "./screens/HomeScreen";
import BmiScreen from "./screens/BmiScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";

const Tab = createBottomTabNavigator();

import { enableScreens } from 'react-native-screens';
import LoginScreen from "./screens/LoginScreen";
import MeditationScreen from "./screens/MeditationScreen";
enableScreens();


export default class App extends React.Component {
        state = {
        App: false,
    }
    // @ts-ignore
    _renderItem = ( { item } ) => {
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
                <Icon
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
                <Icon
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
                <NavigationContainer>
                    <Tab.Navigator
                        initialRouteName="Longevity"
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;

                                if (route.name === 'Longevity') {
                                    color= 'blue'
                                    iconName = focused
                                        ? 'ios-infinite'
                                        : 'ios-infinite';
                                }
                                if (route.name === 'BMI') {
                                    color= 'green'
                                    iconName = focused
                                        ? 'ios-leaf'
                                        : 'ios-leaf';
                                }
                                if (route.name === 'Login') {
                                    iconName = focused
                                        ? 'ios-log-in'
                                        : 'ios-log-in';
                                }
                                if (route.name === 'Meditation') {
                                    color= 'black'
                                    iconName = focused
                                        ? 'md-time'
                                        : 'md-open';
                                }
                                // @ts-ignore
                                return <Icon name={iconName} size={size} color={color} />;
                                },
                        })}
                        tabBarOptions={{
                            activeTintColor: 'white',
                            inactiveTintColor: 'black',
                            allowFontScaling: true,
                            activeBackgroundColor: 'lightblue',
                            labelStyle: {
                                fontSize: 18,
                                fontWeight: '700',
                                bottom: 5,
                                color: 'black',
                                opacity: 0.7
                            },
                            style: {
                                backgroundColor: 'white',
                            },
                        }}
                    >
                        <Tab.Screen
                            name="Longevity" component={HomeScreen}/>
                        <Tab.Screen name="BMI" component={BmiScreen}/>
                        <Tab.Screen name="Meditation" component={MeditationScreen}/>
                        <Tab.Screen name="Login" component={LoginScreen}/>
                    </Tab.Navigator>
                </NavigationContainer>
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