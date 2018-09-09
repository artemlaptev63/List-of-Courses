import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import routeNames from "../routes/routes";

import Home from "../routes/Home";
import ToDoDetail from "../routes/ToDoDetail";

export const AppNavigator = createStackNavigator(
  {
    [routeNames.Home]: {
      screen: Home
    },
    [routeNames.ToDoDetail]: {
      screen: ToDoDetail
    }
  },
  {
    initialRouteName: routeNames.Home,
    navigationOptions: { header: null }
  }
);

class AppWithNavigationState extends Component {
  render() {
    return <AppNavigator />;
  }
}

export default AppWithNavigationState;
