import React from "react";
import Axios from "axios";
import Loading from "../components/Loading"
import { Popup, Toast } from "popup-ui";
import { AsyncStorage } from "react-native";
import * as RootNavigation from "./RootNavigation";
import * as Linking from "expo-linking";
import global from "./global";
import { Icon } from "react-native-elements";

// Network listener

// base url
//Axios.defaults.baseURL = "https://realneed.i4dev.in/api/create-account";
// Axios.defaults.baseURL =
//   "http://192.168.0.147/project/celebrity_app/code/public/api/v1/";

// log request

Axios.interceptors.request.use((request) => {
 // console.log("Starting Request :", request.baseURL + request.url);
  console.log("Request Data :", request.data);
  console.log("Request Header :", request.headers.Authorization);
  return request;
});

// log response
Axios.interceptors.response.use((response) => {
  console.log("Response: \n", response.status, response.data);
  return response;
});

// store auth token in storage
function StoreToken(responseData) {
  // console.log(responseData);
  AsyncStorage.setItem(global.API_TOKEN, responseData, (err) => {
    if (err) {
      console.log("an error");
      throw err;
    }
    console.log("Token Stored");
    global.AUTHTOKEN = responseData;
  }).catch((err) => {
    console.log("error is: " + err);
  });
}

//  get user token
export async function ValidateUser() {
  try {
    let accessToken = await AsyncStorage.getItem(global.API_TOKEN).then(
      (value) => {
        if (value) {
          return value;
        }
      }
    );

    if (!accessToken) {
      console.log("no access token");
      console.log("navigate to Auth");
      Loading.hide();
      RootNavigation.navigate("Auth");
      // hide splash screen
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 200);
    } else {
      global.AUTHTOKEN = accessToken;

      let userData = await AsyncStorage.getItem(global.USER_DATA).then(
        (value) => {
          if (value) {
            return value;
          }
        }
      );

      global.USER = JSON.parse(userData);

      console.log("navigate to app");
      Loading.hide();

      RootNavigation.navigate("App");
      // hide splash screen
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 200);
    }
  } catch (error) {
    console.log("Something went wrong");
  }
}
//  get user token
export async function GetToken(data) {
  try {
    let accessToken = await AsyncStorage.getItem(global.API_TOKEN).then(
      (value) => {
        if (value) {
          return value;
        }
      }
    );

    if (!accessToken) {
      console.log("no access token");
      console.log("navigate to Auth");
      Loading.hide();
      RootNavigation.navigate("Auth");
    } else {
      global.AUTHTOKEN = accessToken;

      // store user data
      AsyncStorage.setItem(global.USER_DATA, JSON.stringify(data), (err) => {
        if (err) {
          console.log("an error");
          throw err;
        }
        console.log("User Data Stored");
      }).catch((err) => {
        console.log("error is: " + err);
      });
      let userData = await AsyncStorage.getItem(global.USER_DATA).then(
        (value) => {
          if (value) {
            return value;
          }
        }
      );

      global.USER = JSON.parse(userData);

      console.log("navigate to app");
      Loading.hide();

      RootNavigation.navigate("App");
    }
  } catch (error) {
    console.log("Something went wrong");
  }
}

//  store user data in storage
export async function StoreUserData(data) {
  try {
    // store user data
    AsyncStorage.setItem(global.USER_DATA, JSON.stringify(data), (err) => {
      if (err) {
        console.log("an error");
        throw err;
      }
      console.log("User Data Stored");
    }).catch((err) => {
      console.log("error is: " + err);
    });
    let userData = await AsyncStorage.getItem(global.USER_DATA).then(
      (value) => {
        if (value) {
          return value;
        }
      }
    );

    global.USER = JSON.parse(userData);
  } catch (error) {
    console.log("Something went wrong");
  }
}
//send otp api
export async function Signup(d) {
  Loading.show();
  Axios({
    method: "post",
    url: "https://realneed.i4dev.in/api/sendotp",
    data: {
      phone: d.phone,
      email: d.email,
    },
    validateStatus: () => {
      return true; // I'm always returning true, you may want to do it depending on the status received
    },
  }).then(
    function (response) {
      if (response.data.code == 200) {
        Loading.hide();
        Popup.show({
          type: "Success",
          title: "Congratulations 🎉🎉",
          button: true,
          textBody: response.data.message,
          buttonText: "Welcome",
          callback: () => {
            Popup.hide();
            StoreUserData(response.data.data);

            RootNavigation.navigate("Verification",{
              name:this.state.name,
              age:this.state.age,
              email:this.state.email,
              phone:this.state.phone,
              hkrid:this.state.unique_id,
              password:this.state.password,
              confirm_password:this.state.confirm_password
            });
          },
        });
      } else {
        Loading.hide();
        Popup.show({
          type: "Danger",
          title: global.CONSTANT.APPNAME + " Alert❗",
          button: true,
          textBody: response.data.error_message,
          buttontext: "Ok",
          callback: () => Popup.hide(),
        });
      }
    }.bind(this)
  );
}