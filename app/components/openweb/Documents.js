import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

class Documents extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text> Docs </Text>
      </View>
    );
  }
}

const styles = {
  main: {
    flex: 1,
  }
}

export default Documents
