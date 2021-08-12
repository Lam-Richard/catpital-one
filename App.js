import React, { useState, useEffect } from "react";
import { NavigationContainer, useLinkProps } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { setCustomText } from 'react-native-global-props'
import { auth } from "./firebase/firebase";
import Ionicons from 'react-native-vector-icons/Ionicons';

import RegisterScreen from "./screens/Register";
import LoginScreen from "./screens/Login";
import DashboardScreen from "./screens/DashboardScreen";
import StockScreen from "./screens/StockScreen";
import ProfileScreen from "./screens/Profile";
import SearchScreen from "./screens/Search";
import { trading } from "./tradingApi/trading";

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

  const AuthStack = createNativeStackNavigator();
  const Tabs = createBottomTabNavigator();
  const ProfileStack = createNativeStackNavigator();
  const DashboardStack = createNativeStackNavigator();
  const SearchStack = createNativeStackNavigator();

  const AuthStackScreen = () => (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Register" }}
      />
    </AuthStack.Navigator>
  );

  const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );

  const DashboardStackScreen = () => (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Dashboard" component={DashboardScreen} />
      <DashboardStack.Screen options={{title: 'Stock', ...headerOptions}} name="Stock">
          {() => <StockScreen data={capitalOne} />}
      </DashboardStack.Screen>
      <DashboardStack.Screen name="Profile" component={ProfileScreen} />
    </DashboardStack.Navigator>
  );
  
  const SearchStackScreen = () => (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen options={{title: 'Stock', ...headerOptions}} name="Stock">
              {() => <StockScreen data={capitalOne} />}
      </Stack.Screen>
      <SearchStack.Screen name="Profile" component={ProfileStackScreen} />
    </SearchStack.Navigator>
  );
  
  
  const TabsScreen = () => (
    <Tabs.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarLabelStyle: {
        fontSize: 13
      },
      tabBarStyle: {
        backgroundColor: "#fff",
        height: 92
      },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'DashboardStack') {
          iconName = 'wallet';
        } else if (route.name === 'SearchStack') {
          iconName = 'search';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#FC3C3C',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tabs.Screen name="DashboardStack" component={DashboardStackScreen} options={{tabBarLabel: "Dashboard"}} />
      <Tabs.Screen name="SearchStack" component={SearchStackScreen} options={{tabBarLabel: "Search"}}/>
    </Tabs.Navigator>
  );

  const RootStack = createNativeStackNavigator();
  const RootStackScreen = ({ user }) => (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <RootStack.Screen
          name="App"
          component={TabsScreen}
          options={{
            animationEnabled: false
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
    </RootStack.Navigator>
  );

  return (
    <NavigationContainer>
      <RootStackScreen user={user} />
      {/* <Stack.Navigator>
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
      </Stack.Navigator> */}
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
