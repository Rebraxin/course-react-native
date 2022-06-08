import { useLayoutEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Button,
} from "react-native";
import { colors } from "../constants/colors";
import { MEALS } from "../data/dummy-data";
import { Subtitle } from "../components/MealDetails/Subtitle";
import { List } from "../components/MealDetails/List";
import { IconButton } from "../components/IconButton";
import { MealInfos } from "../components/MealInfos";
// Context
// import { FavoritesContext } from "../store/context/favorites-context";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetails = (props) => {
  const { route, navigation } = props;
  const mealId = route.params.mealId;

  // Redux
  const favoriteMealRedux = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  // Context
  // const favoriteMealContext = useContext(FavoritesContext);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // Redux
  const mealIsFavorite = favoriteMealRedux.includes(mealId);
  // Context
  // const mealIsFavorite = favoriteMealContext.ids.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      // Redux
      dispatch(removeFavorite({ id: mealId }));
      // Context
      // favoriteMealContext.removeFavorite(mealId);
    } else {
      // Redux
      dispatch(addFavorite({ id: mealId }));
      // Context
      // favoriteMealContext.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "star" : "star-outline"}
          color={colors.WHITE}
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealInfos {...selectedMeal} textStyle={styles.mealInfosText} />

      <View style={styles.listOutterContainer}>
        <View style={styles.listInnerContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  root: {
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: colors.WHITE,
  },
  mealInfosText: {
    color: colors.WHITE,
  },
  listOutterContainer: {
    alignItems: "center",
  },
  listInnerContainer: {
    width: "80%",
  },
});
