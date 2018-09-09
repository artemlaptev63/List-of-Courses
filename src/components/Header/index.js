import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'

import styles from './styles'
import { connect } from 'react-redux'
import { toogleInputAddNewItem, cleanCompletedListAction } from '../../actions'

import { getCompletedList } from '../../selectors'


class AppHeader extends React.Component {
  toogleState() {
    this.props.toogleInputAddNewItem()
  }
  cleanCompletedList() {
    Alert.alert(
      'Clean List',
      'Are you sure?',
      [
        { text: 'YES', onPress: () => this.props.cleanCompletedListAction() },
        { text: 'NO' },
        { text: 'Cancel', style: 'cancel' }
      ],
      { cancelable: false }
    )
  }

  backTap = () => {
    this.props.navigation.pop()
  }

  render() {
    const { stateInputAdd, showPlusAddNewItem, activePage, completedList } = this.props

    let titleHeader;
    if (activePage === 'toDoList') { titleHeader = "Active List" }
    if (activePage === 'importantList') { titleHeader = "Important List" }
    if (activePage === 'completedList') { titleHeader = "Completed List" }

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text
            style={styles.titleText}
          >
            {titleHeader}
          </Text>
        </View>
        <View style={styles.addItemContainer}>
          {showPlusAddNewItem ?
            <TouchableOpacity style={styles.addItemText} onPress={() => this.toogleState()}>
              {
                stateInputAdd ?
                  <Feather name='chevron-up' size={30} color="#ffffff" />
                  :
                  <Feather name='plus' size={30} color="#ffffff" />
              }
            </TouchableOpacity>
            : null
          }
          {
            activePage === 'completedList' && completedList.length ?
              <TouchableOpacity style={styles.addItemText} onPress={() => this.cleanCompletedList()}>
                <Entypo name='trash' size={30} color="#ffffff" />
              </TouchableOpacity>
              : null
          }
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    stateInputAdd: state.stateInputAdd.inputAddState,
    showPlusAddNewItem: state.plusAddNewItem.addNewItemState,
    activePage: state.pagesNames.activePage,
    completedList: getCompletedList(state),
  }
}
const mapDispatchToProps = {
  toogleInputAddNewItem,
  cleanCompletedListAction
}
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)

