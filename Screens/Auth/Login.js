import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
//import {Signin} from '../../utils/api'
import global from '../../utils/global'
import Axios from 'axios'
import axios from 'axios';
import { StyleSheet, Text, View ,Image,TextInput, TouchableOpacity,Alert} from 'react-native';
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state ={
    phone: "",
    password:"",
  }}
  Logins(){
    Axios({
      method: "post",
      url: "https://realneed.i4dev.in/api/login",
      data: {
        phone:this.state.phone,
        password:this.state.password,
      },
      validateStatus: () => {
        return false; // I'm always returning true, you may want to do it depending on the status received
      },
    }).catch((err) => {
      console.log("Error", err);
      console.log("Error Response", err.response);
      Alert.alert("Information", "Error Occured");
    }).then((res)=>{
      console.log("Result", res);
      this.props.navigation.navigate("App")
    });
  }
    handleValidate = () => {
      if (this.state.phonenumber == "") {
        Alert.alert(global.CONSTANT.APPNAME, "Please ente phone number ");
      } else if (this.state.phone.length < 8) {
        Alert.alert(
          global.CONSTANT.APPNAME,
          "Phone number field should not be less than 8 numbers"
        );
      }
         else if (this.state.password == "") {
          Alert.alert(global.CONSTANT.APPNAME, "Please enter password");
        } else if (this.state.password.length < 4) {
          Alert.alert(
            global.CONSTANT.APPNAME,
            "Password field should not be less than 4 characters"
          );
        } else {
          this.Logins(this.state);
        }
      
    };
 
  render(){
  return (
    <View style={styles.container}>
      <Text style={{fontSize:32,color:'white',fontWeight:'bold',textAlign:'left',marginTop:80,marginLeft:30,}}>Welcome Back</Text>
      <Text style={{fontSize:20,color:'white',fontWeight:'400',textAlign:'left',marginLeft:30,marginBottom:10,marginTop:2}}>Login to get started</Text>
     <View style={styles.downview}>
     <View style={styles.SectionStyle}>
        <Image style={styles.ImageStyle}
        source={require("../../assets/feather-user.png")} //Change your icon image here
            />
      <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC'}}
              placeholder="PhoneNumber"
              underlineColorAndroid="transparent"
              autoCapitalize = 'none'
              keyboardType='phone-pad'
              onChangeText={(v) => this.setState({ phone: v})}
              value={this.state.phone}
            
          />
          </View>
          <View style={styles.SectionStyle1}>
          <Image style={styles.ImageStyle}
        source={require('../../assets/password.png')} //Change your icon image here
            />
      <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC'}}
              placeholder="Password"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              maxLength={4}
              keyboardType='numeric'
              onChangeText={(v) => this.setState({ password: v })}
              value={this.state.password}
              
          />
          </View>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate("ForgotPassword");}}>
          <Text style={{fontSize:14,color:'#1C0D57',height: 20,fontWeight:'400',alignSelf:'flex-end',marginRight:30}}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=> this.handleValidate()}
           style={{marginRight:30,marginLeft:30,height:48,backgroundColor:'#037ECF',borderRadius:8,marginTop:19}}>
            <Text style={{color:'white',textAlign:'center',marginTop:12,fontSize:16,fontWeight:'500'}}>Login</Text>
          </TouchableOpacity>

           <View style={{flexDirection:'row',alignSelf:'center',marginBottom:600}}>
          <Text style={{marginTop:27,fontSize:16,}}>No Account Yet?</Text>
          <TouchableOpacity  onPress={() => { this.props.navigation.navigate("Catagory");}}>
            <Text  style={{marginTop:27,marginLeft:5,fontSize:16,fontWeight:'bold',textDecorationLine:'underline',}}>Sign up here!</Text>
          </TouchableOpacity>
          </View>
     </View>
      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#037ECF',
  },
  downview:{
    backgroundColor:'#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4FC',
    height: 55,
    borderRadius: 5 ,
    margin: 5,
    marginRight:30,
    marginLeft:30,
    marginTop:42
},
ImageStyle: {
  margin: 5,
  height: 22,
  width: 22,
  resizeMode : 'stretch',
  alignItems: 'center'
},
SectionStyle1: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F4F4FC',
  height: 55,
  borderRadius: 5 ,
  margin: 5,
  marginRight:30,
  marginLeft:30,
  marginTop:10
},
});
