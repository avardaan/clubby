import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
// config object
import config from './app/utilities/config'
// middleware
import firebase from 'firebase'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './app/reducers'
// navigation
import Router from './app/Router'

export default class App extends Component {

  componentWillMount() {
    // initialize firebase with appropriate config object
    firebase.initializeApp(config.firebase)
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
