import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
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
import RNPickerSelect from "react-native-picker-select";
import { buySell } from "../tradingApi/trading";

const StockScreen = ({ data }) => {
  const navigation = useNavigation();
  const [shares, setShares] = useState(10);
  const [symbol, setSymbol] = useState("AAPL");
  const [side, setSide] = useState(null);

  async function placeOrder() {
    if (side != null && !isNaN(shares)) {
      console.log({
        symbol,
        shares,
        side: side.toLowerCase(),
      });
      const response = await buySell(symbol, shares, side.toLowerCase());
      console.log(response);
      return response;
    }
  }

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
        <View style={styles.banner}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#0F4471" }}>
            {data.company} ({data.ticker}) &nbsp;
          </Text>
        </View>
        <View style={styles.graphContainer}>
          <Image
            style={styles.stockGraph}
            source={require("../assets/stockgraph2.png")}
          />
        </View>
        <Text style={styles.place}>Your Position</Text>
        <View style={{ marginBottom: "5%" }}>
          {data !== {} ? (
            <View style={styles.positionContainer}>
              <View style={{ marginRight: "10%", backgroundColor: "white" }}>
                <Text>Shares owned: {data.shares}</Text>
                <Text>Bought price: ${data.boughtPrice}</Text>
                <Text>Daily Gain/Loss: ${data.lastChange * data.shares}</Text>
                <Text>
                  Total Gain/Loss: $
                  {(data.lastPrice - data.boughtPrice) * data.shares}
                </Text>
              </View>
              <View>
                <Text>Last Price: ${data.lastPrice}</Text>
                <Text>
                  Last Change: {data.upDown}
                  {data.lastChange}
                </Text>
                <Text>
                  Change %: {data.upDown}
                  {data.percentChange}%
                </Text>
                <Text>Net Worth: ${data.lastPrice * data.shares}</Text>
              </View>
            </View>
          ) : (
            <View>
              <Text>Last Price: ${data.lastPrice}</Text>
              <Text>
                Last Change: {data.upDown}
                {data.lastChange} ({data.upDown}
                {data.percentChange}%)
              </Text>
            </View>
          )}
        </View>
        <Text style={styles.place}>Trade</Text>
        <View style={styles.process}>
          <View style={styles.pickers}>
            <RNPickerSelect
              autosize={false}
              onValueChange={(value) => {
                setSide(value);
                console.log(side);
              }}
              // Simplify to buy/sell on market/day
              items={[
                { label: "Buy", value: "Buy" },
                { label: "Sell", value: "Sell" },
              ]}
            ></RNPickerSelect>
          </View>
          <TextInput
            style={styles.pickers}
            placeholder={"# of shares"}
            onChangeText={(value) => {
              setShares(parseInt(value));
              console.log(shares);
            }}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={styles.submit}
          onPress={async () => {
            placeOrder();
          }}
        >
          <Text
            style={{ color: "#fff", letterSpacing: 1.5, fontWeight: "500" }}
          >
            Place Order
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    fontSize: 16,
  },
  banner: {},
  graphContainer: {
    position: "relative",
    backgroundColor: "#fff",
    marginTop: "5%",
    marginBottom: "1%",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#c7c7c7",
    height: "40%",
    width: "98%",
  },
  stockGraph: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  pickers: {
    width: "50%",
    // padding: 10,
    paddingHorizontal: "3%",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#c7c7c7",
    marginRight: "1%",
    backgroundColor: "#fff",
  },
  process: {
    width: "98%",
    flexDirection: "row",
    height: "5%",
    marginBottom: "5%",
  },
  positionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: "3%",
    paddingVertical: "3%",
    borderRadius: 5,
  },
  place: {
    width: "98%",
    marginTop: "2%",
    marginBottom: "2%",
    fontSize: 20,
    color: "#0F4471",
    fontWeight: "500",
  },
  linearGradient: {
    height: "100%",
    width: "100%",
    paddingHorizontal: "3%",
    paddingVertical: "5%",
  },
  submit: {
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#c7c7c7",
    width: "100%",
    backgroundColor: "#0F4471",
    paddingHorizontal: "3%",
    paddingVertical: "4%",
    marginTop: 5,
    color: "#fff",
  },
});

export default StockScreen;
