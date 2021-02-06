import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback, //returns nothing when touched
  Keyboard, //Keyboard api
  View,
} from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  const [number, setNumber] = useState();

  const startGameHandler = (userNumber) => {
    setNumber(userNumber);
  };
  let content = <StartGameScreen startGame={startGameHandler} />;

  if (number) {
    content = <GameScreen userNumber={number} />;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {/* close keyboard when touched outside */}
      <View style={styles.container}>
        <Header title="Guess a Number" />
        {content}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
