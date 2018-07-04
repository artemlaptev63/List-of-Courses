import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderColor: 'grey',
    paddingRight: 20
  },
  inputContainer: {
    flex: 1
  },
  iconContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  input: {
    height: 30,
    paddingLeft: 20,
    fontSize: 18,
    color: 'grey'
  }
});