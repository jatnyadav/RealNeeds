import React, { Component } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import { Root } from "popup-ui";
import Loading from "./components/Loading"
import MainNavigator from './Navigators/MainNavigator';
export default class App extends Component {
  constructor(props) {
    super(props);
    Text.defaultProps = { allowFontScaling: false };
    this.state = {
      loading:true,
    };
  }
  render() {
    return (
      <>
        <Root>
          <MainNavigator />
          <Loading />
        </Root>
      </>
    );
  }
}