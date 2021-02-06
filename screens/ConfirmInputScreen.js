import React from "react";
import { Text, Modal, StyleSheet, Button, View } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";
import ButtonsContainer from "../components/ButtonsContainer";
import Color from "../constants/color";
const ConfirmInputScreen = (props) => (
  <Modal visible={props.show} style={styles.container}>
    <Card styles={styles.summaryContainer}>
      <Text>You entered</Text>
      <NumberContainer>{props.number}</NumberContainer>
      <ButtonsContainer>
        <View style={styles.buttons}>
          <Button title="START GAME" color={Color.primary} />
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
  </Modal>
);
const styles = StyleSheet.create({
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  buttons: {
    width: "40%",
  },
  container: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
export default ConfirmInputScreen;
