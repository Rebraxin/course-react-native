import { useState, useEffect } from "react";
import {
  Alert,
  View,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { NumberContainer } from "../components/game/NumberContainer";
import { Card } from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { PrimaryButton } from "../components/ui/PrimaryButton";

import { Title } from "../components/ui/Title";
import colors from "../constants/colors";
import { GuessLogItem } from "../components/game/GuessLogItem";
import { Container } from "../components/ui/Container";

const generateRandomNumber = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  }

  return rndNum;
};

let minBoundary = 1;
let maxBoundary = 100;

const Game = (props) => {
  const { userNumber, onGameOver } = props;

  const { width, height } = useWindowDimensions();

  const initialGuess = generateRandomNumber(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  };

  const guessRoundsListLength = guessRounds.length;

  return (
    <Container>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or lower ?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name='md-remove' size={24} color={colors.WHITE} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name='md-add' size={24} color={colors.WHITE} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </Container>
  );
};

export default Game;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 100,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
