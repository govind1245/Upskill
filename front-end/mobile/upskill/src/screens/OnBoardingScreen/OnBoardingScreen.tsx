import React from 'react';
import {Image, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './OnBoardingScreen.style';
const OnBoardingScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={() => props.navigation.navigate('LoginScreen')}
        onSkip={() => props.navigation.navigate('LoginScreen')}
        pages={[
          {
            backgroundColor: '#416FB1',
            image: (
              <Image
                source={require('../../assets/onboarding1.png')}
                style={styles.image}
              />
            ),
            title: 'Welcome',
            subtitle:
              'Welcome to the Social Media App to share lots of memories and memes',
          },
          {
            backgroundColor: '#4767C0',
            image: (
              <Image
                source={require('../../assets/onboarding2.png')}
                style={styles.image}
              />
            ),
            title: 'Explore',
            subtitle:
              'End to end encryption for messaging and explore the world',
          },
          {
            backgroundColor: '#4382cc',
            image: (
              <Image
                source={require('../../assets/onboarding3.png')}
                style={styles.image}
              />
            ),
            title: 'All Done',
            subtitle: 'Chat with the people and share the memories',
          },
        ]}
      />
    </View>
  );
};
export default OnBoardingScreen;
