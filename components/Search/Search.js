import React from 'react';
import {
  View,
  TextInput
} from 'react-native';
import { connect } from 'react-redux'
import { searchToDoItem } from '../../actions'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import styles from './styles'


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  componentWillUpdate(nextProps, nextState) {
    this.props.searchToDoItem(nextState.text)
  }
  handleChange(searchText) {
    this.setState({
      text: searchText
    })
  }



  render() {

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(value) => this.handleChange(value)}
            style={styles.input}
            placeholder='Search'
            placeholderTextColor='grey'
            maxLength={20}
          >
          </TextInput>
        </View>
        <View style={styles.iconContainer}>
          <EvilIcons name='search' size={27} color='grey' />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = {
  searchToDoItem
}

export default connect(null, mapDispatchToProps)(Search)

