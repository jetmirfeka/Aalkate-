import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import Button from "../../atoms/Buttons/LoginOption";
import styles from "./styles.js";

export default function CreateForm({ navigation }) {
  const [email, onChangeEmail] = useState(null);
  const [name, onChangeName] = useState(null);
  const [password, onChangePassword] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Full name</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          placeholder={"Full name"}
          value={name}
        />
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder={"Email Address"}
          value={email}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder={"Password"}
          secureTextEntry={true}
        />
      </View>

      <Button text="Register Account" background="#33346D" />
      <View style={styles.creatAcc}>
        <Text style={styles.dontAcc}>By Signing up you agree to our </Text>
        <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
          <Text style={styles.createAccText}>
            Terms Conditions & Privacy Policy.
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.or}>OR</Text>
      <Button logo="gmail" background="#33346D" text="Register with Google" />
      <Button
        logo="facebook"
        background="#33346D"
        text="Register with Facebook"
      />
    </View>
  );
}
