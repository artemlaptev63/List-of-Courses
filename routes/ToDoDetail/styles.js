import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 25,
    backgroundColor: 'red'
  },
  leftSwipeItemText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700'
  },
  videoContainer: {
    alignSelf: 'stretch',
    height: 200,
    flex: 11
  },
  titleVideo: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
    fontSize: 20
  }
});