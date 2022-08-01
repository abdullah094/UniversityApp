import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import MalePic from '../assets/male.png'
import FeMalePic from '../assets/female.png'
import { auth,db, storage} from '../../Firebase';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
const CustomDrawer = ({navigation}) => {
  const profile = useSelector((state) => state.todo.user)


  function profilePic(pic){
    if(pic==='Male'){
      return MalePic
    }
    else{
return FeMalePic
    }
  }
 
  return (
    <View style={styles.container}>
    <Image style={styles.profile_pic} source={profilePic(profile.gender)}/>
      <Text style={styles.name}>{profile.first_Name}</Text>
      <Text style={{color:'white',fontWeight:'bold',fontSize:30,top:-5}}>{profile.last_Name}</Text>
      <View style={{width:'90%',height:100,marginTop:10}}>
<Text style={styles.text}>Email: {profile.email}</Text>

<Text style={styles.text}>Phone#: {profile.phone}</Text>
<Text style={styles.text}>Inter Field#: {profile.interField}</Text>
<Text style={styles.text}>Inter Percentage#: {profile.interPercentage}%</Text>
<Text style={styles.text}>Metric Percentage#: {profile.matricPercentage}%</Text>
<Text style={styles.text}>Your budget: Rs{profile.budget}</Text>
      </View>
      <TouchableOpacity style={{flexDirection:'row',position:'absolute',bottom:20,left:30,alignItems:'center'}} onPress={()=> navigation.navigate('NewLogin')}>
      <Icon name="exit-outline" size={35} color="white" />
      <Text style={{
        color:colors.textColor,
        fontSize:20,
        marginVertical:10,
        marginHorizontal:5
    }}>SignOut</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.background,
        flex:1,
        alignItems:'center'
    },
    name:{
        color:colors.textColor,
        fontWeight:'bold',
        fontSize:30,
        marginTop:5
    },
    profile_pic:{
        width:120,
        height:150,
        borderRadius:120/2,
        backgroundColor:'white',
        marginTop:50
    },
    text:{
      color:'white'
    }
})