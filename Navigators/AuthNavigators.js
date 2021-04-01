import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Auth/Login';
import Feedback from '../Screens/App/feedback'
import Catagory from '../Screens/Auth/selectedcatagory';
import Signup from '../Screens/Auth/Signup2senior';
import Signup2 from '../Screens/Auth/Signupfamilyfriends';
import Verification from '../Screens/Auth/Otpverify';
import ForgotPassword from '../Screens/Auth/ForgotPassword';
import ResetPassword from '../Screens/Auth/Resetpassword';
import otpverifyforgotpassword from '../Screens/Auth/otpverifyforgotpassword'
import alerts from '../Screens/Auth/alerts';
import { Alert } from 'react-native';
const Stack = createStackNavigator();
export default function AuthNavigator(){
    return(
        <Stack.Navigator
        headerMode='none'
        initialRouteName='Login'
        >
     <Stack.Screen name="Login" component={Login} />
     <Stack.Screen name="Catagory" component={Catagory} />
     <Stack.Screen name="Signup" component={Signup} />
     <Stack.Screen name="Signup2" component={Signup2} />
     <Stack.Screen name="Verification" component={Verification} />
     <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
     <Stack.Screen name="ResetPassword" component={ResetPassword} />
     <Stack.Screen name="otpverifyforgotpassword" component={otpverifyforgotpassword}/>
     <Stack.Screen name="Alerts" component={alerts}/>
     <Stack.Screen name="Feedback" component={Feedback}/>
        </Stack.Navigator>
    )
}