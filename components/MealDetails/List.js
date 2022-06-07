import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";

export const List = (props) => {
  const { data } = props;

  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    backgroundColor: colors.LIGHT_BROWN,
  },
  itemText: {
    color: colors.DARK_BROWN,
    textAlign: "center",
  },
});
