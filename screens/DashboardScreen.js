import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
// import { getPositions, getOrders, getAccountData, getActiveAssets, buySell  } from '../tradingApi/trading';

const DashboardScreen = ({ navigation }) => {
  const capitalOne = {
    company: "Capital One",
    ticker: "COF",
    lastPrice: 174.55,
    lastChange: 3.91,
    percentChange: 2.29,
    upDown: "+",
    shares: 100,
    boughtPrice: 8.32,
  };

  const Ticker = ({ data }) => {
    const backgroundColor = data.upDown == "+" ? "aquamarine" : "red";
    return (
      <TouchableOpacity
        style={styles.ticker}
        onPress={() => {
          navigation.navigate("Stock", {
            data: capitalOne,
          });
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

  // const SearchBar = () => {
  //   return (
  //     <TextInput
  //       placeholder={"Search for companies, articles, or symbols..."}
  //       style={styles.search}
  //     ></TextInput>
  //   );
  // };

  useEffect(() => {
    // async function fetchData() {
    //   const response = await getPositions();
    //   console.log(response);
    // }
    // fetchData()
    // return () => {
    //   console.log("Unmounting...");
    // }
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "#f6f6f6",
          "#eadaf4",
          "#efb9e4",
          "#f994c3",
          "#ff6c93",
          "#f45888",
          "#e8427d",
          "#dc2672",
          "#b0378b",
          "#7a4493",
          "#434889",
          "#0f4471",
        ]}
        style={styles.linearGradient}
      >
        <View style={styles.header}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#0F4471" }}>
            My Stocks
          </Text>
        </View>
        <ScrollView style={styles.dashboard}>
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
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "black",
    overflow: "scroll",
  },
  header: {
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "black",
    // borderStyle: "solid",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 15,
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
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: 'black',
    // marginBottom: "5%",
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
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 5,
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
  },
});

export default DashboardScreen;
