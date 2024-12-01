import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';
import SignupScreen from './src/screen/SignupScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='SignUp' component={SignupScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App

const styles = StyleSheet.create({})