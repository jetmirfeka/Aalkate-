import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import Checkbox from "expo-checkbox";
import styles from "./styles.js";

import img from "../../../assets/images/login_bg.png";
import logo from "../../../assets/images/logo.png";
import Button from "../../atoms/Buttons/LoginOption";

export default function LoginOption({navigation}) {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <View style={styles.wrapper}>
        <Image style={styles.logo} source={logo} />
        <View style={{ width: "100%" }}>
          <Button
            background="#1F2050"
            logo="gmail"
            text="Register with Google"
          />
          <Button
            background="#29295B"
            logo="facebook"
            text="Register with Facebook"
          />
          <Button background="#333365" logo="apple" text="Login via Apple" />
          <Button
            background="#Login via Email"
            logo="mail"
            text="Login via Email"
            onPress={() =>
              navigation.navigate('Login')
            }
          />
          <Button />
          <View style={styles.privacy}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#FF8906" : undefined}
            />
            <Text style={styles.privacyText}>
              By signing up, you are agreeing to our <Text style={styles.termcon}>Terms & Conditions</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
