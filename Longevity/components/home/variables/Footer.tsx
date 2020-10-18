import React from 'react';
import {Text, View} from 'react-native';
import styles from "../../styles/FooterStyles";

const Footer = (props: { title: React.ReactNode; }) => {
    return (
        <View style={styles.footer}>
            <Text style={styles.title}>{ props.title }</Text>
        </View>
    )
}

export default Footer;