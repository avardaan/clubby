import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// navigation
import Router from './app/Router'

export default class App extends Component {
  render() {
    return (
      <Router />
    );
  }
}
