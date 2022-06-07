import {
  StyleSheet,
  Image,
  Pressable,
  Platform,
  Text,
  View,
} from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { MealInfos } from "./MealInfos";

export const MealItem = (props) => {
  const { id, title, imageUrl, duration, complexity, affordability } = props;

  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  };

  return (
    <View style={styles.root}>
      <View style={styles.mealItem}>
        <Pressable
          onPress={pressHandler}
          android_ripple={{ color: colors.RIPPLE }}
          style={({ pressed }) => pressed && styles.cardPressed}
        >
          <View style={styles.innerContainer}>
            <View>
              <Image source={{ uri: imageUrl }} style={styles.image} />
              <Text style={styles.title}>{title}</Text>
            </View>
            <MealInfos {...props} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    overflow: "hidden",
  },
  mealItem: {
    borderRadius: 8,
    backgroundColor: colors.WHITE,
    elevation: 4,
    shadowColor: colors.BLACK,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  cardPressed: {
    borderRadius: Platform.select({ ios: 8 }),
    backgroundColor: Platform.select({ ios: colors.RIPPLE }),
  },
  innerContainer: {
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    padding: 8,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 8,
    fontSize: 12,
  },
});
