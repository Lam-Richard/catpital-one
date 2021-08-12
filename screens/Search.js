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
        <View style={styles.searchContainer}>
            <Text style={{ textAlign: "left", marginVertical: "4%", fontSize: 24, fontWeight: "bold" }}>
            Search
            </Text>
            <SearchBar style={styles.search}/>
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: "#fff",
        borderWidth: 1,
        paddingHorizontal: "5%",
        height: "100%"
    },
    search: {
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderColor: "#c7c7c7",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 16,
      },
})

export default SearchScreen;
