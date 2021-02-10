/** FIRST SCREEN OF THE GAME  */

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Alert,
  Keyboard,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import ButtonsContainer from "../components/ButtonsContainer";
import Card from "../components/Card";
import Input from "../components/Input";
import Color from "../constants/color";
import ConfirmInputScreen from "./ConfirmInputScreen";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmedNumber, setConfirmedNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);
  //validation to not allow users to enter any character except 0-9
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  //reset input
  const resetInputHandler = () => {
    setEnteredValue("");
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
    setConfirmedNumber(number);
    setEnteredValue("");
    setShowModal(true);
    Keyboard.dismiss();
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={20}>
        <View style={styles.container}>
          <ConfirmInputScreen
            show={showModal}
            number={confirmedNumber}
            reset={resetInputHandler}
            startGame={props.startGame}
          />
          <TitleText style={styles.title}>Start a New Game!</TitleText>
          <Card styles={styles.inputContainer}>
            <BodyText>Enter a number</BodyText>
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
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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
    width: "80%",
    minWidth: Dimensions.get("window").width * 0.9,
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
