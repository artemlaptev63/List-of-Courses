import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: "grey"
  },
  listItem: {
    flex: 5,
    paddingTop: 21,
    paddingBottom: 21,
    alignItems: "flex-start",
    paddingLeft: 20,
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: "grey"
  },
  listItemText: {
    fontSize: 17
  }
});
