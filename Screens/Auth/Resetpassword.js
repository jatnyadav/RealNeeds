import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { TextInput } from 'react-native';
import global from '../../utils/global';
import { Popup } from 'popup-ui';
import Icon from 'react-native-vector-icons/Feather';
import Loading from '../../components/Loading';
import Axios from 'axios'
import { StyleSheet, Text, TouchableOpacity, View ,Image,Alert} from 'react-native';
export default class ResetPassword extends Component {
  constructor(props){
    super(props);
    this.state ={
      email:this.props.route.params.email,
      password:'',
      confirm_password:'',
      backgroundColor:'black',
      backgroundColor1:'black'
  }}
    changepassword() {
    Loading.show();
    console.log("data isssssssssssssssssssssssssssss")
    Axios({
      method: "post",
      url: "https://realneed.i4dev.in/api/updatepassword",
      data: {
        email:this.props.route.params.email,
        password:this.state.password,
        confirm:this.state.confirm_password
      },
      validateStatus: () => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      },
    }).then(
      function (response) {
        if (response.data.status == true) {
          Loading.hide();
          Popup.show({
            type: "Success",
            title: "Congratulations 🎉🎉",
            button: true,
            textBody: response.data.message,
            buttonText: "Login",
            callback: () => {
              Popup.hide();
              this.props.navigation.navigate("Login")
            },
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
  handleValidate = () => {
    if (this.state.password == "") {
      Alert.alert(global.CONSTANT.APPNAME, "Please enter phone number ");
    }  else if (this.state.confirm_password == "") {
        Alert.alert(global.CONSTANT.APPNAME, "Please enter password");

      }else if (
        !(
          this.state.password.length == 4
        )
      ) { 
        Alert.alert('valid pass')
      }
      else {
        this.changepassword();
      }
  };
  render(){
    const{email,otp} = this.props.route.params
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { this.props.navigation.navigate("ForgotPassword");}}>
      <Icon name='arrow-left'size={30} style={{color:'white',
    marginTop:47,
    marginLeft:16}}/>
      </TouchableOpacity>

      <Text style={{fontSize:32,color:'white',fontWeight:'bold',textAlign:'left',marginLeft:30,marginTop:17}}>Reset Password</Text>
      <Text style={{fontSize:20,color:'white',fontWeight:'400',textAlign:'left',marginLeft:30,marginBottom:30,marginRight:66}}>Please enter new password</Text>
      <View style={styles.downview}>
      <View style={styles.SectionStyle}>
      <Icon name={'lock'}  size={24} style={{marginLeft:8}}
       color ={this.state.backgroundColor}
      />
          <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC',marginLeft:8}}
              placeholder="Enter Password"
              underlineColorAndroid="transparent"
              keyboardType='numeric'
              maxLength={4}
              color={this.state.backgroundColor}
							selectionColor='#0B1088'
              onChangeText={(v) => this.setState({ password: v })}
              value={this.state.password}
              onFocus={() => {
								this.setState({ backgroundColor: '#0B1088' });
							}}
							onBlur={() => {
								this.setState({ backgroundColor: '#8FAAB2' });
							}}
              
          />
        </View>
        <View style={styles.SectionStyle1}>
        <Icon name={'lock'}  size={24} style={{marginLeft:8}}
        color = {this.state.backgroundColor1}
        />
          <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC',marginLeft:8}}
              placeholder="Confirm Password"
              underlineColorAndroid="transparent"
              keyboardType='numeric'
              maxLength={4}
              color={this.state.backgroundColor1}
							selectionColor='#0B1088'
              onChangeText={(v) => this.setState({ confirm_password: v })}
              value={this.state.confirm_password}
              onFocus={() => {
								this.setState({ backgroundColor1: '#0B1088' });
							}}
							onBlur={() => {
								this.setState({ backgroundColor1: '#8FAAB2' });
							}}
          />
        </View>
        <TouchableOpacity onPress={()=> this.handleValidate()}
         style={{marginRight:30,marginLeft:30,height:48,backgroundColor:'#037ECF',borderRadius:8,marginTop:20,marginBottom:600}}>
       <Text style={{color:'white',textAlign:'center',marginTop:12,fontSize:16,fontWeight:'500'}}>NEXT</Text>
        </TouchableOpacity>
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
