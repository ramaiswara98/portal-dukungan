import { Text, StyleSheet, View, TextInput,Dimensions, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import ImagePicker from 'react-native-image-crop-picker';
import TitleBar from '../component/TitleBar'
import BottomPopUp from '../component/BottomPopUp';
import Button  from '../component/Button';

export default class TambahPendukung extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:null,
            isFocus:false,
            popup:false,
            img_path:''
        }
        
    }
  render() {
    const data = [
        {label:'wilayah 1', value:'wilayah 1'},
        {label:'wilayah 2', value:'wilayah 2'},
        {label:'wilayah 3', value:'wilayah 3'}
    ];
    const kamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 300,
            cropping: true,
          }).then(image => {
            const path = image.path;
            this.setState({
                popup:false,
                img_path:path
              })
          });
          
    }

    const galeri = () => {
         ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            const path = image.path;
            this.setState({
                popup:false,
                img_path:path
              })
          });
    }
    const close = ()=> {
        this.setState({
            popup:false
        })
    }

    return (
      <View>
        <View style={styles.container}>
            <TitleBar
                title={'Tambah Pendukung'}
            />
        </View>
        <ScrollView style={styles.ScrollView}>
            <View style={styles.container_input}>
                <Text
                    style={styles.text}
                >Nama</Text>
                <TextInput
                    style={styles.text_input}
                />
            </View>
            <View style={styles.container_input}>
                <Text
                    style={styles.text}
                >Nomor Handphone</Text>
                <TextInput
                    style={styles.text_input}
                    keyboardType='phone-pad'
                />
            </View>
            <View style={styles.container_input}>
                <Text
                    style={styles.text}
                >Alamat</Text>
                <TextInput
                    style={styles.text_input}
                />
            </View>
            <View style={styles.container_input}>
                <Text
                    style={styles.text}
                >Wilayah Pemilihan</Text>
                <Dropdown
                    data={data}
                    style={styles.text_input}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    labelField="label"
                    valueField="value"
                    placeholder={!this.state.isFocus ? 'Pilih Wilayah Pemilihan' : '...'}
                    searchPlaceholder="Search..."
                    value={this.state.value}
                    onFocus={() => this.setState({isFocus:true})}
                    onBlur={() => this.setState({isFocus:false})}
                    onChange={item => {
                        this.setState({
                            value:item.value,
                            isFocus:false
                        })
                    }}
                />
            </View>
            <View style={styles.container_input}>
                <Text
                    style={styles.text}
                >Foto</Text>
                <Button
                action={()=> {this.setState({popup:true})}}
                 text='Unggah Gambar'
                ></Button>
            </View>
            <View 
            style={
                {justifyContent:'center',
                alignContent:'center',
                alignItems:'center'
                }
                }>
            <Image 
                style={{width:200,height:200}} 
                source={{uri:this.state.img_path}}
                />
            </View>
            <View style={{justifyContent:'center',alignContent:'center',alignItems:'center',marginTop:10}}>
            <Button
                text={'Tambah Relawan'}
                width={200}
                background={'#69C521'}
                color={'#000'}
            ></Button>
            </View>
            <BottomPopUp
                kamera={kamera}
                galeri={galeri}
                show={this.state.popup}
                close={close}
            />
        </ScrollView>
      </View>
    )
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    ScrollView:{
        height:windowHeight*0.85,
        marginBottom:20
    },
    text:{
        fontWeight:'bold',
        color:'black',
        marginBottom:5,
        fontSize:16
    },
    text_input:{
        borderColor:'black',
        borderWidth:1,
        borderRadius:10,
        padding:10,
        color:'black'
    },
    container_input:{
        margin:10
    },
    placeholderStyle: {
        fontSize: 16,
        color:'black'
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
})