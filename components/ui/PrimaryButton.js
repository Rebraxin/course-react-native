import { View, Text, Pressable, StyleSheet } from "react-native";

import colors from "../../constants/colors";

export const PrimaryButton = (props) => {
  const { children, onPress } = props;

  return (
    <View style={styles.outterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={onPress}
        android_ripple={{ color: colors.PRIMARY_600 }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: colors.PRIMARY_500,
    elevation: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  text: {
    color: colors.WHITE,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
