import React from "react";
/** HEADER OF THE GAME */

import { View, StyleSheet } from "react-native";
import Color from "../constants/color";
import TitleText from "../components/TitleText";
const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <TitleText style={styles.headerText}>{props.title}</TitleText>
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
