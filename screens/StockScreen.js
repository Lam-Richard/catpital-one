import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { LinearGradient } from 'expo-linear-gradient';

const StockScreen = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={{ fontSize: 30 }}>
          {data.company} ({data.ticker}) &nbsp;
        </Text>
      </View>
      <View style={styles.graph}>
        <Text>A stock graph will probably go here</Text>
      </View>
      <Text style={styles.place}>Place an Order</Text>

      <View style={styles.process}>
        <View style={styles.pickers}>
          <RNPickerSelect
            autosize={false}
            onValueChange={(value) => {
              console.log(value);
            }}
            // Will probably need to see what Alpaca supports
            items={[
              { label: "Buy", value: "Buy" },
              { label: "Sell", value: "Sell" },
            ]}
          ></RNPickerSelect>
        </View>
        <TextInput
          style={styles.pickers}
          placeholder={"# of shares..."}
        ></TextInput>
        <TouchableOpacity
          style={styles.submit}
          onPress={() => {
            console.log("submit");
          }}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: "5%" }}>
        {data !== {} ? (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ marginRight: "10%", backgroundColor: "white"}}>
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
                {data.lastChange} ({data.upDown}
                {data.percentChange}%)
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
      <Button
        title="Go to Dashboard Screen"
        onPress={() => navigation.navigate("DashboardScreen")}
      />
      <Button
        title="Go to Profile Screen"
        onPress={() => navigation.navigate("ProfileScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    paddingTop: "20%",
    paddingHorizontal: "5%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
  },
  banner: {
    flexDirection: "row",
    alignItems: "center",
  },
  graph: {
    marginTop: "5%",
    marginBottom: "1%",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    height: "40%",
    width: "98%",
  },
  pickers: {
    width: "33%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    marginRight: "1%",
  },
  process: {
    width: "98%",
    flexDirection: "row",
    height: "5%",
    marginBottom: "5%",
  },
  place: {
    width: "98%",
    textAlign: "center",
    marginTop: "2%",
    marginBottom: "2%",
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
  submit: {
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    width: "30%",
  },
});

export default StockScreen;
