import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";

export const Subtitle = (props) => {
  const { children } = props;

  return (
    <View style={styles.outterContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outterContainer: {
    alignItems: "center",
  },
  innerContainer: {
    borderBottomColor: colors.LIGHT_BROWN,
    borderBottomWidth: 2,
    padding: 5,
    marginVertical: 10,
    width: "100%",
  },
  subtitle: {
    textAlign: "center",
    color: colors.LIGHT_BROWN,
    fontSize: 18,
    fontWeight: "bold",
  },
});
