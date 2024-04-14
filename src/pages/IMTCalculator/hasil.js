import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { MyDimensi, colors, fonts } from '../../utils'
import { MyButton, MyGap, MyHeader, MyInput, MyPicker } from '../../components'
colors

export default function HasilIMTCalculator({navigation}) {
    const backPage = () => {
        navigation.goBack()
    }
  return (
    <View style={{flex:1, backgroundColor:colors.primary,}}>
    <MyHeader judul="Hasil IMT Calculator" onPress={backPage}/>
    <ScrollView style={{padding:10}}>

    <View style={{
        padding:10,
        backgroundColor:colors.secondary,
        borderRadius:5,
        alignItems:"center"

    }}>
        <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/3}}>Hasil :</Text>
    </View>

    {/* NANTI DISINI AKAN MUNCUL HASILNYA */}
    {/* IKUTIN DESAIN YANG ADA DI FIGMA */}
    <MyGap jarak={20}/>
    <View style={{padding:10, backgroundColor:colors.white, borderRadius:5, alignItems:"center"}}>
    {/* NANTI DISINI AKAN MUNCUL HASIL DARI ITUNG IMT NYA */}
    <Text style={{fontFamily:fonts.primary[600], fontSize: MyDimensi/ 3.5, textAlign:"center"}}>Belum ada hasil</Text>
    {/* NANTI DISINI MUNCUL STATUS GIZINYA */}
    <Text style={{fontFamily:fonts.primary[400], fontSize: MyDimensi/ 3.5, textAlign:"center"}}>Status Gizi Anda: <Text style={{fontFamily:fonts.primary[600]}}>Belum ada hasil</Text></Text>
    </View>
    <MyGap jarak={20}/>

    <View style={{padding:1, backgroundColor:'white'}}></View>
    <MyGap jarak={20}/>
    <View>
        <Image source={require('../../assets/keteranganhasilimt.png')} style={{
            width:327,
            height:511,

        }}/>
    </View>
    <MyGap jarak={50}/>
    </ScrollView>
    </View>
  )
}