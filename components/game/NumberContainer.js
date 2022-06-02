import { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.SECONDARY_500,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    marginHorizontal: deviceWidth < 380 ? 12 : 24,
    marginBottom: deviceWidth < 380 ? 18 : 36,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.SECONDARY_500,
    fontSize: deviceWidth < 380 ? 18 : 36,
    fontFamily: "open-sans-bold",
  },
});
