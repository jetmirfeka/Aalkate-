import React from "react";
import contactImg from "../../../assets/images/contactus.png";
import { View, Text, ScrollView, Image, Linking, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles.js";

export default function ContactUs({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
      }}
    >
      <ScrollView>
        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 30,
          }}
        >
          <Image style={{ marginBottom: 50 }} source={contactImg} />
          <View>
            <View style={styles.centerText}>
              <FontAwesome name="map-marker" size={24} color="#FF8906" />
              <Text
                style={{
                  color: "#33346D",
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "500",
                  marginTop: 3,
                }}
              >
                Königstraße 20-22, 23769 Fehmarn, Germany
              </Text>
            </View>
            <View style={styles.centerText}>
              <FontAwesome name="clock-o" size={24} color="#FF8906" />
              <View>
                <Text
                  style={{
                    color: "#32B768",
                    marginLeft: 10,
                    fontSize: 16,
                    fontWeight: "500",
                    marginTop: 3,
                  }}
                >
                  Now Open
                  <Text style={{ color: "#33346D" }}> - Opens 10AM Thu</Text>
                </Text>
                <Text
                  style={{
                    color: "#FF8906",
                    marginLeft: 10,
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                >
                  Show Opening Hours
                </Text>
              </View>
            </View>
            <View style={styles.centerText}>
              <FontAwesome name="phone" size={24} color="#FF8906" />
              <Text
                style={{
                  color: "#33346D",
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "500",
                  marginTop: 3,
                }}
              >
                1800-420-8400
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ color: "#8E8E93" }}>
              Our Social Media Links to Contact
            </Text>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
              <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://twitter.com/hashtag/aalkate')}} style={styles.iconSocial}>
                <FontAwesome name="twitter" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.facebook.com/aalkate.fehmarn/')}} style={styles.iconSocial}>
                <FontAwesome name="facebook" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://www.instagram.com/aalkate.fehmarn/?hl=en')}} style={styles.iconSocial}>
                <FontAwesome name="instagram" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
