import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useState } from 'react'
export const FavoriteContext=createContext({
    ids: [],
    addFav:(id)=>{
    },
    removeFav:(id)=>{
    }
});
function FavContextProvider  ({children}) {
  const [FavMeal,setFavMeal]=useState([]);
  function addFavId(id){
    setFavMeal((currentMeal)=>[...currentMeal,id])
  }
  function removeFavorite(id) {
    setFavMeal((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }
  const value = {
    ids: FavMeal,
    addFav: addFavId,
    removeFav: removeFavorite,
  };
  return (

    <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
  )
}

export default FavContextProvider

const styles = StyleSheet.create({})