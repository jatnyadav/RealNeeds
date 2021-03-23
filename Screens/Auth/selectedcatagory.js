import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';

export default class Catagory extends Component {
  constructor(props){
    super(props);
    this.state ={
    Name:'',
    Password:''
  }}
  render(){
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { this.props.navigation.navigate("Login");}}>
      <Image style={styles.ImageStyle1}
          source={require('../../assets/backarrow.png')} //Change your icon image here
                                />   
 </TouchableOpacity>
      <Text style={{fontSize:32,color:'white',fontWeight:'bold',textAlign:'left',marginTop:9,marginLeft:30,}}>Please select</Text>
      <Text style={{fontSize:20,color:'white',fontWeight:'400',textAlign:'left',marginLeft:30,marginBottom:10,marginTop:2}}>Register with</Text>
      <View style={styles.downview}>
               <View style={{flexDirection:'row'}}>
                 <TouchableOpacity onPress={() => { this.props.navigation.navigate("Signup");}}>
                 <View style={styles.SquareShapeView} >
                  <Image style={styles.ImageStyle}
                      source={require('../../assets/Senior.png')} //Change your icon image here
                                />
                   <Text style={{color:'#0B1088',alignSelf:'center',fontSize:18,marginTop:12.26}}>Senior</Text>
                   </View>
                   </TouchableOpacity >
                   <TouchableOpacity onPress={() => { this.props.navigation.navigate("Signup2");}}>
                   <View style={styles.SquareShapeView1} >
                 <Image style={styles.ImageStyle}
                      source={require('../../assets/friendsfamily.png')} //Change your icon image here
                                />
                   <Text style={{color:'#0B1088',alignSelf:'center',fontSize:18,marginTop:12.26}}>Friends n </Text>
                   <Text style={{color:'#0B1088',alignSelf:'center',fontSize:18}}>Family </Text>
                   </View>
                   </TouchableOpacity>
                   </View>
                   <TouchableOpacity style={{marginRight:30,marginLeft:30,height:48,backgroundColor:'#037ECF',borderRadius:8,marginTop:31,marginBottom:500}}>
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
  SquareShapeView: {
    width: 145,
    height: 142,
    backgroundColor: '#F5DDC1',
    marginTop:42,
    marginLeft:30,
    borderRadius:8
 
  },
  SquareShapeView1: {
    width: 145,
    height: 142,
    backgroundColor: '#F4F4FC',
    marginTop:42,
    marginLeft:30,
    borderRadius:8
 
  },
  downview:{
    backgroundColor:'#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  ImageStyle:{
    alignSelf:'center',
    marginTop:20
  },
  ImageStyle1:{
    height:20,
    width:20,
    marginTop:57,
    marginLeft:16
  },
});
