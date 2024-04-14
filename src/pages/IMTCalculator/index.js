import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { MyButton, MyGap, MyHeader, MyInput, MyPicker } from '../../components'
colors

export default function IMTCalculator({navigation}) {
  const backPage = () => {
    navigation.goBack()
}
  return (
    <View style={{flex:1, backgroundColor:colors.primary,}}>
    <MyHeader judul="IMT Calculator" onPress={backPage}/>
    <ScrollView>

    {/* UMUR */}
    <MyInput label="Umur (thn)" placeholder="Masukan Umur"/>
    <MyGap jarak={20}/>

      {/* JENIS KELAMIN */}
      <MyPicker data={[
        {value:'laki-laki', label:'Laki-laki'},
        {value:'perempuan', label:'Perempuan'},
      ]} label="Jenis Kelamin"/>
      <MyGap jarak={20}/>

        {/* TINGGI BADAN */}
        <MyInput label="Tinggi Badan (cm)" placeholder="Masukan Tinggi Badan"/>
      <MyGap jarak={20}/>

        {/* Berat Badan */}
        <MyInput label="Berat Badan (kg)" placeholder="Masukan Berat Badan"/>
      <MyGap jarak={20}/>

  <View style={{padding:10,}}>
  <MyButton 
  title="Lihat Hasil"
    onPress={() => navigation.navigate('HasilIMTCalculator')}
  />
  </View>
    </ScrollView>
    </View>
  )
}