import { Text, StyleSheet, View, Image,Dimensions, ScrollView } from 'react-native'
import React, { Component } from 'react'
import TitleBar from '../component/TitleBar'
import PendukungCard from '../component/PendukungCard';

export default class RelawanDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
         <TitleBar
        title={'Relawan 1'}
       
       />
       <View style={styles.image_container}>
       <Image
            source={{uri:"https://i0.wp.com/fisip.umrah.ac.id/wp-content/uploads/2022/12/placeholder-2.png?fit=1200%2C800&ssl=1"}}
            style={styles.image}
        />
        </View>

        <View style={styles.tab_container}>
            <View style={styles.tab_button}>
                <Text style={styles.text_button}>INFO</Text>
            </View>
            <View style={styles.tab_button}>
                <Text style={styles.text_button}>PENDUKUNG</Text>
            </View>
        </View>

        {/* <View id='infor_card' style={styles.info_card}>
            <Text style={styles.judul}>Nama</Text>
            <Text style={styles.jawaban}>Relawan 1</Text>
            <Text style={styles.judul}>Alamat</Text>
            <Text style={styles.jawaban}>Jl Gunadarma No.12</Text>
            <Text style={styles.judul}>Nomor Handphone</Text>
            <Text style={styles.jawaban}>081243434533</Text>
        </View> */}
        <ScrollView style={styles.scroll_view}>
            <View style={styles.card_container}>
                <PendukungCard/>
            </View>
            <View style={styles.card_container}>
                <PendukungCard/>
            </View>
            <View style={styles.card_container}>
                <PendukungCard/>
            </View>
            <View style={styles.card_container}>
                <PendukungCard/>
            </View>
            <View style={styles.card_container}>
                <PendukungCard/>
            </View>
            <View style={styles.card_container}>
                <PendukungCard/>
            </View>
            <View style={styles.card_container}>
                <PendukungCard/>
            </View>
            <View style={styles.card_container}>
                <PendukungCard/>
            </View>
            <View style={styles.card_container}>
                <PendukungCard/>
            </View>
            <View style={styles.card_container}>
                <PendukungCard/>
            </View>
            
        </ScrollView>
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
    tab_container:{
        width:windowWidth * 0.6,
        flexDirection:'row',
        backgroundColor:"white",
        marginTop:20,
        justifyContent:"center",
        alignItems:"center",
        alignContent:'center',
        padding:10,
        borderRadius:15

    },
    tab_button:{
        borderRadius:15,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:5,
        paddingRight:5,
        backgroundColor:'#C6C6C6',
        marginRight:5,
        marginLeft:5,
        width:100,
        justifyContent:"center",
        alignItems:"center",
        alignContent:'center'

        
    },
    text_button:{
        color:"black",
        fontWeight:"bold"
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
    scroll_view:{
        marginTop:10,
        height:windowHeight *0.65
    },
    card_container:{
        marginTop:5,
        marginBottom:5
    }
})