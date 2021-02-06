import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const generateNumber = (min, max, exclude) => {
  min = min?.ceil();
  max = max?.floor();
  const rndNum = Math.random() * (max - min) - min;
  if (rndNum === exclude) {
    return generateNumber(min, max, exclude);
  }
  return rndNum;
};

const GameScreen = (props) => {
  const [numberGuess, setNumberGuess] = useState(
    generateNumber(1, 100, props.userNumber)
  );
  return (
    <View>
      <Text>Computer Guess is: </Text>
      <NumberContainer>{numberGuess}</NumberContainer>
      <Card>
        <Button title="LESSER" />
        <Button title="GREATER" />
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({});
export default GameScreen;
