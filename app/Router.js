import React, { Component } from 'react'
import { width } from 'react-native-dimension'
import { Scene, Router, Actions, Drawer } from 'react-native-router-flux'
// import components
// auth
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
// main
import DrawerNav from './components/drawer/DrawerNav'
import Main from './components/main/Main'
// menu
import Messages from './components/openweb/Messages'
import Calendar from './components/openweb/Calendar'
import Media from './components/openweb/Media'
import Documents from './components/openweb/Documents'
import Social from './components/openweb/Social'


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ backgroundColor:'white' }}>
      <Scene key="root" hideNavBar>

        <Scene key="Auth" swipeEnabled={false}>
          <Scene key="Login" component={Login} title="Login" />
          <Scene key="Signup" component={Signup} title="Signup" />
        </Scene>

        <Drawer key="MainFlow" contentComponent={DrawerNav} drawerImage={require('../assets/hamburger_icon.png')} drawerWidth={width(75)}>
          <Scene key="Messages" component={Messages} title="Messages" />
          <Scene key="Calendar" component={Calendar} title="Calendar" />
          <Scene key="Media" component={Media} title="Media" />
          <Scene key="Documents" component={Documents} title="Documents" />
          <Scene key="Social" component={Social} title="Social" />
        </Drawer>

      </Scene>
    </Router>
  )
}

export default RouterComponent
