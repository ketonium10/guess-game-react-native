/** A MODAL SCREEN SHOWING THE USER -  THE NUMBER THEY HAVE ENTERED AND WAITING FOR CONFIRMATION*/

import React from "react";
import { Modal, StyleSheet, Button, View } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import ButtonsContainer from "../components/ButtonsContainer";
import Color from "../constants/color";
import BodyText from "../components/BodyText";

const ConfirmInputScreen = (props) => (
  <Modal visible={props.show}>
    <View style={styles.container}>
      <Card styles={styles.summaryContainer}>
        <BodyText>You entered</BodyText>
        <NumberContainer>{props.number}</NumberContainer>
        <ButtonsContainer>
          <View style={styles.buttons}>
            <Button
              title="START GAME"
              color={Color.primary}
              onPress={() => props.startGame(props.number)}
            />
          </View>
          <View style={styles.buttons}>
            <Button
              title="CHANGE NUMBER"
              color={Color.accent}
              onPress={props.reset}
            />
          </View>
        </ButtonsContainer>
      </Card>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  summaryContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttons: {
    width: "40%",
  },
});
export default ConfirmInputScreen;
