import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import DetailPageHeader from '../../components/detailPageComponents/DetailPageHeader/DetailPageHeader'
import YouTube from 'react-native-youtube'
import { connect } from 'react-redux'
import AddNewVideo from '../../components/detailPageComponents/AddNewVideo/AddNewVideo'
import styles from './styles'


class Detail extends Component {

  // вернуться на предидущую страницу
  backTap = () => {
    this.props.navigation.pop()
  }

  render() {
    const listItem = this.props.navigation.state.params.listItem
    const { stateInputAddVideo } = this.props
    return (
      <View style={styles.container}>
        <DetailPageHeader backTap={this.backTap} />
        {
          stateInputAddVideo ? <AddNewVideo listItemID={listItem.id} /> : null
        }
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>{listItem.name}</Text>
        </View>
        <FlatList
          style={{ flex: 1 }}
          data={listItem.videos}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            this.renderItem(item)
          )}
        />

      </View>
    );
  }

  renderItem = (item) => {
    if (item.youtubeId.length === 11) {
      return <View>
        <Text style={styles.titleVideo}>{item.name}</Text>
        <YouTube
          apiKey='AIzaSyDp3iZX2xW9Lb801LoJQj95Qz5iybOXVzU' // developer's id
          videoId={item.youtubeId}   // The YouTube video ID
          play={false}             // control playback of video with true/false
          fullscreen={false}       // control whether the video should play in fullscreen or inline
          loop={false}             // control whether the video should loop when ended

          // onReady={e => this.setState({ isReady: true })}
          // onChangeState={e => this.setState({ status: e.state })}
          // onChangeQuality={e => this.setState({ quality: e.quality })}
          // onError={e => this.setState({ error: e.error })}

          style={styles.videoContainer}
        />
      </View>
    }
    if (item.youtubeId.length === 34) {
      return <View>
        <Text style={styles.titleVideo}>{item.name}</Text>
        <YouTube
          apiKey='AIzaSyDp3iZX2xW9Lb801LoJQj95Qz5iybOXVzU' // developer's id
          playlistId={item.youtubeId}   // The YouTube video playlist ID
          play={false}             // control playback of video with true/false
          fullscreen={false}       // control whether the video should play in fullscreen or inline
          loop={false}          // control whether the video should loop when ended

          // onReady={e => this.setState({ isReady: true })}
          // onChangeState={e => this.setState({ status: e.state })}
          // onChangeQuality={e => this.setState({ quality: e.quality })}
          // onError={e => this.setState({ error: e.error })}

          style={styles.videoContainer}
        />
      </View>
    }
  }
}

const mapStateToProps = state => {
  return {
    stateInputAddVideo: state.stateInputAdd.inputAddVideoState
  }
}
const mapDispatchToProps = {
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)