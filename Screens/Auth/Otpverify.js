import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { TextInput } from 'react-native';
import Axios from 'axios';
import {CreateAccount} from "../../utils/api";
import Icon from 'react-native-vector-icons/Feather';
import Loading from '../../components/Loading';
import { Toast,Popup } from 'popup-ui';
import Signup from '../Auth/Signup2senior'
import global from '../../utils/global'
import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native';
import { Input } from 'react-native-elements';
import { Alert } from 'react-native';


export default class Otpverify extends Component {
  constructor(props) {
		super(props);
		this.state = { t1: '', t2: '', t3: '', t4: ''};
  }
  componentDidMount(){
    this.refs.t1ref.focus()
  }
  CreateAccont() {
    console.log(this.state.t1)
    
    const edtOtp = this.state.t1 + this.state.t2 + this.state.t3 + this.state.t4;
    console.log(this.props.route.params.otp)
    if(this.props.route.params.otp == edtOtp){
      Loading.show();
      Axios({
        method: "post",
        url: "https://realneed.i4dev.in/api/create-account",
        data: {
          name: this.props.route.params.name,
          age: this.props.route.params.age,
          email:this.props.route.params.email,
          phone:this.props.route.params.phone,
          hkrid:this.props.route.params.hkrid,
          password:this.props.route.params.password,
          confirm_password:this.props.route.params.confirm_password,
          
        },
        validateStatus: () => {
          return true; // I'm always returning true, you may want to do it depending on the status received
        },
      }).then((response) => {
          if (response.data.status == true) {
            Loading.hide();
            Popup.show({
              type: "Success",
              title: " Congratulation account created successfully",
              button: true,
              textBody: response.data.message,
              buttonText: true,
              buttonText: "Login",
              callback: () => {
                Popup.hide();
                this.props.navigation.navigate("App");
              },
            });
          }
           else {
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
    });
    }
    else{
      Alert.alert('otp not verify')
   return false
    }
  }
  //Resend otp api here
  ResendOtp() {
    Loading.show();
    console.log("data isssssssssssssssssssssssssssss")
    Axios({
      method: "post",
      url: "https://realneed.i4dev.in/api/sendotp",
      data: {
        phone: this.props.route.params.phone,
        email: this.props.route.params.email,
      },
      validateStatus: () => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      },
    }).then(
      function (response) {
        if (response.data.status == true) {
          Loading.hide();
          const otp = response.data.data.otp
          console.log(response.data.data.otp)
          // Popup.show({
          //   type: "Success",
          //   title: "Congratulations 🎉🎉",
          //   button: true,
          //   textBody: response.data.message,
          //   buttonText: "Welcome",
          //   callback: () => {
          //     Popup.hide();
              this.props.navigation.navigate("Verification");
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
  //main contant app
  render(){
  
    const{name,age,email,password,confirm_password,hkrid,phone,otp} = this.props.route.params
    return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { this.props.navigation.navigate("Login");}}>
      <Icon name='arrow-left'size={30} style={{color:'white',
    marginTop:57,
    marginLeft:16}}/>  
 </TouchableOpacity>
      <Text style={{fontSize:32,color:'white',fontWeight:'bold',textAlign:'left',marginLeft:30,marginTop:10}}>Verification</Text>
      <Text style={{fontSize:20,color:'white',fontWeight:'400',textAlign:'left',marginLeft:30,marginTop:2,marginBottom:30}}>{"Please enter the verification  \ncode sent to your Email id"}</Text>
 
      <View style={styles.downview}>
        <View style={{flexDirection:'row',alignItems:'center',textAlign:'center'}}>
      <TextInput style={{marginTop:36,height:52,width:65,marginLeft:30,backgroundColor:'#F4F4FC',textAlign:'center',borderRadius:8}}
        ref={'t1ref'}
        keyboardType='number-pad'
         maxLength={1}
         returnKeyType={'next'}
         autoFocus = {true}
         onChangeText={(v) => {this.setState({ t1: v })
         if(v != ''){
           this.refs.t2ref.focus()
         }
         }}
         value={this.state.t1}
      />
      <TextInput style={{marginTop:36,height:52,width:65,marginLeft:18,backgroundColor:'#F4F4FC',textAlign:'center',borderRadius:8}}
       ref={'t2ref'}
        keyboardType='number-pad'
        maxLength={1}
        onChangeText={(v) => {this.setState({ t2: v })
        if(v != ''){
          this.refs.t2ref.focus()
        }
        }}
         value={this.state.t2}
        />
      <TextInput style={{marginTop:36,height:52,width:65,marginLeft:18,backgroundColor:'#F4F4FC',textAlign:'center',borderRadius:8}}
       ref={'t3ref'}
       keyboardType='number-pad'
        maxLength={1}
        onChangeText={(v) => {this.setState({ t3: v })
        if(v != ''){
          this.refs.t2ref.focus()
        }
        }}
         value={this.state.t3}
        
        />
        
      <TextInput style={{marginTop:36,height:52,width:65,marginLeft:18,backgroundColor:'#F4F4FC',textAlign:'center',borderRadius:8}}
       ref={'t4ref'}
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
          <Text style={{fontSize:16,marginTop:27,}} >Didn't receive code?</Text>
          <TouchableOpacity onPress={()=>{this.ResendOtp()}} >
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
