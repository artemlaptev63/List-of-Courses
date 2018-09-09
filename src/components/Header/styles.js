import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#2f95dc",
    flexDirection: "row",
    paddingRight: 20
  },
  titleContainer: {
    flex: 1,
    alignItems: "flex-start"
  },
  titleText: {
    flex: 1,
    color: "white",
    paddingLeft: 20,
    paddingTop: 40,
    fontSize: 20
  },
  addItemContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  addItemText: {
    flex: 1,
    paddingTop: 37,
    alignItems: "flex-start"
  }
});
