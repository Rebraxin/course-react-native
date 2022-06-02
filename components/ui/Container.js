import { StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";

export const Container = ({ children }) => {
  const { height } = useWindowDimensions();

  return (
    <View
      style={[
        styles.root,
        height < 380 ? styles.rootLandscape : styles.rootPortrait,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
  },
  rootPortrait: {
    marginTop: 60,
  },
  rootLandscape: {
    marginTop: 40,
  },
});
