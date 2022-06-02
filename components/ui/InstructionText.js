import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const InstructionText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  text: {
    color: colors.SECONDARY_500,
    fontFamily: "open-sans",
    fontSize: 24,
    marginBottom: 12,
  },
});
