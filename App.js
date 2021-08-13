import { StyleSheet } from "react-native";
import OnboardingScreen from "./screens/OnboardingScreen";

import React, { useState, useEffect } from "react";
import { NavigationContainer, useLinkProps } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { setCustomText } from "react-native-global-props";
import { auth } from "./firebase/firebase";
import Ionicons from "react-native-vector-icons/Ionicons";

import RegisterScreen from "./screens/Register";
import LoginScreen from "./screens/Login";
import DashboardScreen from "./screens/DashboardScreen";
import StockScreen from "./screens/StockScreen";
import ProfileScreen from "./screens/Profile";
import SearchScreen from "./screens/Search";

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);

  const [capitalOne, setCapitalOne] = useState({
    company: "Capital One",
    ticker: "COF",
    lastPrice: 174.55,
    lastChange: 3.91,
    percentChange: 2.29,
    upDown: "+",
    shares: 0,
    boughtPrice: 8.31,
  });

  // const [facebook, setFaceBook] = useState({
  //   company: "Facebook",
  //   ticker: "FB",
  //   lastPrice: 362.65,
  //   lastChange: 2.69,
  //   percentChange: 0.75,
  //   upDown: "+",
  //   shares: 0,
  // });

  // const [apple, setApple] = useState({
  //   company: "Apple",
  //   ticker: "AAPL",
  //   lastPrice: 148.89,
  //   lastChange: 3.03,
  //   percentChange: 2.08,
  //   upDown: "+",
  //   shares: 0,
  // });

  // const [amazon, setAmazon] = useState({
  //   company: "Amazon",
  //   ticker: "AMZN",
  //   lastPrice: 3303.5,
  //   lastChange: 11.39,
  //   percentChange: 0.35,
  //   upDown: "+",
  //   shares: 0,
  // });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  });

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
        options={{ title: "Login", ...headerOptions }}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Register", ...headerOptions }}
      />
    </AuthStack.Navigator>
  );

  const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        options={{ title: "Profile", ...headerOptions }}
        name="Profile"
        component={ProfileScreen}
      />
    </ProfileStack.Navigator>
  );

  const DashboardStackScreen = () => (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        options={{ title: "Dashboard", ...headerOptions }}
        name="Dashboard"
      >
        {() => <DashboardScreen data={capitalOne} />}
      </DashboardStack.Screen>
      <DashboardStack.Screen
        options={{ title: "Stock", ...headerOptions }}
        name="Stock"
      >
        {() => <StockScreen data={capitalOne} setData={setCapitalOne} />}
      </DashboardStack.Screen>
      <DashboardStack.Screen
        options={{ title: "Profile", ...headerOptions }}
        name="Profile"
        component={ProfileScreen}
      />
    </DashboardStack.Navigator>
  );

  const SearchStackScreen = () => (
    <SearchStack.Navigator>
      <SearchStack.Screen
        options={{ title: "Search", ...headerOptions }}
        name="Search"
      >
        {() => <SearchScreen data={capitalOne} />}
      </SearchStack.Screen>
      <SearchStack.Screen
        options={{ title: "Stock", ...headerOptions }}
        name="Stock"
        component={StockScreen}
      />
      <SearchStack.Screen
        options={{ title: "Profile", ...headerOptions }}
        name="Profile"
        component={ProfileStackScreen}
      />
    </SearchStack.Navigator>
  );

  const TabsScreen = () => (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13,
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 92,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "DashboardStack") {
            iconName = "wallet-outline";
          } else if (route.name === "SearchStack") {
            iconName = "search-outline";
          } else if (route.name === "ProfileStack") {
            iconName = "person-sharp";
            size += 5;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FC3C3C",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen
        name="DashboardStack"
        component={DashboardStackScreen}
        options={{ tabBarLabel: "Dashboard" }}
      />
      <Tabs.Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{ tabBarLabel: "Profile" }}
      />
      <Tabs.Screen
        name="SearchStack"
        component={SearchStackScreen}
        options={{ tabBarLabel: "Search" }}
      />
    </Tabs.Navigator>
  );

  const RootStack = createNativeStackNavigator();
  const RootStackScreen = ({ user }) => (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <RootStack.Screen
          name="App"
          component={TabsScreen}
          options={{
            animationEnabled: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false,
          }}
        />
      )}
    </RootStack.Navigator>
  );

  return (
    <NavigationContainer>
      <RootStackScreen user={user} />
    </NavigationContainer>
  );
};

const headerOptions = {
  headerStyle: {
    backgroundColor: "#0F4471",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const customTextProps = {
  style: {
    fontFamily: "Avenir",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

setCustomText(customTextProps);

export default App;
