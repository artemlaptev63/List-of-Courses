import React from "react";
import { Text, View, ActivityIndicator, FlatList } from "react-native";
import { connect } from "react-redux";

import {
  fetchToDoList,
  setStateForPlusAddNewItem,
  setPageName
} from "../../../actions";
import { getActiveList } from "../../../selectors";
import Search from "../../../components/Search";
import ToDoListItem from "../../../components/ToDoListItem";
import styles from "./styles";

class ToDoList extends React.Component {
  componentDidMount() {
    this.props.setPageName("toDoList");
    if (!this.props.toDoListLength) {
      this.props.fetchToDoList();
    }
    this.props.setStateForPlusAddNewItem(true);
  }

  render() {
    const { isFetching, isUploaded, isSearching } = this.props;
    const { activeList } = this.props;

    return (
      <View style={styles.container}>
        <Search />
        <View style={styles.center}>
          <View>
            {isFetching || isSearching ? (
              <ActivityIndicator size="small" color="black" />
            ) : null}
          </View>
          <View>
            {isUploaded && !activeList.length && !isSearching ? (
              <Text>Not Found</Text>
            ) : null}
          </View>
          {!isFetching && !isSearching ? (
            <FlatList
              data={activeList}
              renderItem={({ item }) => (
                <ToDoListItem
                  listItem={item}
                  navigation={this.props.navigation}
                />
              )}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          ) : null}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeList: getActiveList(state),
    isFetching: state.toDoList.isFetching,
    isUploaded: state.toDoList.isUploaded,
    isSearching: state.search.isSearching,
    toDoListLength: state.toDoList.toDoList.length
  };
};

const mapDispatchToProps = {
  fetchToDoList,
  setStateForPlusAddNewItem,
  setPageName
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
