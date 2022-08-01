import React, {useState} from 'react';
import {FlatList,Image,ScrollView,StyleSheet,Text,TouchableOpacity,View,ActivityIndicator,ImageBackground} from 'react-native';
import colors from '../constants/colors';
import Logo from '../assets/logo.png';
import uniLogo from '../assets/paf-kiet.png';
import ADIcons from 'react-native-vector-icons/AntDesign';
import JsmuPic from '../assets/jsmuPic.jpg';
import Maps from '../screens/Maps'
import StarRating from 'react-native-star-rating';



const Description = ({navigation, route}) => {
  const {item} = route?.params;
  
  return (
    <>
        <TouchableOpacity
    style={{position:'absolute',left:10,top:20,color:'black',zIndex:999}}
    onPress={() => {
      navigation.goBack(); 
    }}>
    <ADIcons name="arrowleft" color="gray" size={30} />
  </TouchableOpacity>
    
  
    <ScrollView style={{backgroundColor: colors.background,flex:1}} stickyHeaderIndices={[1]}>
      <View style={styles.main}>
      
         
          
         <Image
              source={{uri:item?.pic}}
              style={{width: '100%', height: 300}}
              
            />
          
          <View style={{flex: 0.5}}></View>
       

        <View style={{marginTop: 50}}>
        {item.logo?  <Image
            source={{uri:item?.logo}}
            style={{width: 250, height: 150}}
            resizeMode="contain"
          />: 
          <ActivityIndicator size="large" color="#00ff00" />
          }
        </View>
        <View>
          <Text style={styles.text}>Description</Text>
        </View>
        <View style={{paddingHorizontal:20}}>
          <Text style={styles.description}>
           
            {item?.description}
          </Text>
        </View>
        <View style={{marginTop:20}}>
        <StarRating
        fullStarColor='#dbba00'
        disabled={true}
        starStyle={{marginHorizontal:2}}
        maxStars={5}
        halfStarEnabled={true}
        rating={item.stars}
        starSize={30}
       // selectedStar={(rating) => onStarRatingPress(rating)}
      />
      </View>
        <View style={{width:'100%',marginVertical:20,marginLeft:20}}>
          <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}>
            Per Semester Fees: {item.Fees}
          </Text>
        </View>
        <Text style={{color:'red',fontSize:10,bottom:-25,left:0}}>Click on the red pin to navigate this university</Text>
        <TouchableOpacity style={{height:250, marginTop:30, alignItems:'center'}}>
       <Maps initialRegion={item.location} latitude={item.location.latitude} longitude={item.location.longitude}/>
         
        </TouchableOpacity>
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
   flex:1,
    backgroundColor: colors.background,
    //justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:50,
  },
  text: {
    color: colors.textColor,
    fontSize: 20,
    marginTop: 25,
    fontWeight: 'bold',
  },
  description: {
    color: colors.textColor,
    fontSize: 15,
    marginTop: 10,
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
  //   uniButtons: {
  //     padding: 10,
  //     borderRadius: 10,
  //     backgroundColor: colors.textColor,
  //     marginTop: 15,
  //   },
  //   uniButtonText: {
  //     color: colors.background,
  //     fontSize: 20,
  //     fontWeight: 'bold',
  //     textAlign: 'center',
  //   },
});

export default Description;
