import { Modal, StyleSheet, Text, View, Dimensions, FlatList, Button, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

const BottomPopUp = (props) => {
    
    const close=()=>{

    }
    const deviceHeigh = Dimensions.get('window').height;

    const data = [
        {
            id:1,
            name:'Buka Kamer'
        },
        {
            id:2,
            name:'Pilih Dari Galeri'
        }
    ]
  return (
    <Modal
        animationType={'fade'}
        transparent={true}
        visible={props.show}
        onRequestClose={()=>{props.close()}}
    >
        <View 
            style={{
                flex:1,
                backgroundColor:'#000000AA',
                justifyContent:'flex-end'
            }}
        >
            <View
                style={{
                    backgroundColor:"#FFFFFF",
                    width:'100%',
                    borderTopRightRadius:10,
                    borderTopLeftRadius:10,
                    paddingHorizontal:10,
                    maxHeight: deviceHeigh * 0.4
                }}
            >
                <View>
                    <Text 
                        style={{
                            color:"#182E44",
                            fontSize:20,
                            fontWeight:'500',
                            margin:15,
                        }}
                    >
                        Pilih Foto Dari:
                    </Text>
                </View>
                <View>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={()=>{props.kamera()}}
                    >
                        <Text>Kamera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  
                        style={styles.button}
                        onPress={()=>{props.galeri()}}
                    >
                        <Text>Galeri</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    </Modal>
  )
}

export default BottomPopUp

const styles = StyleSheet.create({
    button:{
        marginTop:10,
        marginBottom:10,
        marginRight:20,
        marginLeft:20,
        borderRadius:15,
        backgroundColor:'gray',
        color:'black',
        padding:10,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    }
})