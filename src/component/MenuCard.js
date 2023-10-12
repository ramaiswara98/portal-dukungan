import { View, Text, Image,StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const MenuCard = (props) => {
  return (
    <View style={[styles.card, styles.shadowProp]}>
    <Image
        source={props.image}
          style={styles.image}
      />
      <View style={styles.textContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
    </View>
  )
}

export default MenuCard

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card:{
        width:windowWidth * 0.9,
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius:15,
        padding:20,
        marginBottom:5,
        marginTop:5
    },
    image:{
        height:64,
        width:64
    },
    textContainer:{
        marginLeft:20
    },
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: {width: 30, height: 40},
        shadowOpacity: 100,
        shadowRadius: 40,
      },
    title:{
        fontWeight:'bold',
        color:'#000000',
        fontSize:26
    },
    subtitle:{
        color:'#000000',
        fontSize:16
    }
})