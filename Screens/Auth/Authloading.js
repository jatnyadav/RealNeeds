import React, { Component } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import global from "../../utils/global";

export default class AuthLoading extends Component {
  constructor(props) {
    super(props);
     // this.getToken();
    this.state = { accessToken: "", user: "" };
  }

  render() {
    return (
      <ImageBackground
        source={global.ASSETS.SPLASH}
        style={styles.container}
        imageStyle={styles.bgImage}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
  },
  bgImage: {
    resizeMode: "cover",
  },
});
