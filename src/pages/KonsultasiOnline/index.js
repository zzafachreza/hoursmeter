import { View, Text, ScrollView, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { MyDimensi, colors, fonts } from '../../utils'
import { MyHeader } from '../../components'

export default function konsultasionline({navigation}) {
    const backPage = () => {
        navigation.goBack();
    }
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
  <MyHeader judul="Konsultasi Online" onPress={backPage}/>

  <ScrollView>
    <View style={{padding:10, }}>
        <Image source={require('../../assets/profilekonsultasionline.png')} style={{
            width:200, height:200, alignSelf:"center",
        }}/>

        <Text style={{fontFamily:fonts.primary[600], textAlign:"center", fontSize:MyDimensi/3, marginTop: 20}}>Suska Ari Setyawan</Text>

        <TouchableNativeFeedback style={{}}>
            <View style={{padding:10, backgroundColor:colors.success, width:200, alignSelf:'center', borderRadius:10, marginTop:50}}>
                <View style={{flexDirection:"row", justifyContent:'space-evenly', alignItems:"center" }}>
                    <Text style={{color:"white", fontFamily:fonts.primary[600], fontSize:MyDimensi/3}}>Konsultasi</Text>
                    <Image source={require('../../assets/waicon.png')} style={{height:31, width:31,}}/>
                </View>
            </View>
        </TouchableNativeFeedback>
    </View>
  </ScrollView>
    </View>
  )
}