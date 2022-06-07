import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const Container = ({ children }) => {
  return <View style={styles.root}>{children}</View>;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 40,
  },
});
