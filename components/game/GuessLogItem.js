import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

export const GuessLogItem = (props) => {
  const { roundNumber, guess } = props;

  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: colors.PRIMARY_800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginBottom: 8,
    backgroundColor: colors.SECONDARY_500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
