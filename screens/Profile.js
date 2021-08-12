import React from "react";
import { 
  Text, 
  View, 
  Button,
  StyleSheet,
  Image,
 } from "react-native";
import TextTicker from 'react-native-text-ticker'

const ProfileScreen = ({ navigation }) => {

  const profile = {
    name: "Sprinkles",
    money: 69.69,
    day: 4,
    occupation: "Intern",
  };


  const scrollingTicker = {
    tickers: ["COF", "TEST", "TEST"],
    prices: ["$174.55", "$1.00", "$69.69"],
    percentChange: ["+2.29", "-69.0", "$69.69"],
    isPositive: [true, false, true],
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>${profile.money}</Text>
        <Text style={styles.headerTitle}>Day {profile.day}</Text>
      </View>
      <View style={styles.midContainer}>
        <TextTicker
            style={{ fontSize: 24 }}
            scrollSpeed={30}
            animationType={"scroll"}
            loop
            bounce
            repeatSpacer={50}
            marqueeDelay={500}
          >
            <View style={styles.tickerView}>
              { scrollingTicker.tickers.map((item, key)=>(
                <Text key={key} style={scrollingTicker.isPositive[key] ? styles.positiveTicker : styles.negativeTicker}> 
                  {scrollingTicker.tickers[key]}   {scrollingTicker.prices[key]}   {scrollingTicker.percentChange[key]}
                </Text>)
              )}
            </View>
          
        </TextTicker>
        <Text style={styles.headerTitle}>Hello {profile.name}!</Text>
          <Image
            style={styles.catImage}
            source={require('../assets/Avatar1.png')}
          />
        <Text style={styles.headerTitle}>{profile.occupation} at Cat-pital One</Text>
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
    marginVertical: 40
    // color: "#F6F6F6",
  },
  catImage: {
    flex: 1,
    aspectRatio: 0.5,
    resizeMode: 'contain',
  },
  positiveTicker: {
    color: "green",
    fontSize: 24,
    marginHorizontal: 10,
  },
  negativeTicker: {
    color: "red",
    fontSize: 24,
    marginHorizontal: 10,
  },
  tickerView: {
    flexDirection: "row",
  }
});

export default ProfileScreen;