import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
} from 'react-native';
import { width, height, totalSize } from 'react-native-dimension'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../../actions'
import { Actions } from 'react-native-router-flux'

class Login extends Component {

  // to make testing faster
  componentWillMount() {
    this.props.loginUser('test@test.com', 'password')
  }

  onLoginPress = () => {
    const { email, password } = this.props
    this.props.loginUser(email, password)
  }

  render() {
    return (
      <View style={styles.main}>

        <View style={styles.logoContainer}>
          <Image style={styles.logoImage} source={require('../../../assets/clubby_logo.png')}/>
        </View>


        <View>
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
            secureTextEntry={true}
            autoCapitalize={'none'}
            placeholder={'Password'}
            underlineColorAndroid = 'rgba(0, 0, 0, 0)'
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title='Login'
            raised
            buttonStyle={styles.loginButton}
            onPress={this.onLoginPress}
          />

          <Button
            title="Don't Have An Account?"
            raised
            buttonStyle={styles.noAccountButton}
            onPress={() => Actions.replace('Signup')}
          />
        </View>

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
  logoImage: {
    width: width(90),
    height: height(10),
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
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButton: {
    backgroundColor:'blue',
    borderRadius:10,
    width:width(50)
  },
  noAccountButton: {
    backgroundColor:'green',
    borderRadius:10,
    width:width(60)
  },
}

const mapStateToProps = (state) => {
  // returned object gets sent to props of this Component
  return {
    email: state.auth.email,
    password: state.auth.password,
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Login)
