import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import { MealItem } from "./MealItem";

export const MealsList = (props) => {
  const { items } = props;

  const renderMealItem = (itemData) => {
    return (
      <View>
        <MealItem {...itemData.item} />
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
