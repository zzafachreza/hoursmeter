import { View, Text, ScrollView, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { MyDimensi, colors, fonts } from '../../utils'
import { MyButton, MyGap, MyHeader, MyInput, MyPicker } from '../../components'


export default function AnemiaHelt({navigation}) {
  const backPage = () => {
    navigation.goBack()
}
  return (
    <View style={{flex:1, backgroundColor:colors.primary,}}>
    <MyHeader judul="Anemia Treatment" onPress={backPage}/>
    <ScrollView style={{padding:10,}}>


    <View style={{
        padding:10,
        backgroundColor:colors.secondary,
        borderRadius:5,
        alignItems:"center"

    }}>
        <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/3}}>Pengobatan Anemia</Text>
    </View>

    {/* PHOTO ARTIKEL */}
    <Image source={require('../../assets/fotopengobatananemia.png')}
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
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>1. Suplemen Zat Besi atau Vitamin :</Text> Untuk anemia defisiensi zat besi atau defisiensi vitamin seperti B12 atau asam folat, dokter mungkin meresepkan suplemen yang sesuai. Suplemen ini membantu meningkatkan kadar zat besi atau vitamin yang kurang dalam tubuh.
        </Text>

        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>2. Perubahan Diet :</Text> Mengonsumsi makanan yang kaya zat besi, vitamin B12, dan asam folat dapat membantu meningkatkan kadar nutrisi dalam tubuh. Makanan seperti daging merah, hati, sayuran hijau, biji-bijian, dan kacang-kacangan adalah contoh makanan yang kaya akan nutrisi tersebut.
        </Text>


        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>3. Pengobatan Penyebabnya :</Text>  Jika anemia disebabkan oleh kondisi medis lain seperti penyakit radang usus, gagal ginjal, atau penyakit autoimun, pengobatan untuk penyakit yang mendasarinya akan diresepkan. Pengobatan penyakit yang mendasarinya dapat membantu mengatasi anemia secara efektif.
        </Text>


        
        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>4. Transfusi Darah :</Text>  Dalam kasus anemia yang parah atau mendesak, transfusi darah mungkin diperlukan untuk meningkatkan jumlah sel darah merah secara cepat dan mengatasi gejala yang parah, seperti kelelahan yang berat atau sesak napas.
        </Text>



        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>5. Eritropoietin :</Text> Eritropoietin adalah hormon yang merangsang sumsum tulang untuk memproduksi lebih banyak sel darah merah. Dalam beberapa kasus, eritropoietin sintetis dapat diresepkan untuk meningkatkan produksi sel darah merah.
        </Text>


        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>6. Pengobatan Imunosupresif :</Text> Untuk anemia aplastik atau anemia hemolitik autoimun, pengobatan imunosupresif dapat digunakan untuk menekan reaksi sistem kekebalan tubuh yang menyebabkan penghancuran sel darah merah.
        </Text>


        <MyGap jarak={20}/>
        <Text style={{
            fontFamily:fonts.primary[400],
            fontSize:MyDimensi/4,
            color:colors.white,
            textAlign:"left",
            letterSpacing:1,
            
        }}>
<Text style={{fontFamily:fonts.primary[600], fontWeight:"bold"}}>7. Pengobatan Simtomatik :</Text> Selain mengobati penyebab anemia, dokter juga dapat meresepkan obat untuk mengatasi gejala anemia seperti kelelahan, sesak napas, atau detak jantung cepat.
        </Text>



        
    </View>


    
   

    <MyGap jarak={50}/>
    </ScrollView>
    </View>
  )
}