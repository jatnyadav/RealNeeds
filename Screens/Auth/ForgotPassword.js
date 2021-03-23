import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { TextInput } from 'react-native'
import Axios from 'axios';
import global from '../../utils/global'
import { StyleSheet, Text, TouchableOpacity, View ,Image,Alert} from 'react-native';

import { Input } from 'react-native-elements';

export default class ForgotPassword extends Component {
  constructor(props){
    super(props);
    this.state ={
      email:''
    

  }}
  ResetPassword(){
    Axios({
      method: "post",
      url: "https://realneed.i4dev.in/api/resetpassword",
      data: {
        email: this.state.email,
      },
      validateStatus: () => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      },
    }).then((res)=>{
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@Result",res)
      this.props.navigation.navigate("Verification")
    }).catch((err) => {
      console.log("Error", err);
      console.log("Error Response", err.response);
      Alert.alert("Information", "Error Occured");
    })
  }
    

    handleValidate() { 
       if (this.state.email =="") {
        Alert.alert(global.CONSTANT.APPNAME, "Please enter e-mail address ");
      } else if (
        !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ) {
        Alert.alert(global.CONSTANT.APPNAME, "Please enter  valid e-mail address ");
      }
        else {
          this.ResetPassword()
        }
    }
  render(){
  return (
    <View style={styles.container}>
     <TouchableOpacity onPress={() => { this.props.navigation.navigate("Login");}}>
      <Image style={styles.ImageStyle}
          source={require('../../assets/backarrow.png')} //Change your icon image here
                                />   
 </TouchableOpacity>
      <Text style={{fontSize:32,color:'white',fontWeight:'bold',textAlign:'left',marginTop:9,marginLeft:30,}}>Forgot Password</Text>
      <Text style={{fontSize:20,color:'white',fontWeight:'400',textAlign:'left',marginLeft:30,marginBottom:10,marginTop:2}}>Enter your registerd Email id</Text>
      <View style={styles.downview}>
      <View style={styles.SectionStyle}>
        <Image style={styles.ImageStyle2}
        source={require('../../assets/Email.png')} //Change your icon image here
            />
          <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC'}}
              placeholder="Email Id"
              underlineColorAndroid="transparent"
              keyboardType ="email-address"
              onChangeText={(v) => this.setState({ email: v })}
              value={this.state.email}
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
