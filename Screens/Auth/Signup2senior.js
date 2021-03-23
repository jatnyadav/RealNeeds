import { StatusBar } from 'expo-status-bar';
import React, { useState,Component } from "react";
import Axios from 'axios';
import global from '../../utils/global'
//import {Signup,SendOtp} from '../../utils/api'
import {  Icon } from "react-native-elements";
import { StyleSheet, Text, View, ScrollView, TextInput, Button,Alert,CheckBox, Touchable, TouchableOpacity,Image} from 'react-native';
import axios from 'axios';
export default class Signup2 extends Component {
  constructor(props){
    super(props);
    this.state ={
  
    full_name: "",
    age:"",
    email: "",
    number: "",
    unique_id:"",
    password: "",
    confirm_password:"",
    signedIn: true,
  }}
  Sendotp(){
    Axios({
      method: "post",
      url: "https://realneed.i4dev.in/api/create-account",
      data: {
        name: this.state.full_name,
        age:this.state.age,
        email: this.state.email,
        phone: this.state.number,
        hkrid:this.state.unique_id,
        password:this.state.password,
        confirm_password:this.state.confirm_password,
      },
      validateStatus: () => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      },
    }).then((res)=>{
      console.log("Result",res)
      this.props.navigation.navigate("Login")
    }).catch((err) => {
      console.log("Error", err);
      console.log("Error Response", err.response);
      Alert.alert("the input email not right or not exist into database");
    })
    
  }
  onFocus() {
    this.setState({
        color: 'blue'
    })
  }

  
 
  handleValidate() {
    if (this.state.full_name == "") {
      Alert.alert(global.CONSTANT.APPNAME, "Please enter full name ");
    }else if (
      !(
        this.state.full_name.length <= 32
      )
    ) {
      Alert.alert(global.CONSTANT.APPNAME, "Full Name Length is too long");
    }
     else if (this.state.age == "") {
      Alert.alert(global.CONSTANT.APPNAME, "Please enter age ");
    }  else if (
      !(
        this.state.age.length == 2
      )
    ) {
      Alert.alert(global.CONSTANT.APPNAME, "May be you put wrong age");
    }
    else if (this.state.email == "") {
      Alert.alert(global.CONSTANT.APPNAME, "Please enter e-mail address ");
    } else if (
      !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      Alert.alert(global.CONSTANT.APPNAME, "Please enter  valid e-mail address ");
    } else if (this.state.number == "") {
      Alert.alert(global.CONSTANT.APPNAME, "Please enter phone no ");
    }else if (this.state.number.length < 8  && this.state.number.length > 11) {
      Alert.alert(global.CONSTANT.APPNAME, "Please enter  8 to 11 phone no ");}
    else if (this.state.unique_id == "") {
      Alert.alert(global.CONSTANT.APPNAME, "Please enter unique id  ");
    }else if (this.state.password == "") {
      Alert.alert(global.CONSTANT.APPNAME, "Please enter password ");
    } else if (
      !(
        this.state.password.length >= 4
      )
    ) {
      Alert.alert(global.CONSTANT.APPNAME, "Please enter valid password ");
    }else if (this.state.password != this.state.confirm_password) {
      Alert.alert(global.CONSTANT.APPNAME, "password not match ");
    }
     else {
      this.Sendotp();
    }
  }
  
  
  render(){
    //const [isSelected, setSelection] = useState(false);
  return (

    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <TouchableOpacity onPress={() => { this.props.navigation.navigate("Catagory");}}>
      <Image style={styles.ImageStyle1}
          source={require('../../assets/backarrow.png')} //Change your icon image here
                                />   
 </TouchableOpacity>
      <Text style={{fontSize:32,color:'white',fontWeight:'bold',textAlign:'left',marginTop:9,marginLeft:30,}}>Crate an account</Text>
      <Text style={{fontSize:20,color:'white',fontWeight:'400',textAlign:'left',marginLeft:30,marginBottom:10,marginTop:2}}>Sign up To get Started!</Text>
      
       <View style={styles.downview}>
         <View style={styles.SectionStyle}>
        <Image style={styles.ImageStyle}
        source={require('../../assets/feather-user.png')} //Change your icon image here
            />
      <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC'}}
              placeholder="Full Name"
              onFocus={ () => this.onFocus() }
              underlineColorAndroid="transparent"
              onChangeText={(v) => this.setState({ full_name: v })}
              value={this.state.full_name}
          />
         </View>
              <View style={styles.SectionStyle}>
                <Image style={styles.ImageStyle}
                source={require('../../assets/age.png')} //Change your icon image here
                    />
      <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC'}}
              placeholder="Age"
              underlineColorAndroid="transparent"
              keyboardType ={'number-pad'}
              onChangeText={(v) => this.setState({ age: v })}
              value={this.state.age}
          />
    </View>
    <View style={styles.SectionStyle}>
        <Image style={styles.ImageStyle}
        source={require('../../assets/Email.png')} //Change your icon image here
            />
      <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC'}}
              placeholder="Email Id"
              underlineColorAndroid="transparent"
              keyboardType='email-address'
              onChangeText={(v) => this.setState({ email: v })}
              value={this.state.email}
          />
    </View>
    <View style={styles.SectionStyle}>
        <Image style={styles.ImageStyle}
        source={require('../../assets/Phone.png')} //Change your icon image here
            />
      <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC'}}
              placeholder="Phone Number"
              underlineColorAndroid="transparent"
              maxLength={11}
              keyboardType='number-pad'
              onChangeText={(v) => this.setState({ number: v })}
              value={this.state.number}
          />
    </View>
    <View style={styles.SectionStyle}>
        <Image style={styles.ImageStyle}
        source={require('../../assets/id.png')} //Change your icon image here
            />
      <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC'}}
              placeholder="Unique id of senior person"
              underlineColorAndroid="transparent"
              onChangeText={(v) => this.setState({ unique_id: v })}
              value={this.state.unique_id}
          />
    </View>
    <View style={styles.SectionStyle}>
        <Image style={styles.ImageStyle}
        source={require('../../assets/password.png')} //Change your icon image here
            />
      <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC'}}
              placeholder="Enter Password"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              maxLength={4}
              keyboardType = 'numeric'
              onChangeText={(v) => this.setState({ password: v })}
              value={this.state.password}
          />
    </View>
    <Text style={{marginLeft:20,color:'#8FAAB2',fontSize:12}}>Use 4 Character Alphabet only</Text>
    <View style={styles.SectionStyle}>
        <Image style={styles.ImageStyle}
        source={require('../../assets/password.png')} //Change your icon image here
            />
      <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC'}}
              placeholder="Confirm Password"
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              maxLength={4}
              keyboardType='numeric'
              onChangeText={(v) => this.setState({ confirm_password: v })}
              value={this.state.confirm_password}
          />
    </View>
    
    <View style={styles.checkboxContainer}>
        <CheckBox
          //value={isSelected}
          //onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={{fontSize:16,}}>Check the box to agree to the</Text>
      </View>
      <TouchableOpacity onPress={() => Alert.alert(
          'Alert ',
          'App is Under Progress Coming soon',
      )}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:16}} >Terms&Conditions</Text>
      </TouchableOpacity>
      <View >
     <TouchableOpacity onPress={()=> this.handleValidate() }
     
    style={{marginRight:16,marginLeft:16,height:48,backgroundColor:'#037ECF',borderRadius:8}}>
       <Text style={{color:'white',textAlign:'center',marginTop:12,fontSize:16,fontWeight:'500'}}>Sign Up</Text>
     </TouchableOpacity>
     </View>
     <View style={{flexDirection:'row',alignSelf:'center',marginTop:10,marginBottom:100}}>
     <Text style={{fontSize:16}}>Already a Member?</Text>
     <TouchableOpacity onPress={() => { this.props.navigation.navigate("Login");}}>
       <Text style={{fontSize:16,fontWeight:'bold'}}>Log in Here</Text>
     </TouchableOpacity>
     </View>
     </View>
      <StatusBar style="auto" />
      </ScrollView>
    
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
    marginLeft:100,
    marginTop:10
  },
  checkbox: {
    alignSelf: "center",
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
  marginTop:57,
    marginLeft:16
},
scrollView: {
  
},

});
