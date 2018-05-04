import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  SafeAreaView,
} from 'react-native'
import { Button } from 'react-native-elements'
import { height, width, totalSize } from 'react-native-dimension'
import { Actions } from 'react-native-router-flux'

import OpenWeb from './OpenWeb'
import Suno from './Suno'

class DrawerNav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentScreen: 'openweb'
    }
  }

  //
  renderDrawer = () => {
    if (this.state.currentScreen === 'openweb') {
      return (
        <OpenWeb
          style={{ backgroundColor: 'white' }}
          onLogoPress={() => this.setState({ currentScreen: 'suno' })}
        />
      )
    }
    // else if state is suno
    else {
      return (
        <Suno
          onLogoPress={() => this.setState({ currentScreen: 'openweb' })}
        />
      )
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        {this.renderDrawer()}
        <Button
          buttonStyle={{ backgroundColor: 'white' }}
          textStyle={{ color:'black', fontSize: 20 }}
          title="Logout"
          onPress={() => Actions.replace('Auth')}
        />
      </SafeAreaView>
    );
  }
}

const styles = {
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}

export default DrawerNav;
