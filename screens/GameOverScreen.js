/** LAST SCREEN OF THE GAME  */

import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import Colors from "../constants/color";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import CustomMainButton from "../components/CustomMainButton";
const GameOverScreen = (props) => (
  <View style={styles.container}>
    <TitleText style={{ fontSize: 26 }}>GAME OVER!</TitleText>
    <View style={styles.imageContainer}>
      <Image source={require("../assets/success.png")} style={styles.image} />
    </View>
    <View style={styles.resultContainer}>
      <BodyText style={styles.resultText}>
        Your phone took <Text style={styles.highlight}>{props.noOfRounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </BodyText>
    </View>
    <CustomMainButton onPress={props.onRestart}>PLAY AGAIN!</CustomMainButton>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width:
      Dimensions.get("window").width > 500
        ? Dimensions.get("window").width * 0.4
        : Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").height * 0.4,
    borderRadius: Dimensions.get("window").width * 0.6,
    borderWidth: 3,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height > 600 ? 20 : 5,
    borderColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
  resultContainer: {
    marginHorizontal: 20,
  },
  highlight: {
    color: Colors.primary,
  },
});
export default GameOverScreen;
