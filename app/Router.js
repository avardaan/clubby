import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
// import components
import Login from './components/Login'

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">

        <Scene key="Login" component={Login} title="Login" />
        
      </Scene>
    </Router>
  )
}

export default RouterComponent
