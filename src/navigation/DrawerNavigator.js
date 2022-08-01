import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../screens/CustomDrawer';
import Home from '../screens/Home';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
  
      <Drawer.Navigator initialRouteName="DrawerHome"  screenOptions={{headerShown:false,}}  options={{gestureEnabled: false}} drawerContent={props => <CustomDrawer {...props}/>}>
        <Drawer.Screen name="DrawerHome" component={Home} />
      
      </Drawer.Navigator>
  
  );
}