import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import StockMarquee from "../components/StockMarquee";
import { auth } from "../firebase/firebase";

const ProfileScreen = ({ navigation }) => {
  const signOutUser = async () => {
    try {
      await auth.signOut();
      // navigation.navigate("Auth");
    } catch (e) {
      console.log(e);
    }
  };

  const [user, setUser] = useState({
    id: "NaN",
    username: "NaN",
    email: "NaN",
    createdAt: "NaN",
  });

  useEffect(() => {
    const { uid, displayName, email, metadata } = auth.currentUser;
    setUser({
      id: uid,
      username: displayName,
      email: email,
      createdAt: metadata.creationTime,
    });
  }, []);

  const profile = {
    name: "Sprinkles",
    money: 69.69,
    change: -6.9,
    day: 4,
    occupation: "Intern",
  };

  const data = [
    {
      title: "COF",
      price: 174.55,
      change: 2.29,
    },
    {
      title: "COF",
      price: 174.55,
      change: -2.29,
    },
    {
      title: "COF",
      price: 174.55,
      change: -2.29,
    },
    {
      title: "COF",
      price: 174.55,
      change: 2.29,
    },
    {
      title: "COF",
      price: 174.55,
      change: -2.29,
    },
    {
      title: "COF",
      price: 174.55,
      change: -2.29,
    },
    {
      title: "COF",
      price: 174.55,
      change: 2.29,
    },
    {
      title: "COF",
      price: 174.55,
      change: -2.29,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.topContainer, styles.subContainer]}>
        <View style={styles.topContent}>
          <Text style={{ fontSize: 18, color: "#083358" }}>Value</Text>
          <Text
            style={[
              styles.headerTitle,
              profile.change >= 0 ? { color: "green" } : { color: "red" },
            ]}
          >
            ${profile.money.toFixed(2)} ({profile.change.toFixed(2)}%)
          </Text>
        </View>
      </View>
      <View style={{ marginVertical: 10 }}>
        <StockMarquee data={data} />
      </View>
      <View style={[styles.midContainer, styles.subContainer]}>
        <View style={styles.midContent}>
          <Text style={styles.headerTitle}>Hello {user.username}!</Text>
          {/* <Text style={styles.headerTitle}>( {profile.occupation} )</Text> */}
        </View>
        <View style={[styles.midContent, styles.catImageContainer]}>
          <Image
            style={styles.catImage}
            source={require("../assets/Avatar1.png")}
          />
        </View>
        <View style={styles.midContent}>
          {/* <Text style={styles.info}>ID: {user.id}</Text> */}
          <Text style={styles.info}>Username: {user.username}</Text>
          <Text style={styles.info}>Email: {user.email}</Text>
          <Text style={styles.info}>Created Date: {user.createdAt}</Text>
        </View>
        <View style={styles.midContent}>
          <TouchableOpacity
            title="Logout"
            onPress={() => signOutUser()}
            style={{ alignItems: "center" }}
          >
            <Text style={{ fontSize: 18, color: "#083358", marginBottom: 5 }}>
              Logout
            </Text>
            <Image
              source={require("../assets/exit.png")}
              style={{ resizeMode: "contain", width: 22, height: 22 }}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  subContainer: {
    marginVertical: 10,
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "black",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  topContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  midContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "75%",
  },
  midContent: {
    alignItems: "center",
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "black",
  },
  profileInfo: {
    flexDirection: "column",
  },
  headerTitle: {
    fontSize: 20,
    // marginVertical: 40,
    color: "#083358",
    fontWeight: "bold",
  },
  info: {
    fontSize: 15,
  },
  catImageContainer: {
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").width * 0.5,
    borderColor: "#FC3C3C",
    backgroundColor: "#0F4471",
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  catImage: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
    // borderWidth: 1,
    // borderColor: "black",
  },
});

export default ProfileScreen;
