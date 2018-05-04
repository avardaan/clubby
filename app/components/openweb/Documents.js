import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

class Documents extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={{ fontSize:20 }}> Google Drive Integration coming soon! </Text>
      </View>
    );
  }
}

const styles = {
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Documents
