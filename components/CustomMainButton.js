import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Colors from "../constants/color";

const CustomMainButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Dimensions.get("window").width > 350 ? 12 : 6,
    paddingHorizontal: Dimensions.get("window").width > 350 ? 30 : 20,
    borderRadius: Dimensions.get("window").width > 350 ? 25 : 18,
  },
  buttonText: {
    color: "white",
    fontFamily: "OpenSans-Regular",
    fontSize: 18,
  },
});
export default CustomMainButton;
