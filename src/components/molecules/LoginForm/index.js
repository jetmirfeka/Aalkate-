import React, { useState, useContext } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import Button from "../../atoms/Buttons/LoginOption";
import styles from "./styles.js";
import authContext from "../../../context";

export default function LoginWithEmail({navigation}) {
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);

  const { setAuthenticated } = useContext(authContext);

  const handleLogin = () => setAuthenticated(true);

  return (
    <View style={styles.container}>
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
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}  style={styles.forgotPsw}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
      <Button onPress={handleLogin} text="Sing in" background="#33346D" />
      <View style={styles.creatAcc}>
        <Text style={styles.dontAcc}>Don’t have Account? </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('CreateAccount')}>
          <Text style={styles.createAccText}>Create New Account.</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.or}>OR</Text>
      <Button  onPress={handleLogin} logo='gmail' background="#33346D" text="Register with Google" />
      <Button  onPress={handleLogin} logo='facebook' background="#33346D" text="Register with Facebook" />
    </View>
  );
}
