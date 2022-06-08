import { useLayoutEffect } from "react";
import { MealsList } from "../components/MealsList/MealsList";
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

  return <MealsList items={displayedMeals} />;
};

export default MealsOverview;
