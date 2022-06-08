import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import { MealsList } from "../components/MealsList/MealsList";
import { colors } from "../constants/colors";
// Redux
import { useSelector } from "react-redux";
// Context
// import { useContext } from "react";
// import { FavoritesContext } from "../store/context/favorites-context";

const Favorites = () => {
  // Redux
  const favoriteMealRedux = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealRedux.includes(meal.id)
  );

  // Context
  // const favoriteMealsContext = useContext(FavoritesContext);

  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoriteMealsContext.ids.includes(meal.id)
  // );

  if (!favoriteMeals.length) {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default Favorites;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: colors.WHITE,
    fontWeight: "bold",
  },
});
