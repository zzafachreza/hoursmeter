import { View, Text } from 'react-native'
import React from 'react'
import { MyDimensi, colors, fonts } from '../../utils'
import { MyHeader } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'
import { Image } from 'react-native'

export default function ResepMakananBalita({navigation}) {
    const backPage = () => {
        navigation.goBack();
    }
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
    <MyHeader judul="Makanan Balita" onPress={backPage}/>

    <ScrollView>
        <View style={{padding:10,}}>
            <Image source={require('../../assets/dummyphotoresepmakananbalita.png')} style={{
                width:316,
                height:193,
                borderRadius:10,
                alignItems:"center",
                alignSelf:"center"

            }}/>


            {/* JUDUL */}
            <View>
                <Text style={{
                    fontFamily:fonts.primary[600],
                    textAlign:"center",
                    fontSize: MyDimensi/3,
                    marginTop: 10

                }}>

                
                    Sup Kacang
                </Text>
            </View>

            {/* RESEP MAKANANNYA */}
            <View style={{marginTop:'10%', padding:10}}>
                <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/4.3}}>Resep Makanan Sup Kacang :</Text>

                <Text style={{fontFamily:fonts.primary[400], fontSize:MyDimensi/5, marginTop:20}}>1 cup kacang merah kering (rendam semalaman dan tiriskan) {'\n'} {'\n'} 
1 bawang bombay, cincang halus {'\n'} {'\n'}2 siung bawang putih, cincang halus  {'\n'} {'\n'}1 wortel, potong dadu kecil {'\n'} {'\n'}2 batang seledri, cincang halus {'\n'} {'\n'}1 liter kaldu sayuran atau ayam {'\n'} {'\n'}1 sendok makan minyak zaitun atau minyak sayur
Garam dan merica secukupnya {'\n'} {'\n'}Daun seledri untuk hiasan (opsional)</Text>
            </View>
        </View>
    </ScrollView>
    </View>
  )
}