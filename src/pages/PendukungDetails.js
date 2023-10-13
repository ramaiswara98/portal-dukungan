import { Text, StyleSheet, View, Image,Dimensions } from 'react-native'
import React, { Component } from 'react'
import TitleBar from '../component/TitleBar'
import Button from '../component/Button'

export default class PendukungDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
            <TitleBar
                title={'Pendukung'}
            />
        </View>
        <View style={styles.image_container}>
            <Image
                    source={{uri:"https://i0.wp.com/fisip.umrah.ac.id/wp-content/uploads/2022/12/placeholder-2.png?fit=1200%2C800&ssl=1"}}
                    style={styles.image}
                />
        </View>
        <View style={styles.info_card}>
            <Text style={styles.judul}>Nama</Text>
            <Text style={styles.jawaban}>Relawan 1</Text>
            <Text style={styles.judul}>Alamat</Text>
            <Text style={styles.jawaban}>Jl Gunadarma No.12</Text>
            <Text style={styles.judul}>Wilayah Pemilihan</Text>
            <Text style={styles.jawaban}>Ranca Bebek</Text>
            <Text style={styles.judul}>Nomor Handphone</Text>
            <Text style={styles.jawaban}>081243434533</Text>
            <Text style={styles.judul}>Status</Text>
            <Text style={styles.jawaban}>Belum Memilih</Text>
        </View>
      </View>
    )
  }
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignContent:"center",
        alignItems:"center"
    },
    image:{
        width:72,
        height:72
    },
    image_container:{
        justifyContent:"center",
        alignItems:"center",
        alignContent:'center'
    },
    info_card:{
        width:windowWidth*0.9,
        borderRadius:15,
        backgroundColor:'white',
        padding:10,
        marginTop:20,
    },
    judul:{
       
        color:'black'
    },
    jawaban:{
        fontWeight:'bold',
        color:'black',
        fontSize:18,
        marginBottom:20
    },
    info_card:{
        width:windowWidth*0.9,
        borderRadius:15,
        backgroundColor:'white',
        padding:10,
        marginTop:20,
    },
})