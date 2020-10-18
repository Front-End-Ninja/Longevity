import React from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import styles from "../../styles/HeaderStyles";

const Header = (props: { title: React.ReactNode; }) => {
    return (
        <View style={styles.header}>
            <StatusBar
                barStyle="light-content"
            />
            <Text style={styles.title}>{ props.title }</Text>
            <Image style={styles.tinyLogo} source={require('../../../assets/logo.jpg')}/>
        </View>
    )
}

export default Header;