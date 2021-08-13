import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { getAllAssets } from "../tradingApi/trading";
import { useNavigation } from "@react-navigation/native";

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

const SearchScreen = ({ data }) => {
  const navigation = useNavigation();

  const SearchBar = () => {
    const [query, setQuery] = useState("");
    return (
      <View style={{ alignItems: "center" }}>
        <TextInput
          placeholder={"Search for companies, articles, or symbols..."}
          style={styles.search}
          value={query}
          onChangeText={(value) => {
            setQuery(value);
          }}
        ></TextInput>
      </View>
    );
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

  return (
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
      <View style={styles.searchContainer}>
        <Text
          style={{
            textAlign: "left",
            marginVertical: "4%",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Search
        </Text>
        <SearchBar style={styles.search} />
        <Ticker data={data} />
        <Ticker data={facebook}></Ticker>
        <Ticker data={apple}></Ticker>
        <Ticker data={amazon}></Ticker>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    //borderWidth: 1,
    width: "98%",
    paddingHorizontal: "4%",
    height: "100%",
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  search: {
    // borderStyle: "solid",
    // borderColor: "#c7c7c7",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: "98%",
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
    marginTop: 5,
    backgroundColor: "white",
  },
});

export default SearchScreen;
