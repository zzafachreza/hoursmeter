import { View, Text, ScrollView, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { MyDimensi, colors, fonts } from '../../utils'
import { MyButton, MyGap, MyHeader, MyInput, MyPicker } from '../../components'


export default function ArtikelLainnya({navigation}) {
  const backPage = () => {
    navigation.goBack()
}
  return (
    <View style={{flex:1, backgroundColor:colors.primary,}}>
    <MyHeader judul="Artikel Lainnya" onPress={backPage}/>
    <ScrollView style={{padding:10,}}>

{/* DISINI AKAN MUNCUL ARTIKEL LAINNYA... */}
   
    </ScrollView>
    </View>
  )
}