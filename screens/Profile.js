import React from "react";
import { Text, View, Button, StyleSheet, Image, Dimensions } from "react-native";
import TextTicker from "react-native-text-ticker";
import StockMarquee from "../components/StockMarquee";

const ProfileScreen = ({ navigation }) => {
  const profile = {
    name: "Sprinkles",
    money: 69.69,
    day: 4,
    occupation: "Intern",
  };

  const data = [
    {
      title: "COF",
      price: 174.55,
      change: 2.29,
    },
    {
      title: "COF",
      price: 174.55,
      change: -2.29,
    },
    {
      title: "COF",
      price: 174.55,
      change: -2.29,
    },
    {
      title: "COF",
      price: 174.55,
      change: 2.29,
    },
    {
      title: "COF",
      price: 174.55,
      change: -2.29,
    },
    {
      title: "COF",
      price: 174.55,
      change: -2.29,
    },
    {
      title: "COF",
      price: 174.55,
      change: 2.29,
    },
    {
      title: "COF",
      price: 174.55,
      change: -2.29,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>${profile.money}</Text>
        <Text style={styles.headerTitle}>Day {profile.day}</Text>
      </View>
      <View style={styles.midContainer}>
        <StockMarquee data={data} />
        <Text style={styles.headerTitle}>Hello {profile.name}!</Text>
        <View style={styles.catBackground}>
          <Image
            style={styles.catImage}
            source={require("../assets/Avatar1.png")}
          />
        </View>
        <Text style={styles.headerTitle}>{profile.occupation}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title="Go to Stock Screen"
          onPress={() => navigation.navigate("StockScreen")}
        />
        <Button
          title="Go to Dashboard Screen"
          onPress={() => navigation.navigate("DashboardScreen")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "#0F4471",
  },
  topContainer: {
    // backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    flex: 1,
  },
  midContainer: {
    // backgroundColor: "#FC3C3C",
    flex: 4,
    justifyContent: "space-between",
    alignItems: "center",
    // padding: 50,
  },
  bottomContainer: {
    flex: 1,
    // backgroundColor: "green",
    // alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    marginVertical: 40,
    // color: "#F6F6F6",
  },
  catImage: {
    flex: 1,
    aspectRatio: 0.7,
    resizeMode: "contain",
  },
  catBackground: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.5,
    borderColor:'#FC3C3C',
    backgroundColor: "#0F4471",
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // stockList: {
  //   backgroundColor: "#4F5E69",
  //   flex: 1,
  // },
});

export default ProfileScreen;
