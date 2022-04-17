import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles.js";
import Title from "../../atoms/BigTitle";
import Form from "../../molecules/LoginForm";

export default function LoginWithEmail({navigation}) {
 
  return (
    <View style={styles.container}>
      <Title title='Welcome to Aalkate Fehmarn Food Services' />
      <Text style={styles.infoText}>Enter your Phone number or Email address for Sign in. Enjoy your food :)</Text>
      <Form navigation={navigation}/>
    </View>
  );
}
