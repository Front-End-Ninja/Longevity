import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import Header from "../components/home/variables/Header";
import {ScrollView} from "react-native-gesture-handler";
import styles from "../components/styles/MeditationStyles";

export default class BmiScreen extends React.Component {
    render() {
        return (
            <ImageBackground style={styles.backgroundImage} source={require('../assets/bg2.jpg')}>
                <ScrollView>
                    <Header title="Longevity"/>
                    <View
                    style={styles.container}
                    >
                    <Text
                    style={styles.text}
                    >
                        When we meditate, we inject far-reaching and long-lasting benefits into our lives: We lower our stress levels, we get to know our pain, we connect better, we improve our focus, and we're kinder to ourselves. Let us walk you through the basics in our new mindful guide on how to meditate.
                    </Text>
                    <Text
                    style={styles.text}
                    >
                        This is a guidebook to the many different styles of meditation, the various benefits of each practice, plus free guided audio practices that help you learn how to meditate.

                        How do you learn to meditate? In mindfulness meditation, we’re learning how to pay attention to the breath as it goes in and out, and notice when the mind wanders from this task. This practice of returning to the breath builds the muscles of attention and mindfulness.

                        When we pay attention to our breath, we are learning how to return to, and remain in, the present moment—to anchor ourselves in the here and now on purpose, without judgement.
                    </Text>
                    <Text
                    style={styles.bold}
                    >
                        In mindfulness practice, we are learning how to return to, and remain in, the present moment—to anchor ourselves in the here and now on purpose, without judgement.
                    </Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}