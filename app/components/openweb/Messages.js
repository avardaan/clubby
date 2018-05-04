import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native';

class Messages extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text> Messages </Text>
      </View>
    );
  }
}

const styles = {
  main: {
    flex: 1
  }
}

export default Messages
