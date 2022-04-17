import React from 'react';
import {View, Text} from 'react-native';
import Title from "../../atoms/BigTitle";
import Form from "../../molecules/CreateForm";
import styles from './styles.js'

export default function index({navigation}) {
  return (
    <View  style={styles.container}>
        <Title title='Create Account' />
        <Text style={styles.infoText}>Enter your Name, Email & Password for Register. Already have Account? Sign in</Text>
        <Form navigation={navigation} />
    </View>
  )
}
