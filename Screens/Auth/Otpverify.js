import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { TextInput } from 'react-native';
import Axios from 'axios';
import {Signup} from "../../utils/api";
import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native';
import { Input } from 'react-native-elements';
import { Alert } from 'react-native';

export default class Otpverify extends Component {
  constructor(props) {
		super(props);
		this.state = { t1: '', t2: '', t3: '', t4: ''};
  }
  Otpverify(){
    Axios({
      method: "post",
      url: "https://realneed.i4dev.in/api/create-account",
      data: {
        email: this.state.email,
      },
      validateStatus: () => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      },
    }).then((data) => {
      console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@data", data);
      let t= parseInt(this.state.t1+this.state.t2+this.state.t3+this.state.t4)
      if(Response.data === t){
          this.props.navigation.navigate('Home')
           }
           else{
             Alert.alert('Otp Not Verify')
           }
      })
  }
  
  render(){
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { this.props.navigation.navigate("Login");}}>
      <Image style={styles.ImageStyle}
          source={require('../../assets/backarrow.png')} //Change your icon image here
                                />   
 </TouchableOpacity>
      <Text style={{fontSize:32,color:'white',fontWeight:'bold',textAlign:'left',marginLeft:30,}}>Verification</Text>
      <Text style={{fontSize:20,color:'white',fontWeight:'400',textAlign:'left',marginLeft:30,marginTop:2,marginBottom:10}}>{"Please enter the verification  \ncode sent to your Email id"}</Text>
 
      <View style={styles.downview}>
        <View style={{flexDirection:'row'}}>
      <TextInput style={{marginTop:36,height:52,width:65,marginLeft:30,backgroundColor:'#F4F4FC',textAlign:'center',borderRadius:8}}
         keyboardType='number-pad'
         maxLength={1}
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
      <TouchableOpacity onPress={()=> this.Otpverify()
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
