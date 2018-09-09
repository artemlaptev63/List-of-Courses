import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

import BottomTapBar from "../../components/BottomTapBar";
import ToDo from "./ToDo";
import ImportantList from "./MostImportant";
import Completed from "./Completed";
import Header from "../../components/Header";
import AddNewItem from "../../components/AddNewItem";
import {
  getActiveCount,
  getImportantCount,
  getCompletedCount
} from "../../selectors";
import styles from "./styles";

class Home extends Component {
  render() {
    const { stateInputAdd } = this.props;
    return (
      <View style={styles.container}>
        <Header />
        {stateInputAdd ? <AddNewItem /> : null}
        <BottomTapBar>
          <ToDo
            icon="list-ul"
            title="Active"
            count={this.props.countActive}
            navigation={this.props.navigation}
          />
          <ImportantList
            icon="star-o"
            title="Important"
            count={this.props.countImportant}
            navigation={this.props.navigation}
          />
          <Completed
            icon="check-square"
            title="Completed"
            count={this.props.countCompleted}
            navigation={this.props.navigation}
          />
        </BottomTapBar>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    stateInputAdd: state.stateInputAdd.inputAddState,
    countActive: getActiveCount(state),
    countImportant: getImportantCount(state),
    countCompleted: getCompletedCount(state)
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
