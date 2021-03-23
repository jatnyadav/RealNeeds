import { StatusBar } from 'expo-status-bar';
import React, { useState,Component } from "react";
import global from '../../utils/global'
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
  
  componentDidMount = ()=>{
   axios.post('https://realneed.i4dev.in/api/create-account')
  .then((data)=> 
  console.log(data))}

  
  render(){
    //const [isSelected, setSelection] = useState(false);
  return (

    <View style={styles.container}>
      
      <TouchableOpacity onPress={() => { this.props.navigation.navigate("Catagory");}}>
      <Image style={styles.ImageStyle1}
          source={require('../../assets/backarrow.png')} //Change your icon image here
                                />   
 </TouchableOpacity>
      <Text style={{fontSize:32,color:'white',fontWeight:'bold',textAlign:'left',marginTop:9,marginLeft:30,}}>Crate an account</Text>
      <Text style={{fontSize:20,color:'white',fontWeight:'400',textAlign:'left',marginLeft:30,marginBottom:10,marginTop:2}}>Sign up To get Started!</Text>
      
       <View style={styles.downview}>
         <View style={styles.SectionStyle2}>
        <Image style={styles.ImageStyle2}
        source={require('../../assets/feather-user.png')} //Change your icon image here
            />
      <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC'}}
              placeholder="Full Name"
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
              maxLength={10}
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
              placeholder="HKR Provided Id"
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
              keyboardType='numeric'
              onChangeText={(v) => this.setState({ password: v })}
              value={this.state.password}
          />
    </View>
    <Text style={{marginLeft:30,color:'#8FAAB2',fontSize:12}}>Use 4 Character Alphabet only</Text>
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
        <Text style={{fontSize:16,marginTop:5}}>Check the box to agree to the</Text>
        </View>
      <TouchableOpacity onPress={() => Alert.alert(
          'Alert ',
          'App is Under Progress Coming soon',
      )}>
        <Text style={{fontWeight:'bold',fontSize:16,textDecorationLine:"underline",textAlign:"center",marginBottom:10}} >Terms & Conditions</Text>
      </TouchableOpacity>
     
      
      <View >
     <TouchableOpacity
    style={{marginRight:16,marginLeft:16,height:48,backgroundColor:'#037ECF',borderRadius:8}}>
       <Text style={{color:'white',textAlign:'center',marginTop:12,fontSize:16,fontWeight:'500'}}>Sign In</Text>
     </TouchableOpacity>
     </View>
     <View style={{flexDirection:'row',alignSelf:'center',marginTop:10,marginBottom:100}}>
     <Text style={{fontSize:16}}>Already a Member?</Text>
     <TouchableOpacity onPress={() => { this.props.navigation.navigate("Login");}}>
       <Text style={{fontSize:16,fontWeight:'bold',textDecorationLine:"underline"}}>Log in Here</Text>
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
  scrollView: {
  },
  downview:{
    backgroundColor:'#FFF',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginLeft:50,
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
SectionStyle2: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F4F4FC',
  height: 55,
  borderRadius: 5 ,
  margin: 5,
  marginRight:30,
  marginLeft:30,
  marginTop:15
},
ImageStyle2: {
margin: 5,
height: 22,
width: 22,
resizeMode : 'stretch',
alignItems: 'center'
},


});