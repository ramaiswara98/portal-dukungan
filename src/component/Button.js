import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = (props) => {
  return (
    <TouchableOpacity
        onPress={()=>{props.action()}}
        style={styles.container}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        borderRadius:20,
        backgroundColor:"#69C521",
        width:200,
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:"#000",
        textTransform:'uppercase',
        fontWeight:'bold'
    }
})