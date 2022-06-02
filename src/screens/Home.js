import React from 'react';
import { View, Image } from "react-native";
import backgorund from '../assets/images/homepagebackgorund.png';
import Home from '../components/organisms/Home/index';

export default function HomeScreen({navigation}){
  return (
    <View style={{ flex: 1}}>
      <Image style={{ flex: 1,resizeMode:'cover'}} source={backgorund}/>
      <Home navigation={navigation} />
    </View>
  );
};