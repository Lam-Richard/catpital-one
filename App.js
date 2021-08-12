import React, { useState, useEffect } from "react";
import { NavigationContainer, useLinkProps } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { setCustomText } from 'react-native-global-props'
import { auth } from "./firebase/firebase";

import RegisterScreen from "./screens/Register";
import LoginScreen from "./screens/Login";
import DashboardScreen from "./screens/DashboardScreen";
import StockScreen from "./screens/StockScreen";
import ProfileScreen from "./screens/Profile";
import SearchScreen from "./screens/Search";

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  });

  const capitalOne = {
    company: "Capital One",
    ticker: "COF",
    lastPrice: 174.55,
    lastChange: 3.91,
    percentChange: 2.29,
    upDown: "+",
    shares: 100,
    boughtPrice: 8.31,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen options={{title: 'Dashboard', ...headerOptions}} name="Dashboard" component={DashboardScreen} />
            <Stack.Screen options={{title: 'Stock', ...headerOptions}} name="Stock">
              {() => <StockScreen data={capitalOne} />}
            </Stack.Screen>
            <Stack.Screen options={{title: 'Profile', ...headerOptions}} name="Profile" component={ProfileScreen} />
            <Stack.Screen options={{title: 'Search', ...headerOptions}} name="Search" component={SearchScreen} />
          </>
        ) : (
          <>
            <Stack.Screen options={{title: 'Register', ...headerOptions}} name="Register" component={RegisterScreen} />
            <Stack.Screen options={{title: 'Login', ...headerOptions}} name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const headerOptions = {
  headerStyle: {
    backgroundColor: '#0F4471',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

const customTextProps = {
  style: {
    fontFamily: 'Avenir'
  }
}

setCustomText(customTextProps);


export default App;
