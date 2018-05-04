import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking
} from 'react-native'
import { width, height } from 'react-native-dimension'

class Social extends Component {
  render() {
    return (
      <View style={styles.main}>

        <Text style={styles.text}> Links: </Text>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/openwebbu')}>
          <Image
            source={require('../../../assets/facebook_logo.png')}
            style={styles.logo}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/openwebbu')}>
          <Image
            source={require('../../../assets/insta_logo.png')}
            style={styles.logo}
          />
        </TouchableOpacity>

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
  logo: {
    width: width(75),
    height: width(25),
    borderRadius: 8,
    marginVertical: 20
  },
  text: {
    fontSize: width(7.5)
  }
}

export default Social;
