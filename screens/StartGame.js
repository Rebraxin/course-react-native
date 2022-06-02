import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import colors from "../constants/colors";
import { Title } from "../components/ui/Title";
import { Card } from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Container } from "../components/ui/Container";

const StartGame = (props) => {
  const { onPickNumber } = props;

  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  const numberInputHandler = (input) => {
    setEnteredNumber(input);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <ScrollView style={styles.root}>
      <KeyboardAvoidingView style={styles.root} behavior='position'>
        <Container>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType='number-pad'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </Container>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  rootPortrait: {
    marginTop: 60,
  },
  rootLandscape: {
    marginTop: 40,
  },
  instructionText: {
    color: colors.SECONDARY_500,
    fontSize: 24,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 42,
    borderBottomColor: colors.SECONDARY_500,
    borderBottomWidth: 2,
    color: colors.SECONDARY_500,
    marginBottom: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
