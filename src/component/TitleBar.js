import { Image, StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import BackButton from '../assets/back_btn.png'

const TitleBar = (props) => {
  return (
    <View style={styles.container}>
        <Image
            source={BackButton}
            style={styles.back_btn}
        />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

export default TitleBar
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:45,
        alignItems:'center',
        flexDirection:'row',
        textAlign:'center',
        padding:5,
        marginBottom:15,
        width:windowWidth
    },
    back_btn:{
        width:32,
        height:32
    },
    title:{
        margin:'auto',
        textAlign:'center',
        fontWeight:'bold',
        color:"#000",
        width:windowWidth * 0.8,
        textTransform:'uppercase',
        fontSize:18
    }
})