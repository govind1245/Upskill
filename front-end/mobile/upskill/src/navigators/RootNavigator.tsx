import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardingScreen from '../screens/OnBoardingScreen/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

const RootNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerMode: 'screen',
        }}>
        <Stack.Screen name="onBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
