import React from 'react'
import { StyleSheet, Text, View,Image, ImageBackground,ScrollView } from 'react-native'
import colors from '../constants/colors';
import Cover from '../assets/ibaPic.jpg'
import ProfilePic from '../assets/profilePic.jpg'
import { Paragraph } from 'react-native-paper';
const Profile = () => {
    return (
       
        <View style={styles.app}>
             <ScrollView style={{flex:1}}>
           <ImageBackground style={styles.header} source={Cover}>
        </ImageBackground>
        <View style={{flexDirection:'row',margin:10}}>
        <Image style={{height:100,width:100,borderRadius:50,}} source={ProfilePic}/>
              
        
           <View style={{justifyContent:'center',marginLeft:15}}>

          <Text style={{fontSize:25,fontWeight:'bold',color:'white'}}>Abdur Raheem</Text>
          <Text style={{fontSize:15,color:'white'}}>Status: student</Text>
          </View>
          </View>
          <View style={{width:'100%',height:2,backgroundColor:'black',marginVertical:5}}></View>
          <View style={styles.body}>
          <Text style={styles.text}>Father Name: </Text>
          <Text style={styles.text}>% or CGPA: </Text>
          <Text style={styles.text}>Field: </Text>
          <Text style={styles.text}>Adress: </Text>
          <Text style={styles.text}>Area of interest: </Text>
          
          </View>

          </ScrollView>
        </View>
    
    )
}

export default Profile

const styles = StyleSheet.create({
    app:{
        flex:1,
        backgroundColor: colors.background
        
    },
    header:{
        height:200,
        width:'100%',
       
        backgroundColor:'lightblue',

    },
    text:{
        color:'white',
        fontSize:17,
        marginLeft:5,
        fontWeight:'bold',

    }
})
