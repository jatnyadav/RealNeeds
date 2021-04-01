import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { TextInput } from 'react-native';
import Axios from 'axios';
import Loading from '../../components/Loading'
import { Toast,Popup } from 'popup-ui';
import Signup from '../Auth/Signup2senior'
import {  Icon } from "react-native-elements";
import global from '../../utils/global'
import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native';
import { Input } from 'react-native-elements';
import { Alert } from 'react-native';
export default class otpverifyforgotpassword extends Component {
  constructor(props) {
		super(props);
		this.state = { t1: '', t2: '', t3: '', t4: ''};
  }
  CreateAccont() {
    const edtOtp = this.state.t1 + this.state.t2 + this.state.t3 + this.state.t4;
    if(this.props.route.params.otp == edtOtp){
      this.props.navigation.navigate('ResetPassword',{
        email:this.props.route.params.email
      })
    }
    else{
      Toast.show({
        title: "Validation Alert❗",
        text: "Otp Not Match.",
        color: global.COLOR.WARNING,
        icon: <Icon name="close" />,
        timing: 2000,
      });
    } 
  }
  render(){
    const{email,otp} = this.props.route.params
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { this.props.navigation.navigate("Login");}}>
      <Image style={styles.ImageStyle}
          source={require('../../assets/backarrow.png')} //Change your icon image here
                                />   
 </TouchableOpacity>
      <Text style={{fontSize:32,color:'white',fontWeight:'bold',textAlign:'left',marginLeft:30,marginTop:10}}>Verification</Text>
      <Text style={{fontSize:20,color:'white',fontWeight:'400',textAlign:'left',marginLeft:30,marginTop:2,marginBottom:30}}>{"Please enter the verification  \ncode sent to your Email id"}</Text>
 
      <View style={styles.downview}>
        <View style={{flexDirection:'row'}}>
      <TextInput style={{marginTop:36,height:52,width:65,marginLeft:30,backgroundColor:'#F4F4FC',textAlign:'center',borderRadius:8}}
         keyboardType='number-pad'
         maxLength={1}
         returnKeyType={'next'}
         autoFocus = {true}
         onSubmitEditing={() => { this.secondTextInput.focus(); }}
         onChangeText={(v) => this.setState({ t1: v })}
         value={this.state.t1}
      />
      <TextInput style={{marginTop:36,height:52,width:65,marginLeft:18,backgroundColor:'#F4F4FC',textAlign:'center',borderRadius:8}}
        keyboardType='number-pad'
        maxLength={1}
        onChangeText={(v) => this.setState({ t2: v })}
         value={this.state.t2}
        />
      <TextInput style={{marginTop:36,height:52,width:65,marginLeft:18,backgroundColor:'#F4F4FC',textAlign:'center',borderRadius:8}}
        keyboardType='number-pad'
        maxLength={1}
        onChangeText={(v) => this.setState({ t3: v })}
         value={this.state.t3}
        
        />
        
      <TextInput style={{marginTop:36,height:52,width:65,marginLeft:18,backgroundColor:'#F4F4FC',textAlign:'center',borderRadius:8}}
        keyboardType='number-pad'
        maxLength={1}
        onChangeText={(v) => this.setState({ t4: v })}
         value={this.state.t4}
        />
      </View>
      <TouchableOpacity onPress={()=> this.CreateAccont()
    }
       style={{marginRight:40,marginLeft:30,height:48,backgroundColor:'#037ECF',borderRadius:8,marginTop:16}}>
       <Text style={{color:'white',textAlign:'center',marginTop:12,fontSize:16,fontWeight:'500'}}>SEND</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row',alignSelf:'center',marginBottom:600}}>
          <Text style={{fontSize:16,marginTop:27,}} >Did't receive code?</Text>
          <TouchableOpacity>
          <Text style={{fontWeight:'bold',fontSize:16,marginTop:27,marginLeft:5,textDecorationLine:'underline'}}>Resend Now</Text>
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
  ImageStyle:{
    height:20,
    width:20,
    marginTop:47,
    marginLeft:16
  },
  downview:{
    backgroundColor:'#FFF',
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
});
