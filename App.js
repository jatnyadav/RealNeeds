import React, { Component } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import axios from 'axios';
import MainNavigator from './Navigators/MainNavigator';
export default class App extends Component {
  constructor(props) {
    super(props);
    Text.defaultProps = { allowFontScaling: false };
    this.state = {
    };
  }
  render() {
    return (
          <MainNavigator />
    );
  }
}