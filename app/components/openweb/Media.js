import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import CameraRollPicker from 'react-native-camera-roll-picker'

class Media extends Component {

  // CameraRollPicker callback
  getSelectedImages = (selectedImageArray, currentImage) => {

  }

  render() {
    return (
      <View style={styles.main}>
      <CameraRollPicker
        callback={this.getSelectedImages}
      />
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
