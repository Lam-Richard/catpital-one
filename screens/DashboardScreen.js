import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";

const DashboardScreen = ({ navigation }) => {
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

  const Ticker = ({ data }) => {
    const backgroundColor = data.upDown == "+" ? "aquamarine" : "red";
    return (
      <TouchableOpacity
        style={styles.ticker}
        onPress={() => {
          console.log("Pressed");
        }}
      >
        <Text>
          {data.company} ({data.ticker}){"\n"} 
          <Text style={{fontSize: 11, color: "gray"}}>{data.shares} shares</Text>
        </Text>
        <View>
          <Text style={{ fontWeight: "bold" }}>{data.lastPrice}</Text>
          <Text style={{ backgroundColor: backgroundColor }}>
            {" "}{data.upDown}
            {data.lastChange}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const SearchBar = () => {
    return (
      <TextInput
        placeholder={"Search for companies, articles, or symbols..."}
        style={styles.search}
      ></TextInput>
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
            colors={['#f6f6f6', '#eadaf4', '#efb9e4', '#f994c3', '#ff6c93', '#f45888', '#e8427d', '#dc2672', '#b0378b', '#7a4493', '#434889', '#0f4471']}
            style={styles.linearGradient}
          >
        <ScrollView style={styles.dashboard}>
          
          <Text style={{ textAlign: "left", marginVertical: "4%", fontSize: 24, fontWeight: "bold" }}>
            {" "}
            My Stocks
          </Text>
          {/* <ScrollView> */}
            <Ticker data={capitalOne}></Ticker>
            <Ticker data={capitalOne}></Ticker>
            <Ticker data={capitalOne}></Ticker>
            <Ticker data={capitalOne}></Ticker>
            <Ticker data={capitalOne}></Ticker>
            <Ticker data={capitalOne}></Ticker>
            <Ticker data={capitalOne}></Ticker>
            <Ticker data={capitalOne}></Ticker>
            <Ticker data={capitalOne}></Ticker>
            <Ticker data={capitalOne}></Ticker>
          {/* </ScrollView> */}
        </ScrollView>
        <Button
          title="Go to Stock Screen"
          onPress={() => navigation.navigate("Stock")}
        />
        <Button
          title="Go to Search Screen"
          onPress={() => navigation.navigate("Search")}
        />
        <Button
          title="Go to Profile Screen"
          onPress={() => navigation.navigate("Profile")}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "2%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
  },
  dashboard: {
    width: "96%",
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: 'black',
    marginBottom: "5%",
  },
  end_day: {
    height: "10%",
    width: "96%",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    marginBottom: "5%",
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  ticker: {
    width: "98%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "4%",
    paddingVertical: "3.5%",
    marginHorizontal: "1%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#c7c7c7",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
  }
});

export default DashboardScreen;
