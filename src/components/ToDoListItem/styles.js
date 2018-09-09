import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "grey"
  },
  listItem: {
    paddingTop: 21,
    paddingBottom: 21,
    flexDirection: "row",
    paddingLeft: 20,
    backgroundColor: "white"
  },
  listItemText: {
    fontSize: 17
  },
  listItemIconContainer: {
    alignItems: "flex-end",
    flex: 1,
    paddingRight: 20
  },
  listItemTextContainer: {
    alignItems: "flex-start",
    flex: 10
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 25,
    backgroundColor: "red"
  },
  leftSwipeItemText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700"
  },
  rightSwipeItemText: {
    paddingLeft: 5
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
    backgroundColor: "#ffffff",
    borderLeftWidth: 0.5,
    borderColor: "grey"
  }
});
