import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Description from '../screens/Description';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp'
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import UniversityList from '../screens/UniversityList';
import Profile from '../screens/Profile';
import Maps from '../screens/Maps';
import Chatbot from '../screens/Chatbot';
import DrawerNavigator from './DrawerNavigator';
import NewLogin from '../screens/NewLogin'
import NewDescription from '../screens/NewDescription'
import Nearby from '../screens/Nearby';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerMode: 'none',
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
      <Stack.Screen name="University" component={UniversityList} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="NewDescription" component={NewDescription} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Description" component={Description} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Maps" component={Maps} />
      <Stack.Screen name="Chatbot" component={Chatbot} />
      <Stack.Screen name="NewLogin" component={NewLogin} />
      <Stack.Screen name="Nearby" component={Nearby} />
     
    
      
    </Stack.Navigator>
  );
};

export default AppNavigator;
