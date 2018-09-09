import React from "react";
import { View, Text, TextInput, Alert, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { connect } from "react-redux";

import { addNewVideoAction } from "../../../actions";
import styles from "./styles";

class AddNewVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newVideoLink: "",
      newVideoName: ""
    };
  }

  newVideoLink(value) {
    this.setState({
      newVideoLink: value
    });
  }
  newVideoName(value) {
    this.setState({
      newVideoName: value
    });
  }

  addNewVideo(newVideoLink, newVideoName, id) {
    if (newVideoLink.length === 43) {
      newVideoLink = newVideoLink.slice(-11);
      this.props.addNewVideoAction(newVideoLink, id, newVideoName);
      return;
    }
    if (newVideoLink.length === 83) {
      newVideoLink = newVideoLink.slice(-34);
      this.props.addNewVideoAction(newVideoLink, id, newVideoName);
      return;
    } else {
      Alert.alert(
        "",
        "Add correct link",
        [{ text: "OK" }, { text: "Cancel", style: "cancel" }],
        { cancelable: false }
      );
    }
  }

  render() {
    const { listItemID } = this.props;
    return (
      <View>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: "grey",
            backgroundColor: "#bdc1cc"
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 15
            }}
          >
            New video will be added to the end of the list
          </Text>
        </View>
        <View
          style={{
            paddingTop: 21,
            paddingBottom: 21,
            alignItems: "flex-start",
            paddingLeft: 20,
            justifyContent: "center",
            borderBottomWidth: 0.5,
            borderColor: "grey"
          }}
        >
          <TextInput
            style={styles.listItemText}
            autoFocus={true}
            onChangeText={value => this.newVideoName(value)}
            placeholder="Add name..."
          />
        </View>
        <View style={styles.container}>
          <View style={styles.listItem}>
            <TextInput
              style={styles.listItemText}
              autoFocus={true}
              onChangeText={value => this.newVideoLink(value)}
              placeholder="Add link to youtube video..."
            />
          </View>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() =>
              this.addNewVideo(
                this.state.newVideoLink,
                this.state.newVideoName,
                listItemID
              )
            }
          >
            <Feather
              name="plus-circle"
              size={30}
              color="#2f95dc"
              style={{ marginRight: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {
  addNewVideoAction
};
export default connect(
  null,
  mapDispatchToProps
)(AddNewVideo);
