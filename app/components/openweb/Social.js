import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native';

class Social extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text> Social </Text>
      </View>
    );
  }
}

const styles = {
  main: {
    flex: 1
  }
}

export default Social;
