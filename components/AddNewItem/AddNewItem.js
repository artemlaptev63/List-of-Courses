import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { connect } from 'react-redux'

import { addNewItemAction } from '../../actions'
import styles from './styles'


class AddNewItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newItemText: ''
    }
  }

  newItemValue(value) {
    this.setState({
      newItemText: value
    })
  }

  addNewItem(newItem) {
    if (this.state.newItemText === '') {
      return
    }
    this.props.addNewItemAction(newItem)
  }

  render() {
    console.log(this.state.newItemText)
    return (
      <View style={styles.container}>
        <View style={styles.listItem}>
          <TextInput
            style={styles.listItemText}
            autoFocus={true}
            onChangeText={(value) => this.newItemValue(value)}
            maxLength={30}
            placeholder='Add...' />
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={() => this.addNewItem(this.state.newItemText)}>
          <Feather name='plus-circle' size={30} color='#2f95dc' />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = {
  addNewItemAction
}
export default connect(null, mapDispatchToProps)(AddNewItem)

