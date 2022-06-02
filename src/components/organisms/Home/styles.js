import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
    paddingTop: 20,
    flex: 1,
    marginLeft:-15,
  },

  wrapper: {
    display: "flex",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 120,
    flex: 1,
  },

  img: {
    maxWidth: "80%",
    maxHeight: 450,
    resizeMode: "contain",
    left: -100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex:1
  },
  contentImg: {
    // flex: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginLeft: 20,
  },
  img1: {
    alignSelf: "flex-start",
  },
  img2: {
    alignSelf: "flex-start",
    marginLeft: 117,
    marginTop:-50
  },
  img3: {
    alignSelf: "flex-start",
    marginLeft: 210,
    marginTop:-40,
    marginBottom:20

  },
  img4: {
    alignSelf: "flex-start",
    marginLeft: 240,
    marginBottom:20
  },
  img5: {
    alignSelf: "flex-start",
    marginLeft: 230,
  },
  img6: {
    alignSelf: "flex-start",
    marginLeft: 210,
  },
  img7: {
    alignSelf: "flex-start",
    marginLeft: 117,
    marginTop:0
  },
  img8: {
    alignSelf: "flex-start",
    marginTop:-30
  },
});
