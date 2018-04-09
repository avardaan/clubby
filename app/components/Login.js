import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View style={styles.main}>

        <Text> CLUBBY </Text>

      </View>
    );
  }
}

const styles = {
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default Login;
