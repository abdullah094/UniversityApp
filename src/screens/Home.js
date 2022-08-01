import React, {useState,useEffect} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  ActivityIndicator,
 
} from 'react-native';
import colors from '../constants/colors';
import Logo from '../assets/logo.png';
import AwesomeAlert from 'react-native-awesome-alerts';
import PAFKiet from '../assets/paf-kiet.png';
import NED from '../assets/NED.svg';
import BahriaUniversity from '../assets/BahriaUniversity.png';
import Dawood from '../assets/Dawood.png';
import IBA from '../assets/IBA.png';
import IqraUniversity from '../assets/IqraUniversity.png';
import IOBM from '../assets/IOBM.png';
import KUBS from '../assets/KUBS.png';
import JSMU from '../assets/JSMU.png';
import BUMDC from '../assets/BUMDC.png';
import {Picker} from '@react-native-picker/picker';
import BMU from '../assets/BMU.png';
import JsmuPic from '../assets/jsmuPic.jpg'
import KietPic from '../assets/kietPic.jpg'
import KumsPic from '../assets/kumsPic.jpg'
import BumsPic from '../assets/bumsPic.jpg'
import IbaPic from '../assets/ibaPic.jpg'
import iqra from '../assets/iqra.jpg'
import ned from '../assets/nedpic.jpg'
import { auth,db, storage} from '../../Firebase';
import Icon from 'react-native-vector-icons/Ionicons';
import chatbotpic from '../assets/chatbotpic.png'
import NewLoading from './Loading';
import Background from '../assets/background.jpg'


const Home = ({navigation}) => {
const [_topRated,settopRated] = useState()

  const [categories, setCategories] = useState(false);
 
  var docRef = db.collection("UniversityList").doc('Universities');

  useEffect(() => 
  
   docRef.get().then((doc) => {
      if (doc.exists) {
         
          settopRated(doc.data().TopRated)
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  })
  
  ,[])
  
  const [Items, setItems] = useState([
    {label: 'Engineering', value: 'Engineering'},
    {label: 'Business', value: 'Business'},
    {label: 'Medical', value: 'Medical'},
  ]);
  const [Budget, setBudget] = useState('Under 50,000');
  const topRated = [
    {
        id:1,
      name: 'PAF-Kiet',
      pic: KietPic,
      fees: 100000,
      logo: PAFKiet,
      stars: 5,
      description:
        'Kiet was established in 1997. KIET received recognition by the Higher Education Commission (formerly named as UGC) vide letter no. 15-22/UGC-SEC 97 1291 dated August 1, 1998. KIET is also accredited by Pakistan Engineering Council (PEC) for Engineering programs, Computer Science degree programs are accredited by National Computing Education Accreditation Council (NCEAC) whereas Management Sciences degree programs are accredited by National Business Education Accreditation Council (NBEAC). KIET was awarded a degree granting status through a charter from the Government of Sindh on May 24,2000',
        location:{
          latitude: 24.927587759284105, 
          longitude: 67.04765651336744,
          latitudeDelta: 0.00502,
          longitudeDelta: 0.0001,
        },
    },
    {
        id:2,
      name: 'Karachi University Business School (KUBS)',
      pic: KumsPic,
      fees: 120000,
      logo: KUBS,
      stars: 5,
      description:
        'Established in 1950, University of Karachi is a non-profit public higher-education institution located in the large metropolis of Karachi (population range of over 5,000,000 inhabitants), Sindh. Officially recognized by the Higher Education Commission of Pakistan, University of Karachi (UoK) is a large (uniRank enrollment range: 25,000-29,999 students) coeducational Pakistani higher education institution. University of Karachi (UoK) offers courses and programs leading to officially recognized higher education degrees such as bachelor degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. UoK also provides several academic and non-academic facilities and services to students including a library, sports facilities, as well as administrative services.',
        location:{
          latitude: 24.93937828006683,
          longitude: 67.12433261151354,
          latitudeDelta: 0.0802,
          longitudeDelta: 0.0001,
        },},
    {
        id:3,
      name: 'Iqra University',
      stars: 5,
      fees: 80000,
     pic: iqra,
      logo: IqraUniversity,
      description:
        'Established in 1998, Iqra University is a private higher-education institution located in the large metropolis of Karachi (population range of over 5,000,000 inhabitants), Sindh. This institution also has branch campuses in the following locations: Islamabad, Quetta. Officially recognized by the Higher Education Commission of Pakistan, Iqra University (IU) is a small (uniRank enrollment range: 5,000-5,999 students) coeducational Pakistani higher education institution. Iqra University (IU) offers courses and programs leading to officially recognized higher education degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. IU also provides several academic and non-academic facilities and services to students including a library, as well as administrative services',
        location:{
          latitude: 24.840139603234128,
          longitude: 67.08227138465494,
          latitudeDelta: 0.00302,
          longitudeDelta: 0.0001,
        },},
  ];
  const engUni = [
    {
        id:4,
      name: 'PAF-Kiet',
      stars: 5,
      logo: PAFKiet,
      pic: KietPic,
      fees: 100000,
      description:
        'Kiet was established in 1997. KIET received recognition by the Higher Education Commission (formerly named as UGC) vide letter no. 15-22/UGC-SEC 97 1291 dated August 1, 1998. KIET is also accredited by Pakistan Engineering Council (PEC) for Engineering programs, Computer Science degree programs are accredited by National Computing Education Accreditation Council (NCEAC) whereas Management Sciences degree programs are accredited by National Business Education Accreditation Council (NBEAC). KIET was awarded a degree granting status through a charter from the Government of Sindh on May 24,2000',
        location:{
          latitude: 24.927587759284105, 
          longitude: 67.04765651336744,
          latitudeDelta: 0.0802,
          longitudeDelta: 0.0001,
        }, },
    {
        id:5,
      name: 'NED University',
      stars: 3,
      logo: NED,
      fees: 35000,
      pic: ned,
      description:
        'Established in 1921, NED University of Engineering and Technology is a non-profit public higher-education institution located in the suburban setting of the large metropolis of Karachi (population range of over 5,000,000 inhabitants), Sindh. Officially recognized by the Higher Education Commission of Pakistan, NED University of Engineering and Technology (NEDUET) is a medium-sized (uniRank enrollment range: 8,000-8,999 students) coeducational Pakistani higher education institution. NED University of Engineering and Technology (NEDUET) offers courses and programs leading to officially recognized higher education degrees such as bachelor degrees, master degrees, doctorate degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. This 99 years old Pakistani higher-education institution has a selective admission policy based on entrance examinations and students past academic record and grades. The admission rate range is 40-50% making this Pakistani higher education organization a averagely selective institution. International applicants are eligible to apply for enrollment. NEDUET also provides several academic and non-academic facilities and services to students including a library, housing, sports facilities, financial aids and/or scholarships, study abroad and exchange programs, as well as administrative services.',
        location:{
          latitude: 24.92983019064295,
          longitude:  67.11483810552402,
          latitudeDelta: 0.00602,
          longitudeDelta: 0.0001,
        },   },
    {
        id:6,
      name: 'Bahria University',
      logo: BahriaUniversity,
      stars: 2,
      fees: 90000,
      pic: BumsPic,
      description:
        'Founded in 2000, Bahria University is a non-profit public higher-education institution located in the urban setting of the metropolis of Islamabad (population range of 1,000,000-5,000,000 inhabitants), Islamabad CT. This institution also has branch campuses in the following locations: Karachi, Lahore. Officially recognized by the Higher Education Commission of Pakistan, Bahria University (BU) is a large (uniRank enrollment range: 10,000-14,999 students) coeducational Pakistani higher education institution. Bahria University (BU) offers courses and programs leading to officially recognized higher education degrees such as bachelor degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. BU also provides several academic and non-academic facilities and services to students including a library, housing, financial aids and/or scholarships, as well as administrative services.',
        location:{
          latitude: 24.89372444556059, 
          longitude: 67.08798122327474,
          latitudeDelta: 0.00122,
          longitudeDelta: 0.0421,
        }, },
    {
        id:7,
      name: 'Dawood University',
      logo: Dawood,
      fees: 60000,
      stars: 1,
      description:
        'Established in 1964, Dawood University of Engineering and Technology is a non-profit public higher-education institution located in the urban setting of the large metropolis of Karachi (population range of over 5,000,000 inhabitants), Sindh. Officially recognized by the Higher Education Commission of Pakistan, Dawood University of Engineering and Technology (DUET) is a small (uniRank enrollment range: 2,000-2,999 students) coeducational Pakistani higher education institution. Dawood University of Engineering and Technology (DUET) offers courses and programs leading to officially recognized higher education degrees such as bachelor degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. This 56 years old Pakistani higher-education institution has a selective admission policy based on entrance examinations and students past academic record and grades. The admission rate range is 50-60% making this Pakistani higher education organization a averagely selective institution. International applicants are eligible to apply for enrollment. DUET also provides several academic and non-academic facilities and services to students including a library, sports facilities, as well as administrative services.',
        location:{
          latitude: 24.879486653133196, 
          longitude: 67.04765618465497,
          latitudeDelta: 0.00622,
          longitudeDelta: 0.0421,
        }, },
  ];

  const businessUni = [
    {
        id:8,
      name: 'IBA',
      pic: IbaPic,
      logo: IBA,
      fees: 120000,
      stars: 5,
      description:
        'Founded in 1955, Institute of Business Administration is a non-profit public higher-education institution located in the urban setting of the large metropolis of Karachi (population range of over 5,000,000 inhabitants), Sindh. Officially recognized by the Higher Education Commission of Pakistan, Institute of Business Administration (IBA) is a small (uni Rank enrollment range: 3,000-3,999 students) coeducational Pakistani higher education institution. Institute of Business Administration (IBA) offers courses and programs leading to officially recognized higher education degrees such as bachelor degrees, master degrees, doctorate degrees in several areas of study. See the uni Rank degree levels and areas of study matrix below for further details. IBA also provides several academic and non-academic facilities and services to students including a library, housing, as well as administrative services.',
        location:{
          latitude: 33.572039429193225, 
          longitude: 73.2347178079297,
          latitudeDelta: 0.00522,
          longitudeDelta: 0.0421,
        }, 
       },
    {
        id:9,
      name: 'Iqra University',
      logo: IqraUniversity,
      pic: iqra,
      fees: 80000,
      stars: 5,
      description:
        'Established in 1998, Iqra University is a private higher-education institution located in the large metropolis of Karachi (population range of over 5,000,000 inhabitants), Sindh. This institution also has branch campuses in the following locations: Islamabad, Quetta. Officially recognized by the Higher Education Commission of Pakistan, Iqra University (IU) is a small (uniRank enrollment range: 5,000-5,999 students) coeducational Pakistani higher education institution. Iqra University (IU) offers courses and programs leading to officially recognized higher education degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. IU also provides several academic and non-academic facilities and services to students including a library, as well as administrative services.',
        location:{
          latitude: 24.840139603234128,
          longitude: 67.08227138465494,
          latitudeDelta: 0.00302,
          longitudeDelta: 0.0001,
        },  },
    {
        id:10,
      name: 'IOBM',
      stars: 4,
      logo: IOBM,
      fees: 110000,
      description:
        'Founded in 1995, Institute of Business Management is a private higher-education institution located in the large metropolis of Karachi (population range of over 5,000,000 inhabitants), Sindh. Officially recognized by the Higher Education Commission of Pakistan, Institute of Business Management (IoBM) is a small (uniRank enrollment range: 3,000-3,999 students) coeducational Pakistani higher education institution. Institute of Business Management (IoBM) offers courses and programs leading to officially recognized higher education degrees such as bachelor degrees, master degrees, doctorate degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. This 25 years old Pakistani higher-education institution has a selective admission policy based on entrance examinations. IoBM also provides several academic and non-academic facilities and services to students including a library, financial aids and/or scholarships, as well as administrative services.',
        location:{
          latitude: 24.812451430067107, 
          longitude: 67.11712879999388,
          latitudeDelta: 0.00622,
          longitudeDelta: 0.0421,
        }, },
    {
        id:11,
      name: 'Karachi University Business School (KUBS)',
      logo: KUBS,
      stars: 5,
      pic: KumsPic,
      fees: 25000,
      description:
        'Established in 1950, University of Karachi is a non-profit public higher-education institution located in the large metropolis of Karachi (population range of over 5,000,000 inhabitants), Sindh. Officially recognized by the Higher Education Commission of Pakistan, University of Karachi (UoK) is a large (uniRank enrollment range: 25,000-29,999 students) coeducational Pakistani higher education institution. University of Karachi (UoK) offers courses and programs leading to officially recognized higher education degrees such as bachelor degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. UoK also provides several academic and non-academic facilities and services to students including a library, sports facilities, as well as administrative services.',
        location:{
          latitude: 24.93937828006683,
          longitude: 67.12433261151354,
          latitudeDelta: 0.00802,
          longitudeDelta: 0.0001,
        }, },
  ];

  const medUni = [
    {
        id:12,
      name: 'Jinnah Sindh Medical University',
      pic: JsmuPic,
      logo: JSMU,
      stars: 3,
      fees: 85000,
      description:
        'Established in 2012, Jinnah Sindh Medical University is a non-profit public higher-education institution located in the large metropolis of Karachi (population range of over 5,000,000 inhabitants), Sindh. Officially recognized by the Higher Education Commission of Pakistan, Jinnah Sindh Medical University is a very small (uniRank enrollment range: 1,000-1,999 students) coeducational Pakistani higher education institution. Jinnah Sindh Medical University offers courses and programs leading to officially recognized higher education degrees such as bachelor degrees, doctorate degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. Jinnah Sindh Medical University also provides several academic and non-academic facilities and services to students including a library, as well as administrative services',
        location:{
          latitude: 24.851699726889215, 
          longitude: 67.04508561962669,
                   latitudeDelta: 0.00622,
          longitudeDelta: 0.0421,
        },},
    {
        id:13,
      name: 'Bahria Medical University',
      pic: BumsPic,
      logo: BUMDC,
      stars: 3,
      fees: 90000,
      description:
        'Founded in 2000, Bahria University is a non-profit public higher-education institution located in the urban setting of the metropolis of Islamabad (population range of 1,000,000-5,000,000 inhabitants), Islamabad CT. This institution also has branch campuses in the following locations: Karachi, Lahore. Officially recognized by the Higher Education Commission of Pakistan, Bahria University (BU) is a large (uniRank enrollment range: 10,000-14,999 students) coeducational Pakistani higher education institution. Bahria University (BU) offers courses and programs leading to officially recognized higher education degrees such as bachelor degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. BU also provides several academic and non-academic facilities and services to students including a library, housing, financial aids and/or scholarships, as well as administrative services.',
        location:{
          latitude: 24.840585644840214, 
          longitude: 67.05081068737951,
          latitudeDelta: 0.00622,
          longitudeDelta: 0.0421,
        },  },
    {
        id:14,
      name: 'Baqai Medical University',
      logo: BMU,
      stars: 4,
      pic: BumsPic,
      fees: 125000,
      description:
        'Founded in 1996, Baqai Medical University is a private higher-education institution located in the large metropolis of Karachi (population range of over 5,000,000 inhabitants), Sindh. Officially recognized by the Higher Education Commission of Pakistan, Baqai Medical University is a very small (uniRank enrollment range: 1,000-1,999 students) coeducational Pakistani higher education institution. Baqai Medical University offers courses and programs leading to officially recognized higher education degrees such as bachelor degrees in several areas of study. See the uniRank degree levels and areas of study matrix below for further details. This 24 years old Pakistani higher-education institution has a selective admission policy based on entrance examinations. Baqai Medical University also provides several academic and non-academic facilities and services to students including a library, sports facilities, as well as administrative services.',
        location:{
          latitude: 24.988169974635856, 
          longitude: 67.21396991480184,
          latitudeDelta: 0.00622,
          longitudeDelta: 0.0421,
        }, },
  ];


if(!_topRated){
  return(
   <NewLoading/>
  )
}
else{
  return (
    <>
    <ImageBackground style={{flex:1}} source={Background} blurRadius={20}>
    <ScrollView style={{ height: '100%'}}>
      <View style={styles.main}>
        <TouchableOpacity style={{position:'absolute',top:0,left:20}} onPress={()=>navigation.openDrawer()}>
      <Icon name="person-circle-sharp" size={45} color="white" />
      </TouchableOpacity>
        <View style={{flex: 1,marginTop:20}}>
          <Image
            source={Logo}
            style={{width: 230, height: 180}}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            borderBottomColor: 'white',
         marginVertical:10,
            width: 900,
          }}
        />
       
        
        <View style={{flex: 0.8, marginTop: 10}}>
          <Text style={styles.text}>Search by preferred field</Text>
        <View style={{borderRadius:50}}>
            <Picker
             style={{width:322,marginVertical:10,fontSize:20,backgroundColor:'white',color:'black',borderRadius:10}}
  selectedValue={Items}
 
  onValueChange={(itemValue, itemIndex) =>
    setItems(itemValue)
  }>
    <Picker.Item label="--" value='' />
  <Picker.Item label="Engineering" value="Engineering" />
  <Picker.Item label="Medical" value="Medical" />
  <Picker.Item label="Business" value="Business" />
  
</Picker>
      </View>
      <Text style={styles.text}>Select you per semester budget</Text>
      <View style={{borderRadius:50}}>
            <Picker
             style={{width:322,marginVertical:10,fontSize:20,backgroundColor:'white',color:'black',borderRadius:10}}
  selectedValue={Budget}
 
  onValueChange={(itemValue, itemIndex) =>
    setBudget(itemValue)
  }>
  <Picker.Item label="Under 50,000" value="50000" />
  <Picker.Item label="Under 100,000" value="100000" />
  <Picker.Item label="Above 100,000" value="1000000" />
</Picker>
      </View>

          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (Items === '') {
                  setCategories(true);
                 }
                 else if (Items === 'Engineering' || Items === 'Medical' || Items === 'Business') {
                  navigation.navigate('University', {
                         value: Items,
                         budget: Budget,
                         UniList: Items === 'Engineering' ?  engUni : Items === 'Medical'? medUni : businessUni,
                       });
                 }
               
              }}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>

          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            width: '100%',
            marginTop: 20,
          }}
        />
        <TouchableOpacity style={{marginVertical: 20,width:'100%',height:150,borderRadius:10}} onPress={()=>navigation.navigate('Chatbot')} >
        <Image style={{height:'100%',width:'100%',borderRadius:10}} source={chatbotpic}/>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            width: '100%',
            marginTop: 20,
          }}
        />
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 25, color: colors.textColor, fontWeight: 'bold'}}>
            Top Rated Universities
          </Text>
          <FlatList
            data={_topRated}
            horizontal
            renderItem={({item}) => (

        _topRated?    
            <TouchableOpacity style={styles.uniButtons}
                  onPress={() => {
                    navigation.navigate('Description', {item: item});
                  }}>
                  <Text style={styles.uniButtonText}>{item.name}</Text>
              {  <Image style={{width:190,height:160,borderRadius:5}} source={{uri:item.pic}} /> ||  <ActivityIndicator size="large" color="#00ff00" /> }
                 </TouchableOpacity>
            
            : <ActivityIndicator size="large" color="#00ff00" />
            
  )        
}
            keyExtractor={(item)=>item.id}
          />
        </View>
        
      </View>
      <AwesomeAlert
        show={categories}
        title="Empty"
        message="Please select a category!"
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor={colors.background}
        onConfirmPressed={() => {
          setCategories(false);
        }}
      />
    </ScrollView>
    </ImageBackground>
    </>
  );
}};

const styles = StyleSheet.create({
  main: {
    height: '100%',
   
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom:80,
  width:'100%',
    marginTop:20
  },
  text: {
    color: colors.textColor,
    fontSize: 20,
    marginBottom: 10,
    fontWeight:'bold'
  },
  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.textColor,
    marginTop: 5,
    alignItems:'center'
  },
  buttonText: {
   
    fontSize: 15,
    fontWeight: 'bold',
  },
  uniButtons: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 10,
    height:250,marginHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
    width:200
  },
  uniButtonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
