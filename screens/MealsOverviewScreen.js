import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {
  const ID = route.params.categoriesID;

  const DisplayMeal = MEALS.filter((mealitem) => {
    return mealitem.categoryIds.indexOf(ID) >= 0;
  });
  function renderMealItem(itemdata) {
    const item =itemdata.item;
    const mealItemProps = {
      title:item.title,
      ImageUrl:item.imageUrl,
      duration:item.duration,
      complexity:item.complexity,
      affordability:item.affordability,
    };
    return <MealItem {...mealItemProps}/>;
  }
  return (
    <View>
      <FlatList
        data={DisplayMeal}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
});