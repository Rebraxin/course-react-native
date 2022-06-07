import { useLayoutEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { MealItem } from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverview = (props) => {
  const { route, navigation } = props;
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    );

    navigation.setOptions({
      title: categoryTitle.title,
    });
  }, [categoryId, navigation]);

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
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
