import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import styles from "./styles.js";
import resturantImg from "../../../assets/images/resturant.png";
import btn1 from "../../../assets/images/btn1.png";
import btn2 from "../../../assets/images/btn2.png";
import btn3 from "../../../assets/images/btn3.png";
import btn4 from "../../../assets/images/btn4.png";
import btn5 from "../../../assets/images/btn5.png";
import btn6 from "../../../assets/images/btn6.png";
import btn7 from "../../../assets/images/btn2.png";

export default function LoginOption({ navigation }) {
  let width = Dimensions.get("window").width;
  let height = Dimensions.get("window").height;
  const Container = height >= 900 ? View : ScrollView;
  
  return (
    <View style={styles.container}>
      <Container showsVerticalScrollIndicator={false} contentContainerStyle={{ width: width}}>
        <View style={styles.wrapper}>
          <Image style={styles.img} source={resturantImg} />
          <View style={styles.contentImg}>
            <TouchableOpacity style={styles.img1}>
              <Image style={styles.imgIcons} source={btn1} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.img2}>
              <Image style={styles.imgIcons} source={btn2} />
            </TouchableOpacity>
            <TouchableOpacity  onPress={() =>{ navigation.navigate("ContactUs")}} style={styles.img3}>
              <Image style={styles.imgIcons} source={btn3} />
            </TouchableOpacity>
            <TouchableOpacity  onPress={() =>{ navigation.navigate("Menu")}} style={styles.img4}>
              <Image style={styles.imgIcons} source={btn4} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.img5}>
              <Image style={styles.imgIcons} source={btn5} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.img6}>
              <Image style={styles.imgIcons} source={btn6} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.img7}>
              <Image style={styles.imgIcons} source={btn7} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.img8}>
              <Image style={styles.imgIcons} source={btn7} />
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    </View>
  );
}
