import React from "react";
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

const SearchScreen = ({ navigation }) => {
  const SearchBar = () => {
    return (
      <TextInput
        placeholder={"Search for companies, articles, or symbols..."}
        style={styles.search}
      ></TextInput>
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
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    //borderWidth: 1,
    paddingHorizontal: "5%",
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
    //borderStyle: "solid",
    //borderColor: "#c7c7c7",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

export default SearchScreen;
