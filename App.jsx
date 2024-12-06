import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screen/HomeScreen";
import LoginScreen from "./src/screen/LoginScreen";
import SignupScreen from "./src/screen/SignupScreen";
import WelcomeScreen from "./src/screen/WelcomeScreen";
import AccountScreen from "./src/screen/AccountScreen";
import FightCase from "./src/screen/FightCase";
import GameScreen from "./src/screen/GameScreen";
import ChatbotScreen from "./src/screen/ChatbotScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"HOME"} component={HomeScreen} />
        <Stack.Screen name={"LOGIN"} component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Chatbot" component={ChatbotScreen}/>
        <Stack.Screen name="Account" component={AccountScreen}/>
        <Stack.Screen name='Fight' component={FightCase}/>
        <Stack.Screen name='GameScreen' component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
