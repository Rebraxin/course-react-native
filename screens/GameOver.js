import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import { Title } from "../components/ui/Title";
import colors from "../constants/colors";
import { PrimaryButton } from "../components/ui/PrimaryButton";

const GameOver = (props) => {
  const { roundsNumber, userNumber, onStartNewGame } = props;

  return (
    <View style={styles.root}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess
        the number <Text style={styles.highlightText}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginHorizontal: 36,
    borderWidth: 3,
    borderColor: colors.PRIMARY_800,
    overflow: "hidden",
    marginBottom: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    textAlign: "center",
    fontSize: 24,
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: colors.PRIMARY_500,
  },
});
