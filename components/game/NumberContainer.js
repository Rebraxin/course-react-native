import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.SECONDARY_500,
    padding: 24,
    borderRadius: 8,
    marginHorizontal: 24,
    marginBottom: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.SECONDARY_500,
    fontSize: 24,
    fontFamily: "open-sans-bold",
  },
});
