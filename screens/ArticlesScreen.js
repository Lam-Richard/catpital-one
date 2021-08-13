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


const ArticlesScreen = ({ navigation }) => {
  const investing101 = {
    name: "Investing 101",
    source: "Nerd Wallet",
    uri: 'https://www.nerdwallet.com/article/investing/investing-101',
    read: "y"
  };

  const netWorthTips = {
    name: "Tips for How to Increase Your Net Worth",
    source: "Investopedia",
    uri: "https://www.investopedia.com/financial-edge/1212/6-tips-for-increasing-your-net-worth.aspx",
    read: "n"
  };

  const netWorth5Ways = {
    name: "5 Simple Ways to Increase Your Net Worth",
    source: "The Balance",
    uri: "https://www.thebalance.com/increase-net-worth-1289573",
    read: "n"
  };

  const stocksBeginners = {
    name: "How to Invest in Stocks for Beginners",
    source: "US News - Money",
    uri: "https://money.usnews.com/investing/investing-101/articles/investing-in-stocks-for-beginners",
    read: "y"
  };


  const Article = ({ data }) => {
    const backgroundColor = data.read == "y" ? "aquamarine" : "red";
    return (
      <TouchableOpacity
        style={styles.ticker}
        onPress={() => {
            console.log("Articles List: ", data)
            data.read = 'y' // idk if this has to be a state thing
           navigation.navigate("ArticleSingle", {
             data: investing101, // passes as undefined for some reason
           });
        }}
      >
        <Text>
          {data.name}{"\n"}
          <Text style={{ fontSize: 11, color: "gray" }}>
            Source: {data.source}
          </Text>
        </Text>
        <View>
          <Text style={{ backgroundColor: backgroundColor }}>
            {data.read == "y" ? "Read" : "Not Read"}
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
            My Articles
          </Text>
        </View>
        <ScrollView style={styles.dashboard}>
          {/* <ScrollView> */}
          <Article data={investing101}></Article>
          <Article data={netWorthTips}></Article>
          <Article data={netWorth5Ways}></Article>
          <Article data={stocksBeginners}></Article>
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

export default ArticlesScreen;
