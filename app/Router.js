import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
// import components
// auth
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
// main
import Main from './components/main/Main'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ backgroundColor:'white' }}>
      <Scene key="root" hideNavBar>

        <Scene key="Auth" swipeEnabled={false}>
          <Scene key="Login" component={Login} title="Login" />
          <Scene key="Signup" component={Signup} title="Signup" />
        </Scene>

        <Scene key="MainFlow" swipeEnabled={false}>
          <Scene key="Main" component={Main} title="Main" />
        </Scene>

      </Scene>
    </Router>
  )
}

export default RouterComponent
