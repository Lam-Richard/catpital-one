import { useNavigation } from "@react-navigation/native";
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

const DashboardScreen = ({ data }) => {
  const navigation = useNavigation();

  const facebook = {
    company: "Facebook",
    ticker: "FB",
    lastPrice: 362.65,
    lastChange: 2.69,
    percentChange: 0.75,
    upDown: "+",
    shares: 45,
    boughtPrice: 346.76,
  };

  const apple = {
    company: "Apple",
    ticker: "AAPL",
    lastPrice: 148.89,
    lastChange: 3.03,
    percentChange: 2.08,
    upDown: "+",
    shares: 35,
    boughtPrice: 138.29,
  };

  const amazon = {
    company: "Amazon",
    ticker: "AMZN",
    lastPrice: 3303.5,
    lastChange: 11.39,
    percentChange: 0.36,
    upDown: "+",
    shares: 5,
    boughtPrice: 2856.45,
  };

  const Ticker = ({ data }) => {
    const backgroundColor = data.upDown == "+" ? "aquamarine" : "red";
    return (
      <TouchableOpacity
        style={styles.ticker}
        onPress={() => {
          navigation.navigate("Stock", {
            data: data,
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
          <Ticker data={data}></Ticker>
          <Ticker data={facebook}></Ticker>
          <Ticker data={apple}></Ticker>
          <Ticker data={amazon}></Ticker>
          {/* <Ticker data={data}></Ticker>
          <Ticker data={data}></Ticker>
          <Ticker data={data}></Ticker>
          <Ticker data={data}></Ticker>
          <Ticker data={data}></Ticker>
          <Ticker data={data}></Ticker>
          <Ticker data={data}></Ticker>
          <Ticker data={data}></Ticker>
          <Ticker data={data}></Ticker> */}
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
