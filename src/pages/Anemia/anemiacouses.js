import { View, Text, ScrollView, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { MyDimensi, colors, fonts } from '../../utils'
import { MyButton, MyGap, MyHeader, MyInput, MyPicker } from '../../components'


export default function AnemiaCouses({navigation}) {
  const backPage = () => {
    navigation.goBack()
}
  return (
    <View style={{flex:1, backgroundColor:colors.primary,}}>
    <MyHeader judul="Anemia Causes" onPress={backPage}/>
    <ScrollView style={{padding:10,}}>


    <View style={{
        padding:10,
        backgroundColor:colors.secondary,
        borderRadius:5,
        alignItems:"center"

    }}>
        <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/3}}>Penyebab Anemia</Text>
    </View>

    {/* PHOTO ARTIKEL */}
    <Image source={require('../../assets/fotopenyebabanemia.png')}
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
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>1. Kekurangan Zat Besi :</Text> Ini adalah penyebab paling umum dari anemia. Kekurangan zat besi dapat terjadi karena asupan makanan yang kurang mengandung zat besi, pendarahan yang berlebihan (seperti menstruasi yang berat atau pendarahan gastrointestinal), atau ketidakmampuan tubuh untuk menyerap zat besi dengan baik.
        </Text>

        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>2. Kekurangan Vitamin B12 atau Asam Folat :</Text> Vitamin B12 dan asam folat diperlukan untuk pembentukan sel darah merah. Kekurangan salah satu dari keduanya dapat menyebabkan produksi sel darah merah yang tidak memadai, mengakibatkan anemia.
        </Text>


        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>3. Gangguan Produksi Sel Darah Merah :</Text> Gangguan pada sumsum tulang, tempat pembentukan sel darah merah, dapat menyebabkan anemia. Contoh kondisi ini meliputi gagal ginjal, kanker sumsum tulang, dan penyakit autoimun seperti lupus.
        </Text>


        
        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>4. Penghancuran Sel Darah Merah yang Cepat :</Text> Anemia juga dapat disebabkan oleh penghancuran sel darah merah yang berlebihan, yang terjadi pada kondisi seperti anemia hemolitik, di mana sel darah merah dihancurkan lebih cepat dari yang bisa diproduksi tubuh.
        </Text>



        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>5. Kondisi Kronis atau Penyakit :</Text> Beberapa kondisi kronis seperti penyakit radang usus, arthritis rheumatoid, atau gagal ginjal dapat menyebabkan anemia karena efek langsungnya pada produksi sel darah merah atau karena perdarahan kronis.
        </Text>


        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>6. Kehamilan :</Text> Wanita hamil rentan mengalami anemia karena kebutuhan nutrisi yang meningkat selama kehamilan dan peningkatan volume darah.
        </Text>


        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>7. Kondisi Genetik :</Text> Wanita hamil rentan mengalami anemia karena kebutuhan nutrisi yang meningkat selama kehamilan dan peningkatan volume darah.
        </Text>
    </View>


    
   

    <MyGap jarak={50}/>
    </ScrollView>
    </View>
  )
}