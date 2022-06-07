import { StyleSheet, Pressable, Text, View, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../constants/colors";

export const CategoryGridTile = (props) => {
  const { title, color, onPress } = props;

  // No need to pass the navigation function from parents to children.
  // You can use the hook provided by @react-navigation/native
  const navigation = useNavigation();

  return (
    <View style={[styles.root, { backgroundColor: color }]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: colors.RIPPLE }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    overflow: Platform.select({ android: "hidden", ios: "visible" }),
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    borderRadius: Platform.select({ ios: 8 }),
    backgroundColor: Platform.select({ ios: colors.RIPPLE }),
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
