import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View,Button ,TouchableOpacity,TextInput,ScrollView ,ImageBackground,KeyboardAvoidingView,Alert,Image } from 'react-native'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import colors from '../constants/colors';
import Background from '../assets/LoginBackgroundTop.jpg'
import { LogBox } from 'react-native';
import { auth,db, storage} from '../../Firebase';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useSelector, useDispatch } from 'react-redux'
import {loginData} from '../../redux/reducers'
import {Picker} from '@react-native-picker/picker';
import { color } from 'react-native-reanimated';


const Login = ({navigation}) => {
    LogBox.ignoreLogs(['Setting a timer']);
    const [loginState, setloginState] = useState(true)
  
   const [name ,setname] = useState()

//    useEffect(()=>
//    storage.ref('IqraUniversity.png').getDownloadURL()
//    .then((url) => {
    
//    })
//    .catch((error)=>{
//      console.log(error)
//    })
// ,[])

 



 




const LoginTab = () => {
    const [email,setuserName]= useState('')
    const [password,setpassword] = useState('')
    const dispatch = useDispatch();
    const handleLogin = () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
         
         (()=>{
          var docRef = db.collection("fyptesting").doc(email)

          docRef.get().then((doc) => {
            if (doc.exists) {
              dispatch(loginData(doc.data()))
               // console.log(doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        })
         })();
            console.log('Logged in with:', user.email);
           navigation.navigate('Home')
          
          })
          .catch((error) => {
          if(email===''||password==='')
          {
              Alert.alert('Username or password field empty')
          }
          else{
            Alert.alert('Please try again')
         
          }
          })
    
      }
  
 

  return (
    <>
      <Text style={styles.heading}>Login to continue</Text>
<View style={{width:'90%',height:350,alignItems:'center',justifyContent:'space-evenly'}}>
  
  <KeyboardAvoidingView style={{width:'95%',}}>

  <View  >
  <Text style={styles.formheading}>Email</Text>

  <TextInput style={{
      borderBottomWidth:1,
      width:"95%"
    }}  onChangeText={text => setuserName(text)} value={email} keyboardType='email-address'
    />
  </View>
  <View style={{marginTop:20}}>
  <Text style={styles.formheading}>Password</Text>
  <TextInput style={{
      borderBottomWidth:1,
      width:"95%"
    }} onChangeText={text => setpassword(text)} value={password} secureTextEntry/>
  </View>
  
  </KeyboardAvoidingView>
  <TouchableOpacity onPress={handleLogin} style={{width:250,elevation:5,height:50,borderRadius:30,alignItems:'center',justifyContent:'center',backgroundColor:colors.background,}}>
  <Text style={{color:'white',fontSize:23,fontWeight:'bold'}}>Login</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=> setloginState(false)}>
  <Text style={{color:'blue'}}>don't have an account?</Text>
  </TouchableOpacity>
</View>
</>
  )
}

  const Register = () => {
   
    const [userName, setuserName] = useState('')
    const [password, setpassword] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')
    const [image, setImage] = useState(null);
    const [interPercentage, setinterPercentage] = useState(null);
    const [matricPercentage, setmatricPercentage] = useState(null);
    const [interField, setinterField] = useState(null);
    const [selectedGender, setselectedGender] = useState('Male');
const [budget, setbudget] = useState()
    const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(userName, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            firestore()
           Alert.alert('Successfully registered', user.email)
           setloginState(true)
          })
          .catch(error => Alert.alert(error.message))
      }

      const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

      // Firestore add data
      const firestore =()=>{
        db.collection("fyptesting").doc(userName).set({
         
         first_Name: firstName,
last_Name:lastName,
phone:phone,
email:userName,
password: password,
interField: interField,
interPercentage:interPercentage,
matricPercentage:matricPercentage,
gender:selectedGender,
budget:budget
      })
      .then((docRef) => {
          console.log("Document written with ID: ");
      })
      .catch((error) => {
          console.log("Error adding document: ", error);
      });
      }


    return (
    <>
    <ScrollView contentContainerStyle={{flex:1,alignItems:'center',marginBottom:50}}>
      <Text style={styles.heading}>Register to University App</Text>
<KeyboardAvoidingView style={{width:'85%',height:'100%',alignItems:'center',justifyContent:'space-between',marginBottom:50,marginTop:10}} keyboardVerticalOffset={-500} behavior="padding">
  <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',}}>
    <View>
  <Text style={styles.formheading}>First Name</Text>
  <TextInput style={styles.forminput} value={firstName} onChangeText={(text)=>setfirstName(text)}/>
  </View>

  <View style={{marginLeft:5}}>
  <Text style={styles.formheading}>Last Name</Text>
  <TextInput style={styles.forminput} value={lastName} onChangeText={(text)=>setlastName(text)}/>
  </View>

  </View>
  <View style={{width:'100%',}}>

  <View >
  <Text style={styles.formheading}>Phone</Text>
  <TextInput style={{
      borderBottomWidth:1,
      width:"100%"
    }} value={phone} onChangeText={(text)=>setphone(text)} keyboardType='number-pad'/>
  </View>
  <View style={{marginTop:10}} >
  <Text style={styles.formheading}>Email ID</Text>
  <TextInput style={{
      borderBottomWidth:1,
      width:"100%"
    }} onChangeText={(text)=> setuserName(text)} value={userName} keyboardType='email-address'/>
  </View>
  <View style={{marginTop:10}}>
  <Text style={styles.formheading}>Password</Text>
  <TextInput style={{
      borderBottomWidth:1,
      width:"100%"
    }} onChangeText={(text) => setpassword(text)} value={password}/>
  </View>
  <View style={{marginTop:10}}>
  <Text style={styles.formheading}>Matric Percentage</Text>
  <TextInput style={{
      borderBottomWidth:1,
      width:"100%"
    }} onChangeText={(text) => setmatricPercentage(text)} value={matricPercentage} keyboardType='number-pad'/>
  </View>
  <View style={{marginTop:10}}>
  <Text style={styles.formheading}>Inter Percentage</Text>
  <TextInput style={{
      borderBottomWidth:1,
      width:"100%"
    }} onChangeText={(text) => setinterPercentage(text)} value={interPercentage} keyboardType='number-pad'/>
  </View>
  <View style={{marginTop:10}}>
  <Text style={styles.formheading}>Inter field</Text>
  <TextInput style={{
      borderBottomWidth:1,
      width:"100%"
    }} onChangeText={(text) => setinterField(text)} value={interField}/>
  </View>
  <View style={{marginTop:10}}>
<Text style={styles.formheading}>Select Gender</Text>
<Picker
  selectedValue={selectedGender}
  onValueChange={(itemValue, itemIndex) =>
    setselectedGender(itemValue)
  }>
  <Picker.Item label="Male" value="Male" />
  <Picker.Item label="Female" value="Female" />
</Picker>
</View>
<View style={{marginTop:10}}>
  <Text style={styles.formheading}>Enter your per semester budget</Text>
  <TextInput style={{
      borderBottomWidth:1,
      width:"100%"
    }} onChangeText={(text) => setbudget(text)} value={budget} keyboardType='number-pad'/>
  </View>
  {/* Image Picker */}

  </View>
  <TouchableOpacity onPress={handleSignUp} style={{width:250,height:50,elevation:5,borderRadius:30,alignItems:'center',justifyContent:'center',backgroundColor:colors.background,}}>
    <Text style={{color:'white',fontSize:23,fontWeight:'bold'}}>Register</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={()=> setloginState(true)}>
  <Text style={{color:'blue'}}>Already have an account</Text>
  </TouchableOpacity>
</KeyboardAvoidingView>
</ScrollView>
</>
    )
  }

  
  const LoginButton = () => {
    return(
<View style={{flexDirection:'row',top:-30,left:60}} > 
        <TouchableOpacity onPress={()=>{setloginState(true)}} style={loginState?styles.logintrue:styles.loginfalse} activeOpacity={1}>
          <Text style={loginState?{color:'white',fontSize:18,fontWeight:'bold',shadowRadius: 30,}:{color:colors.backgroundColor,fontSize:18,fontWeight:'bold'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setloginState(false)}} style={loginState?styles.registerfalse:styles.registertrue} activeOpacity={1}>
          <Text style={loginState?{color:colors.background,fontSize:18,fontWeight:'bold'}:{color:'white',fontSize:18,fontWeight:'bold'}}>Register</Text>
        </TouchableOpacity>
      </View>
    )
  }


  return (
  <View style={{flex:1}}>
      <ImageBackground style={styles.topbackground} source={Background} resizeMode='cover' blurRadius={1} >
 <Text style={styles.topheading}>Welcome to University App</Text>
 <Text style={styles.h2}>Get started Now...</Text>
      </ImageBackground>

<LoginButton/>
      
      <View style={styles.form}>
       
<ScrollView contentContainerStyle={{alignItems:'center',width:360}} showsVerticalScrollIndicator ={false}>
{loginState?<LoginTab/>:<Register/>}
</ScrollView>
      </View>
      </View>
  )
}

export default Login

const styles = StyleSheet.create({

    app:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    topbackground:{
      flex:0.4,
      backgroundColor:'orange',
      justifyContent:'center',
      backgroundColor:colors.background
    },
    form:{
flex:0.6,
alignItems:'center',

    },
    topheading:{
      color:'white',
      fontSize:27,
      fontWeight:'bold',
      marginLeft:40
    },
    h2:{
      color:'white',
      fontSize:30,
     
      marginLeft:50
    },
    heading:{
     fontWeight:'bold',
      fontSize:23,

     
    },
    formheading:{
fontSize:14,
fontWeight:'bold',
color:'gray'

    },
    forminput:{
      borderBottomWidth:1,
      width:130
    },
    logintrue:{width:140,elevation:10,height:50,borderTopLeftRadius:50,borderBottomLeftRadius:50,justifyContent:'center',alignItems:'center',backgroundColor:colors.background},
  loginfalse:{width:140,elevation:10,height:50,borderTopLeftRadius:50,borderBottomLeftRadius:50,justifyContent:'center',alignItems:'center',backgroundColor:'white'},
  registertrue:{width:140,elevation:10,height:50,borderTopRightRadius:50,borderBottomRightRadius:50,justifyContent:'center',alignItems:'center',backgroundColor:colors.background},
  registerfalse:{width:140,elevation:10,height:50,borderTopRightRadius:50,borderBottomRightRadius:50,justifyContent:'center',alignItems:'center',backgroundColor:'white'},

})