import React from "react";
import { Text, View, ActivityIndicator, FlatList } from "react-native";
import { connect } from "react-redux";

import { setStateForPlusAddNewItem, setPageName } from "../../../actions";
import { getImportantList } from "../../../selectors";
import Search from "../../../components/Search";
import ToDoListItem from "../../../components/ToDoListItem";
import styles from "./styles";

class ToDoList extends React.Component {
  componentDidMount() {
    this.props.setPageName("importantList");
    this.props.setStateForPlusAddNewItem(false);
  }
  render() {
    const { isSearching, importantList } = this.props;

    return (
      <View style={styles.container}>
        <Search />
        <View style={styles.center}>
          <View>
            {isSearching ? (
              <ActivityIndicator size="small" color="black" />
            ) : null}
          </View>
          <View>
            {!importantList.length && !isSearching ? (
              <Text>Not Found</Text>
            ) : null}
          </View>
          {!isSearching ? (
            <FlatList
              data={importantList}
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
    importantList: getImportantList(state),
    isSearching: state.search.isSearching
  };
};

const mapDispatchToProps = {
  setStateForPlusAddNewItem,
  setPageName
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
