import { StatusBar } from 'expo-status-bar';
import React, { useState,Component } from "react";
import Axios from 'axios';
import global from '../../utils/global'
import Loading from '../../components/Loading'
//import {Signup} from '../../utils/api';
import Icon from 'react-native-vector-icons/Feather';
import { CheckBox } from 'react-native-elements'
import { StyleSheet, Text, View,TextInput,Alert,TouchableOpacity,ScrollView} from 'react-native';
import { Toast,Popup } from 'popup-ui';
export default class Signup2 extends Component {
  constructor(props){
    super(props);
    this.state ={
    full_name: "",
    age:"",
    email: "",
    phone: "",
    unique_id:"",
    password: "",
    confirm_password:"",
    signedIn: true,
    backgroundColor:'black',
    backgroundColor1:'black',
    backgroundColor2:'black',
    backgroundColor3:'black',
    backgroundColor4:'black',
    backgroundColor5:'black',
    backgroundColor6:'black',
    pressed: false,
    checked:false
  }}
    Signup() {
    Loading.show();
    console.log("data isssssssssssssssssssssssssssss")
    Axios({
      method: "post",
      url: "https://realneed.i4dev.in/api/sendotp",
      data: {
        phone: this.state.phone,
        email: this.state.email,
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
              this.props.navigation.navigate("Verification",{
                name:this.state.full_name,
                age:this.state.age,
                email:this.state.email,
                phone:this.state.phone,
                hkrid:this.state.unique_id,
                password:this.state.password,
                confirm_password:this.state.confirm_password,
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
    if (this.state.full_name == "") {
      Toast.show({
        title: "Alert❗",
        text: "Please enter your full name.",
        color: global.COLOR.WARNING,
        icon: <Icon name="close" />,
        timing: 2000,
      });
    } else if (
      !this.state.full_name.match(/^[a-zA-Z ]{2,32}$/)
    ) {
      Toast.show({
        title: "Validation Alert❗",
        text: "Please enter valid name.",
        color: global.COLOR.WARNING,
        icon: <Icon name="close" />,
        timing: 2000,
      });
    }
     else if (this.state.age == "") {
      Toast.show({
        title: "Alert❗",
        text: "Please enter your age.",
        color: global.COLOR.WARNING,
        icon: <Icon name="close" />,
        timing: 2000,
      });
    } else if (
      !(
        this.state.age.length == 2,
        this.state.age.match(/^[0]?[789]\d{9}$/)
      )
    ) {
      Toast.show({
        title: "Validation Alert❗",
        text: "Please enter valid age.",
        color: global.COLOR.WARNING,
        icon: <Icon name="close" />,
        timing: 2000,
      });
    }
    else if (this.state.email == "") {
      Toast.show({
        title: "Alert❗",
        text: "Please enter email address.",
        color: global.COLOR.WARNING,
        icon: <Icon name="close" />,
        timing: 2000,
      });
    } else if (
      !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      Toast.show({
        title: "Validation Alert❗",
        text: "Please enter valid email address.",
        color: global.COLOR.WARNING,
        icon: <Icon name="close" />,
        timing: 2000,
      });
    } else if (this.state.number == "") {
      Toast.show({
        title: "Alert❗",
        text: "Please enter mobile number.",
        color: global.COLOR.WARNING,
        icon: <Icon name="close" />,
        timing: 2000,
      });
    }
     else if (this.state.unique_id == "") {
      Toast.show({
        title: "Alert❗",
        text: "Please enter unique id.",
        color: global.COLOR.WARNING,
        icon: <Icon name="close" />,
        timing: 2000,
      });
    } else if (
      !(
        this.state.unique_id.length == 6
      )
    ) {
      Toast.show({
        title: "Validation Alert❗",
        text: "The hkrid must be atleast 6 charactar.",
        color: global.COLOR.WARNING,
        icon: <Icon name="close" />,
        timing: 2000,
      });
    }
     else if (this.state.password == "") {
      Toast.show({
        title: "Alert❗",
        text: "Please enter password.",
        color: global.COLOR.WARNING,
        icon: <Icon name="close" />,
        timing: 2000,
      });}
    else if (
      !(
        this.state.password.length == 4
      )
    ) {
      Toast.show({
        title: "Validation Alert❗",
        text: "Please enter valid password.",
        color: global.COLOR.WARNING,
        icon: <Icon name="close" />,
        timing: 2000,
      });
    } else if (this.state.confirm_password == "") {
      Toast.show({
        title: "Alert❗",
        text: "Please enter confirm password.",
        color: global.COLOR.WARNING,
        icon: <Icon name="close" />,
        timing: 2000,
      });}
    else if (
      !(
        this.state.password.length == 4
      )
    ) {
      Toast.show({
        title: "Validation Alert❗",
        text: "Please enter valid password.",
        color: global.COLOR.WARNING,
        icon: <Icon name="close" />,
        timing: 2000,
      });
    }else if (this.state.password != this.state.confirm_password) {
      Toast.show({
        title: "Validation Alert❗",
        text: "Password Not Match.",
        color: global.COLOR.WARNING,
        icon: <Icon name="close" />,
        timing: 2000,
      });
    }
     else {
       this.Signup();
    }
  }
  
  
  render(){
    //const [isSelected, setSelection] = useState(false);
  return (

    <View style={styles.container}>
       <ScrollView style={styles.scrollView}>
      <TouchableOpacity onPress={() => { this.props.navigation.navigate("Catagory");}}>
      <Icon name='arrow-left'size={30} style={{color:'white',
    marginTop:47,
    marginLeft:16}}/>   
 </TouchableOpacity>
      <Text style={{fontSize:32,color:'white',fontWeight:'bold',textAlign:'left',marginTop:4,marginLeft:30,}}>Create an account</Text>
      <Text style={{fontSize:20,color:'white',fontWeight:'400',textAlign:'left',marginLeft:30,marginBottom:30,marginTop:2}}>Sign up To get Started!</Text>
      
       <View style={styles.downview}>
         <View style={styles.SectionStyle2}>
         <Icon name={'user'}  size={24} style={{marginLeft:8}}
         color ={this.state.backgroundColor}
         />
      <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC',marginLeft:8}}
              color={this.state.backgroundColor}
							selectionColor='#0B1088'
              placeholder="Full Name"
              underlineColorAndroid="transparent"
              onChangeText={(v) => this.setState({ full_name: v })}
              value={this.state.full_name}
              onFocus={() => {
								this.setState({ backgroundColor: '#0B1088' });
							}}
							onBlur={() => {
								this.setState({ backgroundColor: '#8FAAB2' });
							}}
          />
         </View>
              <View style={styles.SectionStyle}>
              <Icon name={'calendar'}  size={24} style={{marginLeft:8}}
              color ={this.state.backgroundColor1}
              />
      <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC',marginLeft:8}}
              color={this.state.backgroundColor1}
							selectionColor='#0B1088'
              placeholder="Age"
              underlineColorAndroid="transparent"
              keyboardType ={'number-pad'}
              onChangeText={(v) => this.setState({ age: v })}
              value={this.state.age}
              onFocus={() => {
								this.setState({ backgroundColor1: '#0B1088' });
							}}
							onBlur={() => {
								this.setState({ backgroundColor1: '#8FAAB2' });
							}}
          />
       </View>
       <View style={styles.SectionStyle}>
       <Icon name={'mail'}  size={24} style={{marginLeft:8}}
      color ={this.state.backgroundColor2} 
       />
      <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC',marginLeft:8}}
              color={this.state.backgroundColor2}
							selectionColor='#0B1088'
              placeholder="Email id"
              underlineColorAndroid="transparent"
              keyboardType='email-address'
              onChangeText={(v) => this.setState({ email: v })}
              value={this.state.email}
              onFocus={() => {
								this.setState({ backgroundColor2: '#0B1088' });
							}}
							onBlur={() => {
								this.setState({ backgroundColor2: '#8FAAB2' });
							}}
          />
    </View>
    <View style={styles.SectionStyle}>
    <Icon name={'phone'}  size={24} style={{marginLeft:8}}
    color ={this.state.backgroundColor3}
    />
      <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC',marginLeft:8}}
              color={this.state.backgroundColor3}
							selectionColor='#0B1088'
              placeholder="Phone Number"
              underlineColorAndroid="transparent"
              maxLength={11}
              keyboardType='number-pad'
              onChangeText={(v) => this.setState({ phone: v })}
              value={this.state.phone}
              onFocus={() => {
								this.setState({ backgroundColor3: '#0B1088' });
							}}
							onBlur={() => {
								this.setState({ backgroundColor3: '#8FAAB2' });
							}}
          />
    </View>
    <View style={styles.SectionStyle}>
     <Icon name={'user'}  size={24} style={{marginLeft:8}}
     color ={this.state.backgroundColor4}
     />
      <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC',marginLeft:8}}
              color={this.state.backgroundColor4}
							selectionColor='#0B1088'
              placeholder="HKR provided id"
              underlineColorAndroid="transparent"
              onChangeText={(v) => this.setState({ unique_id: v })}
              value={this.state.unique_id}
              onFocus={() => {
								this.setState({ backgroundColor4: '#0B1088' });
							}}
							onBlur={() => {
								this.setState({ backgroundColor4: '#8FAAB2' });
							}}
          />
    </View>
    <View style={styles.SectionStyle}>
    <Icon name={'lock'}  size={24}  style={{marginLeft:8}}
    color ={this.state.backgroundColor5}
    />
      <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC',marginLeft:8}}
              color={this.state.backgroundColor5}
							selectionColor='#0B1088'
              placeholder="Enter Password"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              maxLength={4}
              keyboardType = 'numeric'
              onChangeText={(v) => this.setState({ password: v })}
              value={this.state.password}
              onFocus={() => {
								this.setState({ backgroundColor5: '#0B1088' });
							}}
							onBlur={() => {
								this.setState({ backgroundColor5: '#8FAAB2' });
							}}
          />
          </View>
        <Text style={{marginLeft:30,color:'#8FAAB2',fontSize:12}}>Use 4 Numbers only</Text>
         <View style={styles.SectionStyle}>
      <Icon name={'lock'}  size={24} style={{marginLeft:8}} 
        color ={this.state.backgroundColor6}
             />
      <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC',marginLeft:8}}
              color={this.state.backgroundColor6}
							selectionColor='#0B1088'
              placeholder="Confirm Password"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              maxLength={4}
              keyboardType='numeric'
              onChangeText={(v) => this.setState({ confirm_password: v })}
              value={this.state.confirm_password}
              onFocus={() => {
								this.setState({ backgroundColor6: '#0B1088' });
							}}
							onBlur={() => {
								this.setState({ backgroundColor6: '#8FAAB2' });
							}}
          />
    </View>
      <View >
     <TouchableOpacity onPress={()=> this.handleValidate() }
     
    style={{marginRight:16,marginLeft:16,height:48,backgroundColor:'#037ECF',borderRadius:8,marginTop:20}}>
       <Text style={{color:'white',textAlign:'center',marginTop:12,fontSize:16,fontWeight:'500'}}>Sign Up</Text>
     </TouchableOpacity>
     </View>
     <View style={{flexDirection:'row',alignSelf:'center',marginTop:10,marginBottom:100}}>
     <Text style={{fontSize:16}}>Already a Member?</Text>
     <TouchableOpacity onPress={() => { this.props.navigation.navigate("Login");}}>
       <Text style={{fontSize:16,fontWeight:'bold',marginLeft:5}}>Log in Here</Text>
     </TouchableOpacity>
     </View>
     </View>
     </ScrollView>
      <StatusBar style="auto" />
      </View>
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#037ECF',
  },
  scrollView: {
  },
  downview:{
    backgroundColor:'#FFF',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems:'center',
  },
  checkbox: {
    
  },
  ImageStyle:{
    width:22,
    height:22
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
},
ImageStyle: {
  margin: 5,
  height: 22,
  width: 22,
  resizeMode : 'stretch',
  alignItems: 'center'
},
ImageStyle1:{
  height:20,
  width:20,
  marginTop:47,
    marginLeft:16
},
SectionStyle2:{
  flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4FC',
    height: 55,
    borderRadius: 5 ,
    margin: 5,
    marginRight:30,
    marginLeft:30,
    marginTop:30

},
label: {
  fontSize:16
},


});
