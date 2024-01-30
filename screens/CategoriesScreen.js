import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import CategoriesGridTile from "../components/CategoriesGridTile";

function CategoriesScreen({ navigation }) {
  function renderCatItem(itemdata) {
    function Presshandler() {
      navigation.navigate("MealsOverview", {
        categoriesID: itemdata.item.id,
       
      });
    }

    return (
      <CategoriesGridTile
        title={itemdata.item.title}
        color={itemdata.item.color}
        onPress={Presshandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCatItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
