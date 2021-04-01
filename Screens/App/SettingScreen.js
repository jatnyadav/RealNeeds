import { StatusBar } from 'expo-status-bar';
import React ,{Component}from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feedback from '../App/feedback'
import Icon from 'react-native-vector-icons/Feather';

export default class SettingScreen extends Component {
  constructor(props) {
		super(props);
		this.state = {
			phone: "",
			password: "",
			pressed: false,
			backgroundColor: '#037ECF',
			backgroundColor2: 'black',
		}
	}
  render(){
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',alignSelf:'flex-start',marginTop:10}}>
       <Image
          style={styles.tinyLogo}
          source={require('../../assets/profileimage.png')}
        />
        <Text style={{fontSize:20,fontWeight:'700',marginTop:25,marginLeft:10}}>John Smith</Text>
        </View>
       <TouchableOpacity  
       style={{flexDirection:'row',marginTop:30}}>
       <Icon name='user' size={24} style={{marginLeft:30}}/>
       <Text style={{marginLeft:20,fontSize:18}}>My Profile</Text>
       <Icon name='arrow-right' size={24} style={{textAlign:'right',marginLeft:180}}/>
       </TouchableOpacity>
       <TouchableOpacity style={{flexDirection:'row',marginTop:30,}}>
       <Icon name='bell' size={24} style={{marginLeft:30}}/>
       <Text style={{marginLeft:20,fontSize:18}}>Notifications</Text>
       <Image
          style={styles.tinyLogo1}
          source={require('../../assets/On.jpg')}
        />
       </TouchableOpacity>
       <TouchableOpacity style={{flexDirection:'row',marginTop:30,}}>
       <Icon name='alert-circle' size={24} style={{marginLeft:30}}/>
       <Text style={{marginLeft:20,fontSize:18}}>About Us</Text>
       <Icon name='arrow-right' size={24} style={{textAlign:'right',marginLeft:190}}/>
       </TouchableOpacity > 
       <TouchableOpacity onPress={() => { this.props.navigation.navigate("Feedback");}}
       style={{flexDirection:'row',marginTop:30,}}>
       <Icon name='star' size={24} style={{marginLeft:30}}/>
       <Text style={{marginLeft:20,fontSize:18}}>Feedback</Text>
       <Icon name='arrow-right' size={24} style={{textAlign:'right',marginLeft:185}}/>
       </TouchableOpacity>
       <TouchableOpacity style={{flexDirection:'row',marginTop:30,}}>
       <Icon name='clipboard' size={24} style={{marginLeft:30}}/>
       <Text style={{marginLeft:20,fontSize:18}}>Policies</Text>
       <Icon name='arrow-right' size={24} style={{textAlign:'right',marginLeft:200}}/>
       </TouchableOpacity>
       <TouchableOpacity style={{flexDirection:'row',marginTop:30,}}>
       <Icon name='help-circle' size={24} style={{marginLeft:30}}/>
       <Text style={{marginLeft:20,fontSize:18}}>FAq</Text>
       <Icon name='arrow-right' size={24} style={{textAlign:'right',marginLeft:233}}/>
       </TouchableOpacity>
       <TouchableOpacity style={{flexDirection:'row',marginTop:30,}}>
       <Icon name='map-pin' size={24} style={{marginLeft:30}}/>
       <Text style={{marginLeft:20,fontSize:18}}>Contact Us</Text>
       <Icon name='arrow-right' size={24} style={{textAlign:'right',marginLeft:175}}/>
       </TouchableOpacity>
       <TouchableOpacity style={{flexDirection:'row',marginTop:30,}}>
       <Icon name='list' size={24} style={{marginLeft:30}}/>
       <Text style={{marginLeft:20,fontSize:18}}>Terms & Conditions</Text>
       <Icon name='arrow-right' size={24} style={{textAlign:'right',marginLeft:105}}/>
       </TouchableOpacity>
       <TouchableOpacity style={{flexDirection:'row',marginTop:30,}}>
       <Icon name='log-out' size={24} style={{marginLeft:30}}/>
       <Text style={{marginLeft:20,fontSize:18}}>Log out</Text>
       <Icon name='arrow-right' size={24} style={{textAlign:'right',marginLeft:205,marginBottom:100}}/>
       </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  tinyLogo:{
    width:62,
    height:62,
    alignSelf:'flex-start',
    marginLeft:16,
    marginTop:10
  },
  tinyLogo1:{
  width:51,
  height:31,
  marginLeft:140
  }
});
