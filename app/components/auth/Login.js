import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged } from '../../actions'

class Login extends Component {

  render() {
    return (
      <View style={styles.main}>

        <TextInput
          style={styles.topTextInput}
          value={this.props.email}
          onChangeText={(text) => this.props.emailChanged(text)}
          autoCorrect={false}
          autoCapitalize={'none'}
          placeholder={'Email Address'}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
        />

        <TextInput
          style={styles.bottomTextInput}
          value={this.props.password}
          onChangeText={(text) => this.props.passwordChanged(text)}
          autoCorrect={false}
          autoCapitalize={'none'}
          placeholder={'Password'}
          underlineColorAndroid = 'rgba(0, 0, 0, 0)'
        />

      </View>
    );
  }
}

const styles = {
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTextInput: {
    height: height(5.5),
    width: width(80),
    borderColor: 'black',
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    textAlign:'center',
  },
  bottomTextInput: {
    height: height(5.5),
    width: width(80),
    borderColor: 'black',
    borderWidth: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    textAlign:'center',
  },
}

const mapStateToProps = (state) => {
  // returned object gets sent to props of this Component
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(Login)
