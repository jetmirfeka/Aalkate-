import React from "react";
import { View, Text, Image } from "react-native";
import logo from '../../../assets/images/logo.png';
import MenuList from '../../molecules/MenuList';
import Homeicon from '../../atoms/HomeIcon';
import styles from './styles.js';

export default function Menu({navigation}) {
  return (
    <View style={styles.menuContainer}>
        <Image style={styles.img} source={logo} />
        <Text style={styles.menuText}> Menu </Text>
        <MenuList />
        <Homeicon navigation={navigation} />
    </View>
  );
}
