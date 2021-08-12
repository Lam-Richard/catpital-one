import React, { useState, useEffect } from "react";
import { NavigationContainer, useLinkProps } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { auth } from "./firebase/firebase";

import RegisterScreen from "./screens/Register";
import LoginScreen from "./screens/Login";
import DashboardScreen from "./screens/DashboardScreen";
import StockScreen from "./screens/StockScreen";
import ProfileScreen from "./screens/Profile";

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
            <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
            <Stack.Screen name="StockScreen">
              {() => <StockScreen data={capitalOne} />}
            </Stack.Screen>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
