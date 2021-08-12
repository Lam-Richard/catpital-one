import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
import { DashboardScreen } from './screens/DashboardScreen';
import { StockScreen } from './screens/StockScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';


const capitalOne = {
  company: 'Capital One',
  ticker: 'COF',
  lastPrice: 174.55,
  lastChange: 3.91,
  percentChange: 2.29,
  upDown: '+',
  shares: 100,
  boughtPrice: 8.31,
};

const AppStack = createNativeStackNavigator();


const App = () => {

  return (
    <>
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        style={{backgroundColor: '#0F4471'}}
        >
          <AppStack.Screen name="Onboarding" component={OnboardingScreen}/>
          <AppStack.Screen name="Login" component={LoginScreen}/>
        </AppStack.Navigator>
    </NavigationContainer>
    {/* <StockScreen data={capitalOne}></StockScreen> */}
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});