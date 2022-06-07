import { useLayoutEffect } from "react";
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
import { MealInfos } from "../components/MealInfos";
import { Subtitle } from "../components/MealDetails/Subtitle";
import { List } from "../components/MealDetails/List";
import { IconButton } from "../components/IconButton";

const MealDetails = (props) => {
  const { route, navigation } = props;
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonPressHandler = () => {
    console.log("Pressed !");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Details",
      headerRight: () => (
        <IconButton
          icon='star'
          color={colors.WHITE}
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [navigation, headerButtonPressHandler]);

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
