import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
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
          <Text style={{ fontSize: 11, color: "gray" }}>
            {data.shares} shares
          </Text>
        </Text>
        <View>
          <Text style={{ fontWeight: "bold" }}>{data.lastPrice}</Text>
          <Text style={{ backgroundColor: backgroundColor }}>
            {" "}
            {data.upDown}
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
      <View style={styles.profileIconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            style={styles.profileIcon}
            source={require("../assets/profile-icon.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.dashboard}>
        <Text style={{ textAlign: "center", marginVertical: "4%" }}>
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
        <Button
          title="Go to Stock Screen"
          onPress={() => navigation.navigate("Stock")}
        />
        <Button
          title="Go to Search Screen"
          onPress={() => navigation.navigate("Search")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    overflow: "scroll",
  },
  profileIconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    // borderWidth: 1,
    // borderColor: "black",
    // borderStyle: "solid",
    width: "96%",
    paddingTop: 10,
  },
  profileIcon: {
    position: "relative",
    right: 0,
    resizeMode: "contain",
    width: 40,
    height: 40,
    // borderWidth: 1,
    // borderColor: "black",
  },
  dashboard: {
    width: "96%",

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
    borderColor: "#083358",
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default DashboardScreen;
