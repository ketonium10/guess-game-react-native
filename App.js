import React from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback, //returns nothing when touched
  Keyboard, //Keyboard api
  View,
} from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {/* close keyboard when touched outside */}
      <View style={styles.container}>
        <Header title="Guess a Number" />
        <StartGameScreen />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
