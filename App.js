import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { auth } from './firebase/firebase';

import RegisterScreen from './screens/Register';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  const [ authenticated, setAuthenticated ] = useState(false);

  useEffect(() => {
    try {
      const unsubscribe = auth.onAuthStateChanged(async user => {
        if (user) setAuthenticated(true);
        else setAuthenticated(false);
      });
      return () => {
        unsubscribe();
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          authenticated
          ? (
            <>
              <Stack.Screen name="Home" component={ HomeScreen } />
            </>
          )
          : (
            <>
              <Stack.Screen name="Register" component={ RegisterScreen } />
              <Stack.Screen name="Login" component={ LoginScreen } />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;