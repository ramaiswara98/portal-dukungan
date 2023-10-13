import { Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import React, { Component } from 'react'
import TitleBar from '../component/TitleBar';
import Button from '../component/Button';
import PendukungCard from '../component/PendukungCard';

export default class Pendukung extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
            <TitleBar
                title={'Pendukung'}
            />
        <Button
                text={'Tambah Pendukung'}
                width={200}
                background={'#69C521'}
                color={'#000'}
        />
        </View>
        <ScrollView style={styles.scrollView}>
            <View style={styles.list_container}>
                <PendukungCard/>
            </View>
            <View style={styles.list_container}>
                <PendukungCard/>
            </View>
            <View style={styles.list_container}>
                <PendukungCard/>
            </View>
            <View style={styles.list_container}>
                <PendukungCard/>
            </View>
            <View style={styles.list_container}>
                <PendukungCard/>
            </View>
            <View style={styles.list_container}>
                <PendukungCard/>
            </View>
            <View style={styles.list_container}>
                <PendukungCard/>
            </View>
            <View style={styles.list_container}>
                <PendukungCard/>
            </View>
            <View style={styles.list_container}>
                <PendukungCard/>
            </View>
            <View style={styles.list_container}>
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
        alignItems:'center',
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