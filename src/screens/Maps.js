import * as React from 'react';
import MapView,{ Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { borderRightColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App(props) {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={props.initialRegion}>
      <Marker coordinate={{ latitude : props.latitude , longitude : props.longitude }}/>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor: '#fff',
    width:'100%',
  
  },
  map: {
    width: Dimensions.get('window').width,
   height:'100%',
  },
});