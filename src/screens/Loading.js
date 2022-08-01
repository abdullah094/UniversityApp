import React, { Component } from 'react';
import { View, StyleSheet, Animated, Image, Easing,ImageBackground ,Text} from 'react-native';
import { Constants } from 'expo';
import Logo from '../assets/logo.png'
import Background from '../assets/background.jpg'
const AnimatedImage = Animated.createAnimatedComponent(Image);

export default class NewLoading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: new Animated.Value(1)
    }
  }

  componentDidMount () {
    this._loopAnimationUp();
  }

  // The animation functions. Initial and end values can be anything (not just 1, 10, but remember to use the same value and flip them:
  _loopAnimationUp() {
    this.state.size.setValue(1);
    Animated.timing(this.state.size, {
      toValue: 10,
      duration: 500,
      useNativeDriver: false, 
      easing: Easing.linear
    }).start((o) => {
      if (o.finished) {
        this._loopAnimationDown();
      }
    });
  }

  _loopAnimationDown() {
    this.state.size.setValue(20);
    Animated.timing(this.state.size, {
      toValue: 10,
      duration: 500,
      useNativeDriver: false, 
      easing: Easing.linear
    }).start((o) => {
      if (o.finished) {
        this._loopAnimationUp();
      }
    });
  }

  render() {
    const size = this.state.size.interpolate({
      inputRange: [1, 10, 20,30, 40,  50, 60, 70,80],
      outputRange: [50,100,150,200,250,200,150,100,50],
      extrapolate: 'clamp',
    });

    return (
        
      <ImageBackground source={Background} style={styles.container} blurRadius={5}>
        <AnimatedImage
          style={[styles.image, {
            width: size,
            height: size,
          }]}
          source={Logo}
          resizeMode='contain'
        />
   
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
   
  },
  image: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'transparent',
    marginBottom:20,
  },
});