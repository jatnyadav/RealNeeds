import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View,ScrollView  } from 'react-native';
import { Header,Input,Image } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
       <ScrollView style={styles.scrollView}>
     <View style={{borderWidth:1,borderColor:'#1877F2',marginLeft:20,marginRight:20,borderRadius:10}}>
     <TextInput style={{ height: 50, borderColor: 'gray',marginLeft:10,marginRight:10,backgroundColor:'#F4F4FC',borderRadius:8,marginTop:5 }}
      placeholder ='Say Something' 
      />
      <TouchableOpacity>
     <View style={styles.header}>
     <Image style={styles.ImageStyle}
     source={require('../../assets/homephoto.jpg')} //Change your icon image here
      />
     <Text style={{fontSize:14,fontWeight:'bold',marginLeft:9,marginTop:2}}>Photo/video</Text>
     </View>
     </TouchableOpacity>
     </View>
     <View style={{flexDirection:'row',marginTop:27,marginLeft:20}}>
       <TouchableOpacity>
       <Image style={styles.ImageStyle1}
       source={require('../../assets/mahes.jpg')} //Change your icon image here
      />
      
       </TouchableOpacity>
       <Text style={{marginLeft:20,fontWeight:'bold',fontSize:16,marginTop:4}}>mahesh_circle</Text>
       <Image style={styles.ImageStyle2}
       source={require('../../assets/threedots.jpg')} //Change your icon image here
      />
     </View>
     <View>
     <Image style={styles.ImageStyle3}
       source={require('../../assets/maheshphoto.jpg')} //Change your icon image here
      />
      <View style={{flexDirection:'row'}}>
      <Image style={styles.ImageStyle4}
       source={require('../../assets/postlike.png')} //Change your icon image here
      /> 
      <Image style={styles.ImageStyle4}
       source={require('../../assets/postcomment.png')} //Change your icon image here
      />
      <Image style={styles.ImageStyle4}
       source={require('../../assets/sadface.png')} //Change your icon image here
      />
      <Image style={styles.ImageStyle4}
       source={require('../../assets/smileface.png')} //Change your icon image here
      />
      </View>
      </View>
      <Text style={{marginLeft:20}}> {"ram is very cute person. He is fullStack Developer \n and ready always for learning new things"} </Text>
      <View style={{flexDirection:'row',marginTop:17,marginLeft:20}}>
       <TouchableOpacity>
       <Image style={styles.ImageStyle1}
       source={require('../../assets/mahes.jpg')} //Change your icon image here
      />
      
       </TouchableOpacity>
       <Text style={{marginLeft:20,fontWeight:'bold',fontSize:16,marginTop:4}}>tanvir_circle</Text>
       <Image style={styles.ImageStyle2}
       source={require('../../assets/threedots.jpg')} //Change your icon image here
      />
     </View>
     <Image style={styles.ImageStyle3}
       source={require('../../assets/tanvirphoto.jpg')} //Change your icon image here
      />
      <View style={{flexDirection:'row'}}>
      <Image style={styles.ImageStyle4}
       source={require('../../assets/postlike.png')} //Change your icon image here
      /> 
      <Image style={styles.ImageStyle4}
       source={require('../../assets/postcomment.png')} //Change your icon image here
      />
      <Image style={styles.ImageStyle4}
       source={require('../../assets/sadface.png')} //Change your icon image here
      />
      <Image style={styles.ImageStyle4}
       source={require('../../assets/smileface.png')} //Change your icon image here
      />
      </View>
       <Text style={{marginLeft:20}}> {"ram is very cute person. He is fullStack Developer \n and ready always for learning new things"} </Text>
       <View style={{flexDirection:'row',marginTop:17,marginLeft:20}}>
       <TouchableOpacity>
       <Image style={styles.ImageStyle1}
       source={require('../../assets/mahes.jpg')} //Change your icon image here
      />
      
       </TouchableOpacity>
       <Text style={{marginLeft:20,fontWeight:'bold',fontSize:16,marginTop:4}}>jatin_circle</Text>
       <Image style={styles.ImageStyle2}
       source={require('../../assets/threedots.jpg')} //Change your icon image here
      />
     </View>
       <Image style={styles.ImageStyle3}
       source={require('../../assets/tanvirphoto.jpg')} //Change your icon image here
      />
      <View style={{flexDirection:'row'}}>
      <Image style={styles.ImageStyle4}
       source={require('../../assets/postlike.png')} //Change your icon image here
      /> 
      <Image style={styles.ImageStyle4}
       source={require('../../assets/postcomment.png')} //Change your icon image here
      />
      <Image style={styles.ImageStyle4}
       source={require('../../assets/sadface.png')} //Change your icon image here
      />
      <Image style={styles.ImageStyle4}
       source={require('../../assets/smileface.png')} //Change your icon image here
      />
      </View>
       <Text style={{marginLeft:20}}> {"ram is very cute person. He is fullStack Developer \n and ready always for learning new things"} </Text>
       <View style={{flexDirection:'row',marginTop:17,marginLeft:20}}>
       <TouchableOpacity>
       <Image style={styles.ImageStyle1}
       source={require('../../assets/mahes.jpg')} //Change your icon image here
      />
      
       </TouchableOpacity>
       <Text style={{marginLeft:20,fontWeight:'bold',fontSize:16,marginTop:4}}>hitesh_circle</Text>
       <Image style={styles.ImageStyle2}
       source={require('../../assets/threedots.jpg')} //Change your icon image here
      />
     </View>
       <Image style={styles.ImageStyle3}
       source={require('../../assets/tanvirphoto.jpg')} //Change your icon image here
      />
      <View style={{flexDirection:'row'}}>
      <Image style={styles.ImageStyle4}
       source={require('../../assets/postlike.png')} //Change your icon image here
      /> 
      <Image style={styles.ImageStyle4}
       source={require('../../assets/postcomment.png')} //Change your icon image here
      />
      <Image style={styles.ImageStyle4}
       source={require('../../assets/sadface.png')} //Change your icon image here
      />
      <Image style={styles.ImageStyle4}
       source={require('../../assets/smileface.png')} //Change your icon image here
      />
      </View>
       <Text style={{marginLeft:20}}> {"ram is very cute person. He is fullStack Developer \n and ready always for learning new things"} </Text>
      </ScrollView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  ImageStyle:{
    height:23,
    width:23,
  marginLeft:10
  },
  header:{
    flexDirection:"row",
    marginTop:9,
    marginBottom:10
  },
  ImageStyle1:{
    height:32,
    width:32
  },
  ImageStyle2:{
    height:45,
    width:45,
    marginLeft:150,
  },
  ImageStyle3:{
   height:184,
   width:340,
   marginLeft:20,
   alignSelf:'center'
  },
  ImageStyle4:{
    height:22,
    width:22,
    marginLeft:20,
    marginTop:10
  },
  scrollView: {
  
    marginVertical: 20,
  },
});
