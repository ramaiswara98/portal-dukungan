import { Text, View, Dimensions, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'
import TitleBar from '../component/TitleBar';
import Button from '../component/Button';
import RelawanCard from '../component/RelawanCard';

export class Relawan extends Component {
  render() {
    return (
    <View>
      <View style={styles.container}>
       <TitleBar
        title={'Relawan'}
       />
       <Button
            text={'Tambahs'}
            width={200}
            background={'#69C521'}
            color={'#000'}
       />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.list_container}>
            <RelawanCard/>
        </View>
        <View style={styles.list_container}>
            <RelawanCard/>
        </View>
        <View style={styles.list_container}>
            <RelawanCard/>
        </View>
        <View style={styles.list_container}>
            <RelawanCard/>
        </View>
        <View style={styles.list_container}>
            <RelawanCard/>
        </View>
        <View style={styles.list_container}>
            <RelawanCard/>
        </View>
        <View style={styles.list_container}>
            <RelawanCard/>
        </View>
        <View style={styles.list_container}>
            <RelawanCard/>
        </View>
        <View style={styles.list_container}>
            <RelawanCard/>
        </View>
        <View style={styles.list_container}>
            <RelawanCard/>
        </View>
      </ScrollView>
    </View>
    )
  }
}

export default Relawan
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
    },
    scrollView:{
        marginTop:10,
        marginBottom:20,
        height:windowHeight*0.8
    },
    list_container:{
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        marginTop:5,
        marginBottom:5
    }
})