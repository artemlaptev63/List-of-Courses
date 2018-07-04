import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Swipeable from 'react-native-swipeable';
import { connect } from 'react-redux'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles'
import {
  removeItemFromToDoList,
  toogleStateImportantIconAction,
  toogleStateIsCompletedAction
} from '../../actions'




class ToDoListItem extends React.Component {

  //переустановить Swipeable в исходное положение
  handleUserBeganScrollingParentView() {
    this.swipeable.recenter()
  }

  //удаление item из списка
  remove(id) {
    this.props.removeItemFromToDoList(id)
    this.handleUserBeganScrollingParentView()
  }

  //ссылка на детали
  goToTheDetails = () => {
    this.props.navigation.navigate('ToDoDetail', { navigation: this.props.navigation, listItem: this.props.listItem });
  }

  toogleStateImportantIcon(id, activePage) {
    Alert.alert(
      '',
      'Change important status?',
      [
        { text: 'YES', onPress: () => this.props.toogleStateImportantIconAction(id) },
        { text: 'NO' },
        { text: 'Cancel', style: 'cancel' }
      ],
      { cancelable: false }
    )
    this.handleUserBeganScrollingParentView()
  }

  toogleStateIsCompleted(id, activePage) {
    Alert.alert(
      '',
      'Change completed status?',
      [
        { text: 'YES', onPress: () => this.props.toogleStateIsCompletedAction(id) },
        { text: 'NO' },
        { text: 'Cancel', style: 'cancel' }
      ],
      { cancelable: false }
    )
  }

  render() {
    const { listItem, activePage } = this.props
    const leftButtons = [
      <TouchableOpacity
        style={styles.leftSwipeItem}
        onPress={() => this.remove(listItem.id)}
      >
        <Text style={styles.leftSwipeItemText}>DELETE</Text>
      </TouchableOpacity>
    ]

    const rightButtons = [
      <TouchableOpacity
        style={styles.rightSwipeItem}
        onPress={() => this.toogleStateImportantIcon(listItem.id, activePage)}
      >
        <FontAwesome
          name='exclamation-circle'
          size={35} style={styles.rightSwipeItemText}
          color={listItem.important ? 'red' : 'grey'}
        />
      </TouchableOpacity>
    ]

    return (
      <View style={styles.container}>
        <Swipeable
          leftButtonWidth={100}
          onRef={ref => this.swipeable = ref} // для возвращения в исходное положение
          leftButtons={leftButtons}
          rightButtons={rightButtons}
        >
          <View style={styles.listItem}>
            {/* ссылка на детали */}
            <View style={styles.listItemTextContainer}>
              <Text onPress={this.goToTheDetails} style={styles.listItemText}>{listItem.name}</Text>
            </View>
            <View style={styles.listItemIconContainer}>
              <TouchableOpacity onPress={() => this.toogleStateIsCompleted(listItem.id, activePage)}>
                <FontAwesome name={listItem.isCompleted ? 'check-circle' : 'circle-thin'} size={25} color={listItem.isCompleted ? '#2f95dc' : 'grey'} />
              </TouchableOpacity>
            </View>
          </View>
        </Swipeable>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = {
  removeItemFromToDoList,
  toogleStateImportantIconAction,
  toogleStateIsCompletedAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListItem)