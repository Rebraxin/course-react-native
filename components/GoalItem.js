import { StyleSheet, View, Text, Pressable } from "react-native";

export const GoalItem = (props) => {
  const { itemData, onDeleteItem, id } = props;

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd50" }}
        onPress={onDeleteItem.bind(this, itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "#ffffff",
  },
});
