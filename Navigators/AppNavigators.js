// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import 'react-native-gesture-handler';

import * as React from 'react';

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Home from '../Screens/App/Home';
import DetailsScreen from '../Screens/App/DetailsScreen';
import ProfileScreen from '../Screens/App/ProfileScreen';
import SettingsScreen from '../Screens/App/SettingScreen';
import feedback from '../Screens/App/feedback';
import Login from '../Screens/Auth/Login'
import calendar from '../Screens/App/Calender'
import Hotkey from '../Screens/App/Hotkey'
import SettingScreen from '../Screens/App/SettingScreen';
import Message from '../Screens/App/Message'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function AppNavigator(){
   return(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      headerTitle='Home'
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "Home" }}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chats}
        
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <Icon name="message-circle" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
    name="Add"
    options={{
        tabBarLabel: 'Another Catagory',
        tabBarIcon: ({ color }) => (
            <View
            style={{
                position: 'absolute',
                bottom: 0, // space from bottombar
                height: 68,
                width: 68,
            
                justifyContent: 'center',
                backgroundColor: 'transparent',
                alignItems: 'center',
      
            }}
            >
             <Image
          style={{height:77,width:77}}
          source={require('../assets/custommidd.png')}
        />
            </View>
        )
    }}
    component={HotKey}/>
      <Tab.Screen
        name="Notification"
        component={ProfileScreen}
        options={{
          headerTitle:'Notifications',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingPage}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
   )
  }
  function SettingPage() {
    return (
      <Stack.Navigator
        headerMode="none"
        // screenOptions={{ cardStyleInterpolator: fadeConfig }}
        initialRouteName="SettingScreen">
        <Stack.Screen name="feed_home" component={SettingsScreen} />
        <Stack.Screen name="feedback" component={feedback} />
        <Stack.Screen name="Login" component={Login}/>

        {/* <Stack.Screen name="feed_home_profile_view" component={Profile_View} /> */}
      </Stack.Navigator>
    );
  }
  function HotKey() {
    return (
      <Stack.Navigator
        headerMode="none"
        // screenOptions={{ cardStyleInterpolator: fadeConfig }}
        initialRouteName="Hotkey">
        <Stack.Screen name="Hotkey" component={Hotkey} />
        <Stack.Screen name="Calender" component={calendar} />

        {/* <Stack.Screen name="feed_home_profile_view" component={Profile_View} /> */}
      </Stack.Navigator>
    );
  }
  function Chats() {
    return (
      <Stack.Navigator
        headerMode="none"
        // screenOptions={{ cardStyleInterpolator: fadeConfig }}
        initialRouteName="Message">
        <Stack.Screen name="Message" component={Message} />

        {/* <Stack.Screen name="feed_home_profile_view" component={Profile_View} /> */}
      </Stack.Navigator>    );
  }
   
