/**Start Game Screen shown at start of app */

import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Alert, Keyboard } from "react-native";
import ButtonsContainer from "../components/ButtonsContainer";
import Card from "../components/Card";
import Input from "../components/Input";
import Color from "../constants/color";
import ConfirmInputScreen from "./ConfirmInputScreen";

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedNumber, setConfirmedNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);
  //validation to not allow users to enter any character except 0-9
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  //reset input
  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
    setShowModal(false);
  };

  const confirmInputHandler = () => {
    const number = parseInt(enteredValue);
    //throw alert when any case fails
    if (number === 0) {
      Alert.alert("Invalid Number", "A number should be between 0 to 99", [
        { text: "Okay", style: "cancel", onPress: setEnteredValue("") },
      ]);
      return;
    }
    if (isNaN(number)) {
      Alert.alert("Blank Input", "Please enter a number between 0 to 99", [
        { text: "Okay", style: "default", onPress: setEnteredValue("") },
      ]);
      return;
    }
    setConfirmed(true);
    setConfirmedNumber(number);
    setEnteredValue("");
    setShowModal(true);
    Keyboard.dismiss();
  };

  let confirmedInput;
  if (confirmed) {
    confirmedInput = (
      <ConfirmInputScreen
        show={showModal}
        number={confirmedNumber}
        reset={resetInputHandler}
      />
    );
  }

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
        <ButtonsContainer>
          <View style={styles.buttons}>
            <Button
              title="Confirm"
              color={Color.primary}
              onPress={confirmInputHandler}
            />
          </View>
          <View style={styles.buttons}>
            <Button
              title="Reset"
              color={Color.accent}
              onPress={resetInputHandler}
            />
          </View>
        </ButtonsContainer>
      </Card>
      {confirmedInput}
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
