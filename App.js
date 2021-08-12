import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const DashboardScreen = ({ navigation }) => {
  return (
    <View>
      <Text>
        Dashboard Screen
      </Text>
      <Button 
        title="Go to Stock Screen"
        onPress={() => navigation.navigate("StockScreen")}
      />
      <Button 
        title="Go to Profile Screen"
        onPress={() => navigation.navigate("ProfileScreen")}
      />
    </View>
  )
}

const StockScreen = ({ navigation }) => {
  return (
    <View>
      <Text>
        Stock Screen
      </Text>
      <Button 
        title="Go to Dashboard Screen"
        onPress={() => navigation.navigate("DashboardScreen")}
      />
      <Button 
        title="Go to Profile Screen"
        onPress={() => navigation.navigate("ProfileScreen")}
      />
    </View>
  )
}

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>
        Profile Screen
      </Text>
      <Button 
        title="Go to Stock Screen"
        onPress={() => navigation.navigate("StockScreen")}
      />
      <Button 
        title="Go to Dashboard Screen"
        onPress={() => navigation.navigate("DashboardScreen")}
      />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DashboardScreen">
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="StockScreen" component={StockScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
