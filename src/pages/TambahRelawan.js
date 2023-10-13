import { Text, StyleSheet, View, TextInput,Dimensions, Button } from 'react-native'
import React, { Component } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import ImagePicker from 'react-native-image-crop-picker';
import TitleBar from '../component/TitleBar'
import BottomPopUp from '../component/BottomPopUp';

export default class TambahRelawan extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:null,
            isFocus:false,
            popup:false
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
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
          });
          this.setState({
            popup:false
          })
    }

    const galeri = () => {
         ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
          this.setState({
            popup:false
          })
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
                title={'Tambah Relawan'}
            />
        </View>
        <View>
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
                onPress={()=> {this.setState({popup:true})}}
                 title='Unggah Gambar'
                ></Button>
            </View>
            <BottomPopUp
                kamera={kamera}
                galeri={galeri}
                show={this.state.popup}
                close={close}
            />
        </View>
      </View>
    )
  }
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
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