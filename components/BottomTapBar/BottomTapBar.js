import React, { Component } from 'react';
import {
  Text,               // Renders text
  TouchableOpacity,   // Pressable container
  View                // Container component
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles'




// NOTE taken from https://rationalappdev.com/universal-tab-bar-in-react-native/

export default class BottomTabBar extends Component {

  // Initialize State
  state = {
    // First tab is active by default
    activeTab: 0
  }

  // Pull children out of props passed from App component
  render({ children } = this.props) {
    return (
      <View style={styles.container}>
        {/* Content */}
        <View style={styles.contentContainer}>
          {children[this.state.activeTab]}
        </View>
        {/* TopTabBar row */}
        <View style={styles.tabsContainer}>
          {/* Pull props out of children, and pull title out of props */}
          {children.map(({ props: { icon, title, count } }, index) =>
            <TouchableOpacity
              style={styles.tabContainer}
              // Change active tab
              onPress={() => this.setState({ activeTab: index })}
              // Required key prop for components generated returned by map iterator
              key={index}
            >
              <View style={styles.tabText}>
                <FontAwesome name={icon} size={35} style={[
                  // Default style for every tab
                  styles.active,
                  // Merge default style with styles.tabContainerActive for active tab
                  index === this.state.activeTab ? styles.inactive : []
                ]} />
                {
                  count ?
                    <View style={{ backgroundColor: 'red', height: 13, width: 13, borderRadius: 50, alignItems: 'center', justifyContent: 'center', marginTop: -10, marginRight: -25 }}>
                      <Text style={{ color: '#ffffff', fontSize: 10, fontWeight: '900' }}>{count}</Text>
                    </View>
                    :
                    null
                }
                <Text style={[
                  // Default style for every tab
                  styles.active,
                  styles.tapBarText,
                  // Merge default style with styles.tabContainerActive for active tab
                  index === this.state.activeTab ? styles.inactive : []
                ]}>{title}</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

