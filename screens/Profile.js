import React from "react";
import { Text, View, Button } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Stock Screen"
        onPress={() => navigation.navigate("StockScreen")}
      />
      <Button
        title="Go to Dashboard Screen"
        onPress={() => navigation.navigate("DashboardScreen")}
      />
    </View>
  );
};

export default ProfileScreen;
