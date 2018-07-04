import React from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  FlatList
} from 'react-native';
import { connect } from 'react-redux'

import { setStateForPlusAddNewItem, setPageName } from '../../../actions'
import { getCompletedList } from '../../../selectors'
import Search from '../../../components/Search/Search'
import ToDoListItem from '../../../components/ToDoListItem/ToDoListItem'
import styles from './styles'



class ToDoList extends React.Component {
  componentDidMount() {
    this.props.setPageName('completedList')
    this.props.setStateForPlusAddNewItem(false)
  }
  render() {
    const { isSearching, completedList } = this.props

    return (
      <View style={styles.container}>
        <Search />
        <View style={styles.center}>
          <View>
            {
              isSearching ? <ActivityIndicator size="small" color="black" /> : null
            }
          </View>
          <View>
            {
              !completedList.length && !isSearching ? <Text>Not Found</Text> : null
            }
          </View>
          {
            !isSearching ?
              <FlatList
                data={completedList}
                renderItem={({ item }) => <ToDoListItem listItem={item} navigation={this.props.navigation} />}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
              /> : null
          }
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    completedList: getCompletedList(state),
    isSearching: state.search.isSearching
  }
}

const mapDispatchToProps = {
  setStateForPlusAddNewItem,
  setPageName
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);

