import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// navigation
import Router from './src/Router'
// import components
import Main from './src/components/Main'

export default class App extends Component {
  render() {
    return (
      <Router />
    );
  }
}
