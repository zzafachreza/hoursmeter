import { View, Text } from 'react-native'
import React from 'react'
import { MyDimensi, colors, fonts } from '../../utils'
import { MyHeader } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'
import { Image } from 'react-native'

export default function ResepMakananIbuHamil({navigation}) {
    const backPage = () => {
        navigation.goBack();
    }
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
    <MyHeader judul="Makanan Balita" onPress={backPage}/>

    <ScrollView>
        <View style={{padding:10,}}>
            <Image source={require('../../assets/dummyphotoresepmakananibuhamil.png')} style={{
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

                
Roti Gandum Selai Kacang
                </Text>
            </View>

            {/* RESEP MAKANANNYA */}
            <View style={{marginTop:'10%', padding:10}}>
                <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/4.3}}>Resep Makanan Roti Gandung{'\n'}Selai Kacang :</Text>

                <Text style={{fontFamily:fonts.primary[400], fontSize:MyDimensi/5, marginTop:20}}>Roti gandum, sesuai kebutuhan {'\n'} {'\n'}Selai kacang (bisa yang sudah jadi atau buat sendiri)</Text>
            </View>
        </View>
    </ScrollView>
    </View>
  )
}