import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function MealItem({title,ImageUrl,duration,complexity,affordability}){
  return (
    <View style={styles.MealItem} >
        <Pressable android_ripple={{color:'#ccc'}}>
     <Image source={{uri:ImageUrl}} style={styles.Image}/>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailsItem}>{duration} m</Text>
        <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
       </View>
       </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    MealItem:{
    margin:16,
    borderRadius:8,
    overflow:'hidden',
    backgroundColor:'white',
    elevation:4

    },
    Image:{
        width:'100%',
        height:200,

    },
    title:{
        fontWeight:"bold",
        fontSize:16,
        textAlign:"center",
        margin:8,
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"center",
        padding:8,
    },
    detailsItem:{
        marginHorizontal:4,
        fontSize:12
    }
})