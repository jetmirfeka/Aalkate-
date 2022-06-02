import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import MenuItems from "../../atoms/MenuItems";

const DATA = [
  {
    id: "1",
    title: "Fur den kleinen hunger/vorspeisen",
  },
  {
    id: "2",
    title: "Salste",
  },
  {
    id: "3",
    title: "Dit un Dat",
  },
  {
    id: "4",
    title: "Fur den kleinen hunger/vorspeisen",
  },
  {
    id: "5",
    title: "Salste",
  },
  {
    id: "6",
    title: "Dit un Dat",
  },
];

const menu = [
  {
    name: "Fisch-Curry",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    rating: "4.8",
    price: 17.9,
  },
  {
    name: "Fisch-Curry",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    rating: "4.8",
    price: 17.9,
  },
  {
    name: "Fisch-Curry",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    rating: "4.8",
    price: 17.9,
  },
  {
    name: "Fisch-Curry",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    rating: "4.8",
    price: 17.9,
  },
  {
    name: "Fisch-Curry",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    rating: "4.8",
    price: 17.9,
  },
  {
    name: "Fisch-Curry",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    rating: "4.8",
    price: 17.9,
  },
  {
    name: "Fisch-Curry",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    rating: "4.8",
    price: 17.9,
  },
  {
    name: "Fisch-Curry",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    rating: "4.8",
    price: 17.9,
  },
];
export default function MenuList() {
  const menuItem = (title) => {
    return (
      <TouchableOpacity activeOpacity={0.5} style={styles.categoryButton}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View
        style={{
          height: 60,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          display: "flex",
          flex: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          data={DATA}
          renderItem={({ item }) => menuItem(item.title)}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ flex: 1, marginRight: 25 }}>
        <FlatList
          data={menu}
          numColumns={2}
          renderItem={({ item }) => (
            <MenuItems
              name={item.name}
              description={item.description}
              price={item.price}
              rating={item.rating}
            />
          )}
          contentContainerStyle={{ paddingBottom: 150 }}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
