import { Text, StyleSheet, View, ScrollView, Image, Dimensions } from 'react-native'
import React, { Component } from 'react'
import MenuCard from '../component/MenuCard'
import Relawan from '../assets/relawan.png'
import Pendukung from '../assets/pendukung.png'
import Pengaturan from '../assets/settings.png'
import Informasi from'../assets/informative.png'

export default class home extends Component {
  render() {
    return (
      <ScrollView>
        
        <View style={styles.container}>
            <Image
                source={{uri:"https://i0.wp.com/fisip.umrah.ac.id/wp-content/uploads/2022/12/placeholder-2.png?fit=1200%2C800&ssl=1"}}
                style={styles.banner}
            />
            <MenuCard
                image={Relawan}
                title="RELAWAN"
                subtitle="Kelola Relawan Anda Di Menu Ini"
            />
            <MenuCard
                image={Pendukung}
                title="PENDUKUNG"
                subtitle="Kelola Relawan Anda Di Menu Ini"
            />
             <MenuCard
                image={Informasi}
                title="INFORMASI"
                subtitle="Kelola Relawan Anda Di Menu Ini"
            />
             <MenuCard
                image={Pengaturan}
                title="PENGATURAN"
                subtitle="Kelola Relawan Anda Di Menu Ini"
            />
        </View>
        
        
      </ScrollView>
    )
  }
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    banner:{
        width:windowWidth * 0.9,
        height:windowHeight *0.25,
        marginBottom:20,
        borderRadius:15,
        marginTop:10
    }
})