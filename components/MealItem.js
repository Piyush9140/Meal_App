import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Detail from "../screens/Detail";
import MealD from "./MealD";

function MealItem({
  Id,
  title,
  ImageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  function SelectMealItemHandler() {
    navigation.navigate("Mealdetailscreen", {
      mealID: Id,
    });
  }
  return (
    <View style={styles.MealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={SelectMealItemHandler}
      >
        <Image source={{ uri: ImageUrl }} style={styles.Image} />
        <Text style={styles.title}>{title}</Text>
        <MealD
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  MealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  Image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    margin: 8,
  },
});
