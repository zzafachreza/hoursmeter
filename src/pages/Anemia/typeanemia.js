import { View, Text, ScrollView, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { MyDimensi, colors, fonts } from '../../utils'
import { MyButton, MyGap, MyHeader, MyInput, MyPicker } from '../../components'


export default function TypeAnemia({navigation}) {
  const backPage = () => {
    navigation.goBack()
}
  return (
    <View style={{flex:1, backgroundColor:colors.primary,}}>
    <MyHeader judul="Types of Anemia" onPress={backPage}/>
    <ScrollView style={{padding:10,}}>


    <View style={{
        padding:10,
        backgroundColor:colors.secondary,
        borderRadius:5,
        alignItems:"center"

    }}>
        <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/3}}>Jenis Anemia</Text>
    </View>

    {/* PHOTO ARTIKEL */}
    <Image source={require('../../assets/fotojenisanemia.png')}
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
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>1. Anemia Defisiensi Besi :</Text> Ini adalah jenis anemia yang paling umum, disebabkan oleh kekurangan zat besi dalam tubuh. Kekurangan zat besi dapat terjadi karena diet yang tidak mencukupi, pendarahan yang berlebihan, atau ketidakmampuan tubuh untuk menyerap zat besi dengan baik.
        </Text>

        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>2. Anemia Megaloblastik :</Text> Jenis anemia ini terjadi karena gangguan dalam produksi sel darah merah yang besar dan abnormal (megaloblas), biasanya disebabkan oleh kekurangan vitamin B12 atau asam folat. Sel darah merah yang besar ini tidak berfungsi dengan baik dan memiliki umur yang lebih pendek.
        </Text>


        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>3. Anemia Hemolitik :</Text> Anemia ini terjadi ketika sel darah merah dihancurkan lebih cepat dari yang bisa diproduksi tubuh. Ini bisa disebabkan oleh kondisi genetik seperti anemia sel sabit atau thalassemia, infeksi, reaksi obat, atau penyakit autoimun di mana sistem kekebalan tubuh menyerang sel darah merah.
        </Text>


        
        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>4. Anemia Aplastik :</Text>  Ini adalah jenis anemia yang jarang terjadi di mana sumsum tulang gagal memproduksi sel darah merah, putih, dan trombosit yang cukup. Ini dapat disebabkan oleh infeksi, paparan bahan kimia beracun, atau kondisi autoimun.
        </Text>



        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>5. Anemia dari Gangguan Kronis :</Text> Beberapa kondisi kronis seperti gagal ginjal, arthritis rheumatoid, atau penyakit radang usus dapat menyebabkan anemia karena pengaruh langsungnya pada produksi sel darah merah atau karena perdarahan kronis.
        </Text>


        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>6. Anemia pada Kehamilan :</Text> Wanita hamil rentan mengalami anemia karena kebutuhan nutrisi yang meningkat selama kehamilan dan peningkatan volume darah.
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



        
        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>8. Anemia Sideroblastik :</Text> Terjadi ketika sel darah merah mengandung prekursor zat besi yang tidak berfungsi dengan baik, menyebabkan pembentukan sel darah merah yang tidak efisien.
        </Text>
    </View>


    
   

    <MyGap jarak={50}/>
    </ScrollView>
    </View>
  )
}