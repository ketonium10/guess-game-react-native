import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ButtonsContainer = (props) => (
  <View style={styles.buttonsContainer}>{props.children}</View>
);
const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});
export default ButtonsContainer;
