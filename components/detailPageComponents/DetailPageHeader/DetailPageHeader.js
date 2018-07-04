import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

import { connect } from 'react-redux'
import { toogleInputAddNewVideo, cleanCompletedListAction } from '../../../actions'
import styles from './styles'


class AppHeader extends React.Component {
  toogleStateInputAddVideo() {
    this.props.toogleInputAddNewVideo()
  }

  render() {
    const { stateInputAddVideo } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text onPress={this.props.backTap}
            style={styles.titleText}
          >
            <Feather name='chevron-left' size={35} color="#ffffff" />
          </Text>
        </View>
        <View style={styles.addItemContainer}>
          <TouchableOpacity style={styles.addVideoText} onPress={() => this.toogleStateInputAddVideo()}>
            {
              stateInputAddVideo ?
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.text}>Add Video</Text>
                  <Feather name='chevron-up' size={30} color="#ffffff" />
                </View>
                :
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.text}>Add Video</Text>
                  <Feather name='plus' size={30} color="#ffffff" />
                </View>
            }
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    stateInputAddVideo: state.stateInputAdd.inputAddVideoState,
    showPlusAddNewItem: state.plusAddNewItem.addNewItemState,
    activePage: state.pagesNames.activePage
  }
}
const mapDispatchToProps = {
  toogleInputAddNewVideo,
  cleanCompletedListAction
}
export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)

