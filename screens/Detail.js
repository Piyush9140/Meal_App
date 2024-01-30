import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealD from "../components/MealD";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";

function Detail({ route }) {
  const mealid = route.params.mealID;
  const selectedMeal = MEALS.find((meal) => meal.id == mealid);
  return (
    <ScrollView style={styles.rootContainer}>
    <View>
      <Image  style={styles.Image}  source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title} >{selectedMeal.title}</Text>
      <MealD
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <View style={styles.listouterContainer}>
      <View style={styles.listContainer}>
      <Subtitle>Ingredient</Subtitle>
      <List data={selectedMeal.ingredients}/>
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps}/>
      </View>
      </View>
     
      
    </View>
    </ScrollView>
  );
}

export default Detail;

const styles = StyleSheet.create({
  rootContainer:{
    marginBottom:32,
  },
  Image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    margin: 8,
  },
  listContainer:{
    width:'80%'
  },
  listouterContainer:{
    alignItems:'center'
  }
});
