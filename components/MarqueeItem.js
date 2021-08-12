import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const MarqueeItem = (props) => {
  const { title, price, change, isGain, itemWidth, style } = props;
  return (
    <View style={[styles.item, { width: itemWidth }, style]} key={title}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.horizontal}>
        <Text style={styles.text}>{price.toFixed(2)}</Text>
        <Text style={[styles.textLight, isGain ? styles.gain : styles.loss]}>
          {change.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
    marginLeft: 7,
    marginRight: 7,
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 1,
  },
  horizontal: {
    flexDirection: "row",
    alignItems: "flex-end",
    // marginBottom: 8,
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold",
  },
  textLight: {
    color: "#fff",
    fontSize: 10,
    marginLeft: 4,
    paddingBottom: 2,
    fontWeight: "bold",
  },
  gain: {
    color: "#15a767",
  },
  loss: {
    color: "#D35C6D",
  },
});

MarqueeItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  change: PropTypes.number,
  itemWidth: PropTypes.number,
  isGain: PropTypes.bool,
};

MarqueeItem.defaultProps = {
  title: "",
  price: 0,
  change: 0,
  isGain: false,
  itemWidth: 0,
};

export default MarqueeItem;
