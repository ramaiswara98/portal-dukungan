import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = () => {
  return (
    <View
        style={styles.container}
    >
      <Text style={styles.text}>Tambah Relawan</Text>
    </View>
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