/** COMPONENT TO WRAP THE BUTTONS AND ALIGN THEM HORIZONTALY */
import React from "react";
import { View, StyleSheet } from "react-native";

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
