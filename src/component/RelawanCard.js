import { Image, StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import Button from './Button'

const RelawanCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
        source={{uri:"https://i0.wp.com/fisip.umrah.ac.id/wp-content/uploads/2022/12/placeholder-2.png?fit=1200%2C800&ssl=1"}}
        style={styles.image}
        />
        <View style={styles.text_container}>
            <Text>Relawan 1</Text>
            <Text>Dukungan : 30 Suara</Text>
        </View>
      </View>
      <View style={styles.button_container}>
        <View style={styles.edit_btn}>
            <Text style={styles.button_text}>Edit</Text>
        </View>
        <View style={styles.hapus_btn}>
            <Text style={styles.button_text}>hapus</Text>
        </View>
      {/* <Button
            text='Edit'
            width={30}
            background={'#69C521'}
            color={'#000'}
       />
       <Button
            text='Hapus'
            width={30}
            background={'#69C521'}
            color={'#000'}
       /> */}
            
      </View>
    </View>
  )
}

export default RelawanCard
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container:{
        width:windowWidth *0.9,
        flexDirection:'row'
    },
    card:{
        backgroundColor:'white',
        flexDirection:'row',
        padding:10,
        borderRadius:15,
        width:windowWidth *0.7,
        marginRight:10
    },
    image:{
        width:52,
        height:52,
        marginRight:10
    },
    edit_btn:{
        backgroundColor:'#EBBA3E',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:15,
        marginBottom:5
    },
    hapus_btn:{
        backgroundColor:'#EB4343',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:15
    },
    button_text:{
        color:"#000",
        fontWeight:'bold',
        textTransform:"uppercase"
    }
})