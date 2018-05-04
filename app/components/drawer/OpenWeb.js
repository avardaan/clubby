import React, { Component } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import { Button } from 'react-native-elements'
import { height, width, totalSize } from 'react-native-dimension'
import { Actions } from 'react-native-router-flux'



class OpenWeb extends Component {
  render() {
    return (
      <SafeAreaView style={styles.main}>

        <View style={styles.imageContainer}>
          <TouchableHighlight activeOpacity={90} onPress={this.props.onLogoPress}>
          <Image
            style={styles.image}
            source={require('../../../assets/openweb.png')}
            resizeMode='contain'
          />
          </TouchableHighlight>
        </View>

        <View style={styles.buttonContainer}>

        <Button
          title="Messages"
          buttonStyle={[styles.button, this.props.style]}
          textStyle={styles.text}
          onPress={() => Actions.replace('Messages')}
        />

        <Button
          title="Calendar"
          buttonStyle={[styles.button, this.props.style]}
          textStyle={styles.text}
          onPress={() => Actions.replace('Calendar')}
        />

        <Button
          title="Media"
          buttonStyle={[styles.button, this.props.style]}
          textStyle={styles.text}
          onPress={() => Actions.replace('Media')}
        />

        <Button
          title="Documents"
          buttonStyle={[styles.button, this.props.style]}
          textStyle={styles.text}
          onPress={() => Actions.replace('Documents')}
        />

        <Button
          title="Social"
          buttonStyle={[styles.button, this.props.style]}
          textStyle={styles.text}
          onPress={() => Actions.replace('Social')}
        />

        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageContainer: {
  },
  image: {
    width: width(70),
    height: height(25)
  },
  buttonContainer: {
    marginTop: height(7.5)
  },
  button: {
    backgroundColor: 'white',
    marginBottom: 15
  },
  text: {
    color:'#50a9dc',
    fontSize: width(7.5)
  }
})

export default OpenWeb
