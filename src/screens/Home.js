import React from 'react';
import { View, Text, Button } from "react-native";

export default function HomeScreen(){
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title='Go to Profile' onPress={() => props.navigation.push("Profile")} />
      <Button title='Go to Settings' onPress={() => props.navigation.push("Settings")} />
    </View>
  );
};