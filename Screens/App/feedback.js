import { StatusBar } from 'expo-status-bar';
import React,{Component, useState} from 'react';
import { SafeAreaView,StyleSheet, Text, View,Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {
  const [defaultRating,setdefaultRating] = useState(1);
  const [ maxRating, setmaxRating] = useState([1,2,3,4,5]);

  const starImgFilled ='https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
  const starImgCorner='https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

  const CustomRatingBar = () =>{
    return(
      <View style={styles.CustomRatingBarStyle}>
        {
          maxRating.map((item,key) => {
            return(
              <TouchableOpacity
               activeOpacity={0.7}
               key ={item}
               onPress ={()=> setdefaultRating(item)}
              >
                <Image style={styles.starImgStyle}
                 source={
                   item <= defaultRating
                   ? {uri: starImgFilled}
                   : {uri: starImgCorner}
                 }
                
                />

              </TouchableOpacity>
            )

          }

          )
        }
       

      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={{marginTop:150}}>
      <Text style={styles.textStyle}>Please Rate Us</Text>
      <CustomRatingBar/>
      <Text style={styles.textStyle}>
        {defaultRating + '/ ' + maxRating.length}

      </Text>
      <Text style={{fontWeight:'bold',fontSize:19}}>Comment</Text>
      <TextInput style={{borderWidth:1,padding:15}}
      multiline={true}
      maxLength={250}
      placeholder='Add Comment Here'>
        
      </TextInput>
      <TouchableOpacity
      activeOpacity ={0.7}
      style={styles.buttonStyle}
      onPress={()=> alert(defaultRating)}
      >
        <Text style={{textAlign:'center',color:'white',fontWeight:'bold',fontSize:16}}>Submit</Text>

      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:30,
    justifyContent:'center',
  },
  CustomRatingBarStyle:{
    justifyContent:'center',
    flexDirection:'row',
    marginTop:30
  },
  starImgStyle:{
    height:40,
    width:40,
    resizeMode:'cover'
  },
  textStyle:{
    textAlign:'center',
    fontSize:23,
    marginTop:20
  },
  buttonStyle:{
    textAlign:'center',
    marginTop:20,
    padding:15,
    backgroundColor:'#037ECF'
  }
});
