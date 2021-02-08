/** COMPONENT TO GENERATE TEXT WITH OPENSANS FONT */

import React from "react";
import { Text, StyleSheet } from "react-native";

const BodyText = ({ children, style }) => (
  <Text style={{ ...styles.Body, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  Body: {
    fontFamily: "OpenSans-Bold",
  },
});
export default BodyText;
