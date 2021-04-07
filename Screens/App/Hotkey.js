import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
  render() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',position:'absolute',bottom:0,marginBottom:50}}>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Calender')}}>
      <Image
          
          source={require('../../assets/Reminder.png')}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{marginLeft:20}}
          source={require('../../assets/Health.png')}
        />
        </TouchableOpacity>
         <TouchableOpacity>
        <Image
          style={{marginLeft:20}}
          source={require('../../assets/Food.png')}
        />
        </TouchableOpacity>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
