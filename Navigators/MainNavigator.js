import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthNavigator from "./AuthNavigators";
import AppNavigator from "./AppNavigators"
import { navigationRef, isMountedRef } from "../utils/RootNavigation";
import AuthLoading from '../Screens/Auth/Authloading';
const Tab = createBottomTabNavigator();
export default function MainNavigator() {
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        initialRouteName="Auth"
        backBehavior="none"
        screenOptions={({ route }) => ({
          tabBarVisible: false,
          unmountOnBlur: true,
        })}
      >
        <Tab.Screen name="AuthLoading" component={AuthLoading} />
        <Tab.Screen name="Auth" component={AuthNavigator} />
        <Tab.Screen name="App" component={AppNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
