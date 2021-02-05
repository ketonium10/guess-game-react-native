/**Start Game Screen shown at start of app */

import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Color from "../constants/color";
const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  //validation to not allow users to enter any character except 0-9
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card styles={styles.inputContainer}>
        <Text>Enter a number</Text>
        <Input
          styles={styles.input}
          keyboardType="number-pad"
          maxLength={2}
          value={enteredValue}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttons}>
            <Button title="Confirm" color={Color.primary} />
          </View>
          <View style={styles.buttons}>
            <Button title="Reset" color={Color.accent} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttons: {
    width: "40%",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});

export default StartGameScreen;
