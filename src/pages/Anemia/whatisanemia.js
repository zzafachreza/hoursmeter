import { View, Text, ScrollView, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { MyDimensi, colors, fonts } from '../../utils'
import { MyButton, MyGap, MyHeader, MyInput, MyPicker } from '../../components'


export default function WhatsIsAnemia({navigation}) {
  const backPage = () => {
    navigation.goBack()
}
  return (
    <View style={{flex:1, backgroundColor:colors.primary,}}>
    <MyHeader judul="What Is Anemia" onPress={backPage}/>
    <ScrollView style={{padding:10,}}>


    <View style={{
        padding:10,
        backgroundColor:colors.secondary,
        borderRadius:5,
        alignItems:"center"

    }}>
        <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/3}}>Apa itu Anemia?</Text>
    </View>

    {/* PHOTO ARTIKEL */}
    <Image source={require('../../assets/fotoapaituanemia.png')}
        style={{
            width:350,
            height:150,
            alignSelf:"center",
            marginTop:10,
            
            
        }}
    />

    {/* TEKS ARTIKEL */}
    <View style={{
        marginTop:20
    }}>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
        Anemia adalah kondisi medis yang ditandai dengan jumlah sel darah merah yang rendah atau kadar hemoglobin yang rendah dalam darah. Sel darah merah dan hemoglobin sangat penting karena membawa oksigen dari paru-paru ke seluruh tubuh. Ketika kadar hemoglobin atau jumlah sel darah merah menurun, tubuh mungkin tidak mendapatkan oksigen yang cukup, menyebabkan gejala seperti kelelahan, lemas, dan pucat.
        </Text>
    </View>
   
    </ScrollView>
    </View>
  )
}