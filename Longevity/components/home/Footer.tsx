import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';

const Footer = (props: { title: React.ReactNode; }) => {
    return (
        <View style={styles.footer}>
            <Text style={styles.title}>{ props.title }</Text>
            <Button
                title="Login"
                onPress={() => Alert.alert('Not included yet')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#111',
        height: 70,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', left: 0, right: 0, bottom: 0,
    },
    title: {
        color: '#F3F3F3',
        fontSize: 28,
        fontWeight: '900',
    }
});

export default Footer;