import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { auth } from './firebase/firebase';

import RegisterScreen from './screens/Register';
import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import { DashboardScreen } from './screens/DashboardScreen';
import StockScreen from './screens/StockScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      setUser(user);
    });
    return () => {
      unsubscribe();
    }
  });

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

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          user
          ? (
            <>
              {/* <Stack.Screen name="Home" component={ HomeScreen } /> */}
              <Stack.Screen name="Stock">
                { () => <StockScreen data={capitalOne}/>}
              </Stack.Screen>
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
