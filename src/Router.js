import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
// import components
import Main from './components/Main'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Main" component={Main} title="Main" />
      </Scene>
    </Router>
  )
}

export default RouterComponent
