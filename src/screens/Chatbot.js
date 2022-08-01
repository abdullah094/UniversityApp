import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors';
import { WebView } from 'react-native-webview';



const Chatbot = () => {

const object = {
    one :1,
    two:2,
    three:3,
    nestedobject:{
      red: 'red',
      blue:'blue',
      green:'green',
    }
}

const obj = {...object}
const clone = {...object.nestedobject,id:1,object}

const num = [1,2,3,4,6]



  return (
    <View style={styles.container}>
       
       <WebView
   source={{html: '<iframe width="850" height="1230" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/e9041944-3f3c-4cf6-a83b-34e3bf72d6a0"></iframe>'}}
   style={{marginTop: 20}}
/>
    </View>
  )
}

export default Chatbot

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.background,
        flex:1,
    },
    webview:{
        height:600
    }
})