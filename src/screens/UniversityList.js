import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../constants/colors';
import Logo from '../assets/logo.png';
import ADIcons from 'react-native-vector-icons/AntDesign';
import Background from '../assets/background.jpg'


const UniversityList = ({navigation, route}) => {
  // const engineeringUnis = [
  //   'PAF-Kiet',
  //   'NED University',
  //   'Bahria University',
  //   'Dawood University',
  // ];

  const {value, UniList,budget} = route?.params;
  
const list = () => {
let map = []
  UniList.forEach(element => {
    if(element.fees>=0&&element.fees<=parseInt(budget)){
    map.push(element)
    }
  });
  return map
}

const _List = list()

let _check = true



  return (
   <ImageBackground style={{flex:1}} source={Background} blurRadius={10}>
      <View style={styles.main}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{paddingVertical: 20, flex: 0.5}}
            onPress={() => {
              navigation.navigate('Home');
            }}> 
            <ADIcons name="arrowleft" color="white" size={30} />
          </TouchableOpacity>
          <View style={{flex: 2}}>
            <Image
              source={Logo}
              style={{width: 250, height: 170,marginTop:50}}
              resizeMode="contain"
            />
          </View>
          <View style={{flex: 0.5}}></View>
        </View>
        <View>
          <Text style={styles.text}>{`List of ${value} Universities`}</Text>
        </View>
        {_check?
    <View>
          <FlatList
            data={_List}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={styles.uniButtons}
                  onPress={() => {
                    navigation.navigate('NewDescription', {item: item});
                  }}>
                  <View style={{height:50,width:'100%',justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
                    <Image style={{height:50,width:80,position:'absolute',left:1}} source={item.pic}/>
                  <Text style={styles.uniButtonText}>{item?.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>: 
        <Text style={{color:colors.textColor,fontSize:20}}>No Universities for you</Text>
        }
      </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main: {
   flex:1,
    
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    color: colors.textColor,
    fontSize: 20,
    marginTop: 30,
    fontWeight: 'bold',
  },
  //   button: {
  //     padding: 10,
  //     borderRadius: 10,
  //     backgroundColor: colors.textColor,
  //     marginTop: 5,
  //   },
  //   buttonText: {
  //     color: colors.background,
  //     fontSize: 15,
  //     fontWeight: 'bold',
  //   },
  uniButtons: {
    padding: 10,
    justifyContent:'center',alignItems:'center',
    borderRadius: 10,
    backgroundColor: colors.textColor,
    marginTop: 15,
  },
  uniButtonText: {
    color: colors.background,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default UniversityList;
