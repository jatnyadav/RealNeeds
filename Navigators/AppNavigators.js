// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import 'react-native-gesture-handler';

import * as React from 'react';

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import Home from '../Screens/App/Home';
import DetailsScreen from '../Screens/App/DetailsScreen';
import ProfileScreen from '../Screens/App/ProfileScreen';
import SettingsScreen from '../Screens/App/SettingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#fff' },
          headerTintColor: 'black',
          headerTitle:'Home',
          headerTitleStyle: { fontWeight: 'bold',alignSelf:'center' }
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Details Page' }} />
      </Stack.Navigator>
  );
}
function HomeStack1() {
    return (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: 'black',
            headerTitle:'Home',
            headerTitleStyle: { fontWeight: 'bold',alignSelf:'center' }
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: 'Details Page' }} />
        </Stack.Navigator>
    );
  }
  function HomeStack2() {
    return (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#fff' },
            headerTintColor: 'black',
            headerTitle:'Home',
            headerTitleStyle: { fontWeight: 'bold',alignSelf:'center' }
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: 'Details Page' }} />
        </Stack.Navigator>
    );
  }
function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Chat Page' }}/>
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details Page' }}/>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile Page' }}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#037ECF',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={24}
              />
            ),
          }}  />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="chat"
                color={color}
                size={size}
              />
            ),
          }} />
          <Tab.Screen
          name="HomeStack1"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="road"
                color={color}
                size={24}
              />
            ),
          }}  />
          <Tab.Screen
          name="HomeStack2"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="storefront-outline"
                color={color}
                size={24}
              />
            ),
          }}  />
          
      </Tab.Navigator>
  );
}
export default App;