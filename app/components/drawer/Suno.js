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

class Suno extends Component {
  render() {
    return (
      <SafeAreaView style={styles.main}>

        <View style={styles.imageContainer}>
          <TouchableHighlight activeOpacity={90} onPress={this.props.onLogoPress}>
          <Image
            style={styles.image}
            source={require('../../../assets/suno.jpg')}
            resizeMode='contain'
          />
          </TouchableHighlight>
        </View>

        <View style={styles.buttonContainer}>

        <Button
          title="Messages"
          buttonStyle={[styles.button, this.props.style]}
          textStyle={styles.text}
        />

        <Button
          title="Calendar"
          buttonStyle={[styles.button, this.props.style]}
          textStyle={styles.text}
        />

        <Button
          title="Media"
          buttonStyle={[styles.button, this.props.style]}
          textStyle={styles.text}
        />

        <Button
          title="Documents"
          buttonStyle={[styles.button, this.props.style]}
          textStyle={styles.text}
        />

        <Button
          title="Social"
          buttonStyle={[styles.button, this.props.style]}
          textStyle={styles.text}
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
    color:'#912019',
    fontSize: width(7.5)
  }
})

export default Suno
