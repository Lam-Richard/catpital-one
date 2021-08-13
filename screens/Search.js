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
import SearchableDropdown from "react-native-searchable-dropdown";

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

const SearchScreen = ({ navigation }) => {
  const [assets, setAssets] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchAssets() {
      const response = await getAllAssets();
      return response;
    }
    fetchAssets().then((data) => setAssets(data));
  }, []);

  // useEffect(()=> {
  //   console.log("Assets:", assets);
  // },[assets])

  const capitalOne = {
    company: "Capital One",
    ticker: "COF",
    lastPrice: 174.55,
    lastChange: 3.91,
    percentChange: 2.29,
    upDown: "+",
    shares: 0,
    boughtPrice: 8.31,
  };

  const facebook = {
    company: "Facebook",
    ticker: "FB",
    lastPrice: 362.65,
    lastChange: 2.69,
    percentChange: 0.75,
    upDown: "+",
    shares: 0,
  };

  const apple = {
    company: "Apple",
    ticker: "AAPL",
    lastPrice: 148.89,
    lastChange: 3.03,
    percentChange: 2.08,
    upDown: "+",
    shares: 0,
  };

  const amazon = {
    company: "Amazon",
    ticker: "AMZN",
    lastPrice: 3303.5,
    lastChange: 11.39,
    percentChange: 0.35,
    upDown: "+",
    shares: 0,
  };

  const SearchBar = ({ assets }) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const Result = ({ asset }) => {
      return (
        <TouchableOpacity style={styles.ticker}>
          <Text>
            {asset.name} ({asset.symbol})
          </Text>
        </TouchableOpacity>
      );
    };

    function changeResults() {
      if (query != "" && assets != []) {
        console.log(assets[0].symbol);
        // console.log("RESULT:", result);
        // setResults(result);
      } else {
        setResults([]);
      }
    }

    useEffect(() => {
      changeResults();
    }, [query]);

    return (
      <View style={{ alignItems: "center" }}>
        <TextInput
          placeholder={"Search for companies, articles, or symbols..."}
          style={styles.search}
          onChangeText={(value) => {
            setQuery(value);
          }}
        ></TextInput>
        <Ticker data={capitalOne}></Ticker>
        <Ticker data={facebook}></Ticker>
        <Ticker data={apple}></Ticker>
        <Ticker data={amazon}></Ticker>
      </View>

      // <SearchableDropdown items={assets} >

      // </SearchableDropdown>
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
        <SearchBar assets={assets} style={styles.search} />
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
