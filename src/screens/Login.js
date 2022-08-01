import React,{useState,useEffect} from 'react'
import {Text,View,StyleSheet,TextInput, TouchableOpacity,Image,ScrollView,KeyboardAvoidingView,Alert} from 'react-native'
import colors from '../constants/colors';
import { LogBox } from 'react-native';

import Logo from '../assets/logo.png';
import SignUp from '../screens/SignUp'
import { auth,db, storage} from '../../Firebase';
export let Username = 'Abd'
export let Password = '123'
const Login = ({navigation}) => {
  LogBox.ignoreLogs(['Setting a timer']);

   const [email,setuserName]= useState('')
   const [password,setpassword] = useState('')
   const [name ,setname] = useState()

   useEffect(()=>
   storage.ref('IqraUniversity.png').getDownloadURL()
   .then((url) => {
    
   })
   .catch((error)=>{
     console.log(error)
   })
,[])

  
   const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password,name)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        alert('SignUp:  ' + user.email)
      })
      .catch(error => Alert.alert(error.message))
  }



  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
     
     
        console.log('Logged in with:', user.email);
       navigation.navigate('Home')
      
      })
      .catch((error) => {
      
        Alert.alert('Please try again')
     setpassword('')
    
      })

  }

  // firebase testing
const firestore =()=>{
  db.collection("fyptesting").doc(email).set({
 
email:email,
password:password
})
.then((docRef) => {
    console.log("Document written with ID: ");
})
.catch((error) => {
    console.log("Error adding document: ", error);
});
}
// get data

const getfirestore = () => {
  
  var docRef = db.collection("fyptesting").doc(email)

  docRef.get().then((doc) => {
    if (doc.exists) {
        console.log(doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

}
// handle firebase storage
// useEffect(async() => {
//   //const storageRef = await storage.ref()
//   const reference = await ref(storage, 'ibaPic.jpg')
//   //var spaceRef = await storageRef.child('ibaPic.jpg')
//   await getDownloadURL(reference)
//   .then((url)=> console.log(url))
//   .catch((err)=> console.log(err))

// })


return(
    <ScrollView style={styles.container} 
    contentContainerStyle={{alignItems:'center',justifyContent:'center',marginTop:100,}}
    keyboardDismissMode='on-drag'> 
    
        <KeyboardAvoidingView
          style={{alignItems:'center',}}
          keyboardVerticalOffset={150}
          behavior={"position"}
          >
             
              <Image
            source={Logo}
            style={{width: 250, height: 190,}}
            
          />
          <View style={{alignItems:'center'}}>
          <Text style={{color:colors.textColor}}>Login University App</Text>
        
        <TextInput placeholder='Username' style={styles.input} onChangeText={text => setuserName(text)} value={email} />
        <TextInput placeholder='password' style={styles.input} onChangeText={text => setpassword(text)} value={password}
         secureTextEntry
         />


</View>
        </KeyboardAvoidingView>
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={{color:'black'}}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('SignUp')}>
            <Text style={{color:'black'}}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={firestore}>
            <Text style={{color:'black'}}>Firstore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={getfirestore}>
            <Text style={{color:'black'}}>get Firstore</Text>
            </TouchableOpacity>
     
    </ScrollView>
)

}
export default Login;
const styles = StyleSheet.create({
container:{
    flex:1,
    
    
    backgroundColor: colors.background,
    },
    input:{
        backgroundColor:'lightgray',
        width:200,
        margin:5,
        textAlign:'center',
        borderRadius:10,
        height:50,
    },
    button:{
        width:100,
        alignItems:'center',
        justifyContent:'center',
        height:50,
        borderRadius: 10,
        backgroundColor: colors.textColor,
        marginTop: 10,
        marginVertical:10,
    },
    
  })

