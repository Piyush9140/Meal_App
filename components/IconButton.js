import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Ionicons } from '@expo/vector-icons'
function IconButton ({name,color,onPress}) {
  return (
    <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}> 
      <Ionicons name={name} color={color} size={30}></Ionicons>
      </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    pressed:{
        opacity:0.7,
    }
})