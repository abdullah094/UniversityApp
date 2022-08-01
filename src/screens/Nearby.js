import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import * as Location from 'expo-location';


const Nearby = () => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        console.log(location)
        setLocation(location);
      })();
    },[]);
  
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
  
  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}

export default Nearby

const styles = StyleSheet.create({})