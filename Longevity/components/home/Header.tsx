import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = (props: { title: React.ReactNode; }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{ props.title }</Text>
            <Image style={styles.tinyLogo} source={require('./../../assets/logo.jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#111',
        height: 100,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: "space-evenly",
    },
    title: {
        color: '#f3f3f3',
        fontSize: 35,
        fontWeight: '900',
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
});

export default Header;