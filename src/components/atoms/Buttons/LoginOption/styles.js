import { StyleSheet } from "react-native";

export default StyleSheet.create({
  loginOption: {
    width: "100%",
    height: 62,
    borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
