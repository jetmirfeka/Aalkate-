import React from "react";
import { View, Image } from "react-native";
import backgorund from "../assets/images/homepagebackgorund.png";
import Menu from "../components/organisms/Menu";

export default function MenuScreen({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <Image style={{ flex: 1, resizeMode: "cover" }} source={backgorund} />
      <Menu navigation={navigation} />
    </View>
  );
}
