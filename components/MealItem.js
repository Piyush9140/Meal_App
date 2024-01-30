import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function MealItem({title,ImageUrl,duration,complexity,affordability}){
  return (
    <View>
     <Image source={{uri:ImageUrl}} style={styles.Image}/>
      <Text style={styles.title}>{title}</Text>
      <View>
        <Text>{duration} m</Text>
        <Text>{complexity.toUpperCase()}</Text>
        <Text>{affordability.toUpperCase()}</Text>
       </View>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    Image:{
        width:'100%',
        height:200,

    },
    title:{
        fontWeight:"bold",
        fontSize:16,
        textAlign:"center",
    }
})