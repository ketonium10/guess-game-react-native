import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../constants/color";
const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 90,
    backgroundColor: Color.primary,
    padding: 36,
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontSize: 28,
  },
});
export default Header;
