/** MAIN SCREEN SHOWING THE GENERATED NUMBER AND LOWER AND GREATER BUTTONS */

import React, { useState, useRef, useEffect } from "react";
import { ScrollView, View, StyleSheet, Alert, Dimensions } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import generateNumber from "../constants/RandomNumberGenerator";
import TitleText from "../components/TitleText";
import CustomMainButton from "../components/CustomMainButton";
import { Ionicons } from "@expo/vector-icons";
import BodyText from "../components/TitleText";

const GameScreen = (props) => {
  const initialGuess = generateNumber(1, 100, props.userNumber);
  const [numberGuess, setNumberGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);

  //Constants defined using useRef, these are not de-allocated after re rendering of component
  const currentLower = useRef(1);
  const currentHigher = useRef(100);

  //using useEffect to trigger game over function whenever the value of currentGuess/userNumber/gameOver function changes
  useEffect(() => {
    if (numberGuess === props.userNumber) {
      props.onGameOver(rounds.length);
    }
  }, [numberGuess, props.userNumber, props.GameOver]);

  const guessNumberHandler = (direction) => {
    //an edge case to check if the user is cheating or not
    if (
      (direction == "lower" && props.userNumber > numberGuess) ||
      (direction == "greater" && props.userNumber < numberGuess)
    ) {
      return Alert.alert("DON'T CHEAT!!!", "You can never fool me...", [
        { text: "Sorry", style: "cancel" },
      ]);
    }

    //if value is lower set the upper bound else set the lower bound
    if (direction === "lower") currentHigher.current = numberGuess;
    else currentLower.current = numberGuess + 1;

    const newGuess = generateNumber(
      currentLower.current,
      currentHigher.current,
      numberGuess
    );
    setNumberGuess(newGuess); //generate a new number and set it
    setRounds((guess) => [newGuess, ...guess]); //add rounds in the list
  };

  return (
    <View style={styles.container}>
      <TitleText>Computer Guess is: </TitleText>
      <NumberContainer>{numberGuess}</NumberContainer>
      <Card styles={styles.buttonContainer}>
        <CustomMainButton onPress={() => guessNumberHandler("lower")}>
          <Ionicons name="md-remove" size={26} color="white" />
        </CustomMainButton>
        <CustomMainButton onPress={() => guessNumberHandler("greater")}>
          <Ionicons name="md-add" size={26} color="white" />
        </CustomMainButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {rounds.map((round, index) => (
            <View key={round} style={styles.listItem}>
              <BodyText>#{rounds.length - index}</BodyText>
              <BodyText>{round}</BodyText>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "80%",
    minWidth: Dimensions.get("window").width * 0.9,
  },
  listContainer: {
    width: "80%",
    flex: 1,
  },
  list: {
    flexGrow: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});
export default GameScreen;
