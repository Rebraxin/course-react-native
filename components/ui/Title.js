import { Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../../constants/colors";

export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: colors.WHITE,
    textAlign: "center",
    borderWidth: 2,
    borderColor: colors.WHITE,
    padding: 12,
    marginBottom: 36,
  },
});
