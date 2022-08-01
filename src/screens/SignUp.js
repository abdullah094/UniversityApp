import React,{useState} from 'react'
import { StyleSheet, Text, View ,TextInput,Image,ScrollView,TouchableOpacity} from 'react-native'
import Logo from '../assets/logo.png';
import colors from '../constants/colors';
import { auth } from '../../Firebase';
const SignUp = ({navigation}) => {
   const [userName, setuserName] = useState('')
   const [password, setpassword] = useState('')


   const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(userName, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        alert('Successfully registered with:', user.email),
        navigation.navigate('Login')
      })
      .catch(error => alert(error.message))
  }

    return (
        <ScrollView contentContainerStyle={{flex:1,justifyContent:'center'}} keyboardDismissMode={true}>
        < View style={styles.container}>
                  

            <View >
            <Text style={{color:'white', fontSize:30,marginBottom:30,width:200,alignItems:'center',alignContent:'center',fontWeight:'bold'}}>Sign Up For University App </Text>
            </View>
            <View>
                <Text style={styles.text}>Enter username</Text>
            <TextInput placeholder='username' value={userName} onChangeText={setuserName} style={styles.textinput}/>
            <TextInput placeholder='password' value={password} onChangeText={setpassword} style={styles.textinput}/>
            </View>
            <View>
<TouchableOpacity style={{justifyContent:'center',marginVertical:10,alignItems:'center',height:50,width:150,backgroundColor:'white',borderRadius:10,}}
 onPress={handleSignUp}
 >
    <Text style={{fontWeight:'bold',fontSize:20}}>Sign Up</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{justifyContent:'center',marginVertical:10,alignItems:'center',height:50,width:150,backgroundColor:'white',borderRadius:10,}}
 onPress={()=>navigation.navigate('Login')}
 >
    <Text style={{fontWeight:'bold',fontSize:20}}>Sign In</Text>
    </TouchableOpacity>
    </View>
           
        </View>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.background
    },
    textinput:{
        backgroundColor:'white',
        textAlign:'center',
        marginVertical:10,
        borderRadius:10,
        width:250,
        height:50,
    },
    text:{
        color:colors.textColor
    }
})
