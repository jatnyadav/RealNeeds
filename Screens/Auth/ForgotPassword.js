import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import Axios from 'axios';
import global from '../../utils/global'
import Loading from '../../components/Loading'

import {Popup} from 'popup-ui'
import { StyleSheet, Text, TouchableOpacity, View ,Image,Alert} from 'react-native';
export default class ForgotPassword extends Component {
  constructor(props){
    super(props);
    this.state ={
      email:'',
      backgroundColor:'black'
  }}
  ResetPassword() {
    Loading.show();
    console.log("data isssssssssssssssssssssssssssss")
    Axios({
      method: "post",
      url: "https://realneed.i4dev.in/api/resetpassword",
      data: {
        email: this.state.email,
      },
      validateStatus: () => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      },
    }).then(
      function (response) {
        if (response.data.status == true) {
          const otp = response.data.data.otp
          console.log('otp isssssssssssssssssssssssssssssssssssssssss',otp)
          Loading.hide();
          // Popup.show({
          //   type: "Success",
          //   title: "Congratulations 🎉🎉",
          //   button: true,
          //   textBody: response.data.message,
          //   buttonText: "Welcome",
          //   callback: () => {
          //     Popup.hide();
              this.props.navigation.navigate("otpverifyforgotpassword",{
                email:this.state.email,
                otp
          });
        } else {
          Loading.hide();
          Popup.show({
            type: "Danger",
            title: global.CONSTANT.APPNAME + " Alert❗",
            button: true,
            textBody: response.data.message,  
            buttontext: "Ok",
            callback: () => Popup.hide(),
          });
        }
      }.bind(this)
    );
  }
    

    handleValidate() { 
       if (this.state.email =="") {
        Alert.alert(global.CONSTANT.APPNAME, "Please enter e-mail address ");
      } else if (
        !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ) {
        Alert.alert(global.CONSTANT.APPNAME, "Please enter valid e-mail address ");
      }
        else {
          this.ResetPassword()
        }
    }
  render(){
  return (
    <View style={styles.container}>
     <TouchableOpacity onPress={() => { this.props.navigation.navigate("Login");}}
     >
    <Icon name='arrow-left'size={30} style={{color:'white',
    marginTop:47,
    marginLeft:16}}/> 
 </TouchableOpacity>
      <Text style={{fontSize:32,color:'white',fontWeight:'bold',textAlign:'left',marginTop:9,marginLeft:30,}}>Forgot Password</Text>
      <Text style={{fontSize:20,color:'white',fontWeight:'400',textAlign:'left',marginLeft:30,marginBottom:30}}>Enter your registerd Email id</Text>
      <View style={styles.downview}>
      <View style={styles.SectionStyle}>
      <Icon name={'mail'}  size={24} style={{marginLeft:8}}
      color ={this.state.backgroundColor}
      />
          <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC',marginLeft:8}}
              placeholder="Email Id"
              underlineColorAndroid="transparent"
              color={this.state.backgroundColor}
							selectionColor='#0B1088'
              keyboardType ="email-address"
              onChangeText={(v) => this.setState({ email: v })}
              value={this.state.email}
              onFocus={() => {
								this.setState({ backgroundColor: '#0B1088' });
							}}
							onBlur={() => {
								this.setState({ backgroundColor: '#8FAAB2' });
							}}
          />
        </View>
        <TouchableOpacity  onPress={()=> this.handleValidate()}
        style={{marginRight:30,marginLeft:30,height:48,backgroundColor:'#037ECF',borderRadius:8,marginTop:20}}>
       <Text style={{color:'white',textAlign:'center',marginTop:12,fontSize:16,fontWeight:'500'}}>SEND</Text>
        </TouchableOpacity>
        <Text style={{alignSelf:'center',fontSize:16,marginTop:27,marginBottom:600}}>{"An OTP will be sent to your \n       registered Email id"}</Text>
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
  ImageStyle:{
    height:20,
    width:20,
    marginTop:57,
    marginLeft:16
  },
  downview:{
    backgroundColor:'#FFF',
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  ImageStyle2: {
    margin: 5,
    height: 22,
    width: 22,
    resizeMode : 'stretch',
    alignItems: 'center'
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
    marginTop:36
},
});
