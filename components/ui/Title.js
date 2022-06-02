import { Text, StyleSheet, Platform } from "react-native";
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
    // borderWidth: Platform.OS === "" ? 2 : 0,
    borderWidth: Platform.select({
      ios: 0,
      android: 2,
      macos: 0,
      web: 0,
      windows: 0,
    }),
    borderColor: colors.WHITE,
    padding: 12,
    marginBottom: 36,
    maxWidth: "80%",
    width: 300,
  },
});
