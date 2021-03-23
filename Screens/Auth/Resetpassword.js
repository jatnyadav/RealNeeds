import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View ,Image,Alert} from 'react-native';
import { Input } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <Image style={styles.ImageStyle}
          source={require('../../assets/backarrow.png')} //Change your icon image here
                                />
      </TouchableOpacity>

      <Text style={{fontSize:32,color:'white',fontWeight:'bold',textAlign:'left',marginLeft:30,height:36,width:247,marginTop:27}}>Reset Password</Text>
      <Text style={{fontSize:20,color:'white',fontWeight:'400',textAlign:'left',marginLeft:30,marginBottom:20,marginTop:5,marginRight:66}}>Please enter new password</Text>
      <View style={styles.downview}>
      <View style={styles.SectionStyle}>
        <Image style={styles.ImageStyle2}
        source={require('../../assets/password.png')} //Change your icon image here
            />
          <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC'}}
              placeholder="Enter Password"
              underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.SectionStyle1}>
        <Image style={styles.ImageStyle2}
        source={require('../../assets/password.png')} //Change your icon image here
            />
          <TextInput
              style={{flex:1,backgroundColor:'#F4F4FC'}}
              placeholder="Confirm Password"
              underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity onPress={() => Alert.alert(
           'Password Changed',
         'Your password has been \n      updated',
    
    [
           {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]
)}
         style={{marginRight:30,marginLeft:30,height:48,backgroundColor:'#00359F',borderRadius:8,marginTop:20}}>
       <Text style={{color:'white',textAlign:'center',marginTop:12,fontSize:16,fontWeight:'500'}}>NEXT</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00359F',
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
