import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import StockMarquee from "../components/StockMarquee";
import { auth } from "../firebase/firebase";
import { LinearGradient } from 'expo-linear-gradient';

const ProfileScreen = () => {
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
      <LinearGradient
            colors={['#f6f6f6', '#eadaf4', '#efb9e4', '#f994c3', '#ff6c93', '#f45888', '#e8427d', '#dc2672', '#b0378b', '#7a4493', '#434889', '#0f4471']}
            style={styles.linearGradient}
          >
            <View style={[styles.topContainer, styles.subContainer]}>
              <View style={styles.topContent}>
                <Text style={{ fontSize: 18 }}>Value</Text>
                <Text
                  style={[
                    styles.headerTitle,
                    profile.change >= 0 ? { color: "green" } : { color: "red" },
                  ]}
                >
                  ${profile.money.toFixed(2)} ({profile.change.toFixed(2)}%)
                </Text>
              </View>
              <View style={styles.topContent}>
                <Text style={{ fontSize: 18 }}>Day</Text>
                <Text style={styles.headerTitle}>{profile.day}</Text>
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
              <View style={styles.bottomContent}>
                <Text style={styles.info}>ID: {user.id}</Text>
                <Text style={styles.info}>Username: {user.username}</Text>
                <Text style={styles.info}>Email: {user.email}</Text>
                <Text style={styles.info}>Created Date: {user.createdAt}</Text>
              </View>
            </View>
      </LinearGradient>
      
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
    justifyContent: "space-between",
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
    height: "70%",
  },
  midContent: {
    alignItems: "center",
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "black",
  },
  bottomContent: {
    alignItems: "center",
    backgroundColor: "white",
  },
  profileInfo: {
    flexDirection: "column",
  },
  headerTitle: {
    fontSize: 20,
    // marginVertical: 40,
    color: "#000",
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
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: "100%",
    width: "100%",
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
