import React from "react";
import { Text, View, Button } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Stock Screen"
        onPress={() => navigation.navigate("Stock")}
      />
      <Button
        title="Go to Dashboard Screen"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
};

export default ProfileScreen;
