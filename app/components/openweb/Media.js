import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import CameraRollPicker from 'react-native-camera-roll-picker'

class Media extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text> Media </Text>
      </View>
    );
  }
}

const styles = {
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

}

export default Media
