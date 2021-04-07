import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import global from '../../utils/global'
import Icon from 'react-native-vector-icons/Feather';

export default class Catagory extends Component {
  constructor(props){
    super(props);
    this.state ={
    Name:'',
    Password:'',
    selectedcatagory:""
  }}
  render(){
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { this.props.navigation.navigate("Login");}}>
      <Icon name='arrow-left'size={30} style={{color:'white',
    marginTop:47,
    marginLeft:16}}/> 
 </TouchableOpacity>
      <Text style={{fontSize:32,color:'white',fontWeight:'bold',textAlign:'left',marginTop:9,marginLeft:30,}}>Please select</Text>
      <Text style={{fontSize:20,color:'white',fontWeight:'400',textAlign:'left',marginLeft:30,marginBottom:30,marginTop:2}}>Register with</Text>
         <View style={styles.downview}>
               <View style={{flexDirection:'row',marginTop:42,alignSelf:'center'}}>
               <TouchableOpacity onPress={() => { this.props.navigation.navigate("Signup")
                    this.setState({ selectedcatagory : "1" }) 
                              }}
                                                                      >
           <Image
             source={this.state.selectedcatagory=="1"?global.ASSETS.Activatesenior:global.ASSETS.InActivatesenior}
             style={styles.tinilogo1}
                   />

      </TouchableOpacity>
      <TouchableOpacity onPress={() => { this.props.navigation.navigate("Signup2")
           this.setState({ selectedcatagory : "0" }) 
                 }}
                         >
       <Image
        source={this.state.selectedcatagory=="0"?global.ASSETS.Activateff:global.ASSETS.InActivateff}
        style={styles.tinilogo2}
      />
     
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
  tinilogo1:{
    height:142,
    width:145
  },
  tinilogo2:{
    height:142,
    width:145,
    marginLeft:25
  }
});
