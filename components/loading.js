import React, { Component } from "react";
import { Text, StyleSheet, View, Image,ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";
import global from "../utils/global";
let visible = false;
let v = [false];
export default class Loading extends Component {
  static loadingInstance;
  // static myComponentInstance
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      text: "",
    };
    Loading.loadingInstance = this;
  }
  static show() {
    this.loadingInstance._show();
  }
  _show() {
    this.setState({ visible: true });
  }
  static hide() {
    this.loadingInstance._hide();
  }

  _hide() {
    this.setState({ visible: false });
  }
  render() {
    return (
      <Overlay
        isVisible={this.state.visible}

      >
        <View style={{ backgroundColor: "transparent" }}>
        <ActivityIndicator
         size="large" color="#0000ff"/>
          <Text style={styles.loadingText}>Loading ...</Text>
        </View>
      </Overlay>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
   
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  loadingText: {
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
    marginVertical: 5,
    color: global.COLOR.PRIMARY_DARK,
  },
});
