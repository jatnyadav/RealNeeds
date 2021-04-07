import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      selectedStartDate: "",
      calendar_visible: false,
    };
  }
  onDateChange = (date) => {
    console.log(date);
    this.setState({
      selectedStartDate: date,
      calendar_visible: !this.state.calendar_visible,
    });
  };
  render(){
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
     return (
    <View style={styles.container}>
      <ScrollView>
      <View style={{flexDirection:'row',marginTop:40,}}>
      <Icon name='arrow-left' size={26} style={{marginLeft:10}}/>
      <Text style={{fontSize:20,fontWeight:'700',marginLeft:120}}>Add Plan</Text>
      </View>
      <TextInput
        style={{backgroundColor:'#F4F4FC',padding:12,marginLeft:30,marginRight:30,borderRadius:8,marginTop:30,fontSize:16}}
        placeholder="Title"
      />
      <TextInput
        style={{backgroundColor:'#F4F4FC',padding:12,marginLeft:30,marginRight:30,borderRadius:8,marginTop:15,fontSize:16}}
        placeholder="Note"
        
      />
      <View style={{flexDirection:'row',backgroundColor:'#F4F4FC',marginLeft:30,marginRight:30,borderRadius:8,marginTop:15,fontSize:16}}>
      <TextInput 
        style={{fontSize:16,padding:10}}
        placeholder="Date and Time"
        value={this.state.selectedStartDate}
      />
      
      <TouchableOpacity onPress={() => {
                  this.setState({
                    calendar_visible: !this.state.calendar_visible,
                  });
                }}>
       <Icon name='calendar' size={24} style={{marginLeft:170,padding:15}}/>
       </TouchableOpacity>
       </View>
       {this.state.calendar_visible && (
            <CalendarPicker onDateChange={this.onDateChange} />
          )}
     
      <TouchableOpacity 
						style={{ marginRight: 30, marginLeft: 30, height: 48, backgroundColor: '#037ECF', borderRadius: 8, marginTop: 19 }}>
						<Text style={{ color: 'white', textAlign: 'center', marginTop: 12, fontSize: 16, fontWeight: '500' }}>SAVE</Text>
					</TouchableOpacity>
          </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  input:{
    height: 48,
    margin: 32,
    backgroundColor:'#F4F4FC',
    fontSize:16,
    borderRadius:10
    
  }
});
