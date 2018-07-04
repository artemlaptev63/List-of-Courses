import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AppWithNavigationState from './navigators';
import configureStore from './configureStore'

import { Provider } from 'react-redux';

const store = configureStore() // configure the store

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppWithNavigationState />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});