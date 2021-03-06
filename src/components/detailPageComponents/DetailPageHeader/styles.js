import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#2f95dc",
    flexDirection: "row"
  },
  titleContainer: {
    flex: 1,
    alignItems: "flex-start"
  },
  titleText: {
    flex: 1,
    color: "white",
    paddingLeft: 10,
    paddingTop: 35,
    fontSize: 20
  },
  addItemContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 20
  },
  addVideoText: {
    flex: 1,
    paddingTop: 37,
    alignItems: "flex-start"
  },
  text: {
    fontSize: 20,
    color: "white",
    marginTop: 3
  }
});
