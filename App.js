import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback, //returns nothing when touched
  Keyboard, //Keyboard api
  View,
} from "react-native";
import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [number, setNumber] = useState(); //User Input Number
  const [rounds, setRounds] = useState(0);

  //Loading fonts
  const [loaded] = useFonts({
    "OpenSans-Regular": require("./assets/Fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("./assets/Fonts/OpenSans-Bold.ttf"),
  });

  //If no fonts are generated then return an error
  if (!loaded) {
    return null;
  }
  //Function to restart game
  const onRestartHandler = () => {
    setNumber(null);
    setRounds(0);
  };

  //Function for startGame to set inputs
  const startGameHandler = (userNumber) => {
    setNumber(userNumber);
    setRounds(0);
  };

  //Function for End game to set rounds
  const gameOverHandler = (rounds) => {
    setRounds(rounds);
  };

  //Inital screen
  let content = <StartGameScreen startGame={startGameHandler} />;

  //Conditional operator used as an alternative to navigation
  if (number && rounds == 0) {
    content = <GameScreen userNumber={number} onGameOver={gameOverHandler} />;
  } else if (rounds > 0) {
    content = (
      <GameOverScreen
        noOfRounds={rounds}
        userNumber={number}
        onRestart={onRestartHandler}
      />
    );
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
