import React,{useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,ImageBackground} from 'react-native';
import colors from '../constants/colors';
import { LogBox } from 'react-native';
import Logo from '../assets/logo.png';
import Background from '../assets/background.jpg'
import { useSelector, useDispatch } from 'react-redux'

const Splash = ({navigation}) => {

  LogBox.ignoreLogs(['Setting a timer','AsyncStorage has been extracted']);
  const userData = useSelector((state) => state.todo.todo)
console.log(userData)
const dispatch = useDispatch()

  return (
    
      <ImageBackground style={styles.main} source={Background} resizeMode='cover' blurRadius={5}>
        <View>
          <Image
            source={Logo}
            style={{width: 250, height: 250}}
            resizeMode="contain"
          />
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.textView}
              onPress={() => {
                navigation.navigate('NewLogin');
              }}>
              <Text style={styles.text}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
   
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
  },
  text: {
    color: colors.background,
    fontSize: 15,
    fontWeight: 'bold',
  },
  textView: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
});

export default Splash;
