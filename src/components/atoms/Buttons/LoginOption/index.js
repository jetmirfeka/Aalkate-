import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles.js";
import Gmail from "../../../../assets/images/GoogleLogo.png";
import Facebook from "../../../../assets/images/FacebookLogo.png";
import Apple from "../../../../assets/images/AppleLogo.png";
import Email from "../../../../assets/images/Mail.png";

export default function LoginOption({
  text = "Create an account",
  logo = null,
  background = "#A8A9BE",
  onPress,
}) {
  function returnLogo() {
    switch (logo) {
      case "gmail":
        return Gmail;
      case "facebook":
        return Facebook;
      case "apple":
        return Apple;
      case "mail":
        return Email;
      default:
        return null;
    }
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.loginOption, { backgroundColor: background }]}
    >
      {logo && <Image style={styles.icon} source={returnLogo()} />}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
