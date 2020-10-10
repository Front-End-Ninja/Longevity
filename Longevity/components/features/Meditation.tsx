import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Meditation = (props: { title: React.ReactNode; }) => {
    return (
        <View style={styles.meditation}>
            <Text style={styles.title}>{ props.title }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    meditation: {
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative", top: 40, left: 55,
        width: 300,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    title: {
        color: '#F3F3F3',
        fontSize: 28,
        fontWeight: '900',
    }
});

export default Meditation;