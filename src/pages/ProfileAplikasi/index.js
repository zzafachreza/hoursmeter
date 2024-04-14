import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { MyDimensi, colors, fonts } from '../../utils'
import { ScrollView } from 'react-native'
import { MyHeader } from '../../components'

export default function ProfileAplikasi({navigation}) {
      const backPage = () => {
        navigation.goBack();
    }
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
     <ImageBackground source={require('../../assets/bgprofileaplikasi.png')} style={{
        flex:1,
        height:'100%',
        width:'100%',
     }} >
        <MyHeader judul="Profile Pembuat Aplikasi" onPress={backPage}/>
       <ScrollView>
        <View style={{padding:10, marginTop:'5%',}}>
            <Image source={require('../../assets/photoprofilepembuataplikasi.png')} style={{
                    width:138,
                    height:200,
                    alignSelf:'center',


            }}/>

            {/* NAMA */}
            <View style={{flexDirection:"row", marginTop:20, padding:10, alignItems:"center", justifyContent:"flex-start"}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/4.2, }}>Nama : <Text style={{fontFamily:fonts.primary[400], fontSize:MyDimensi/4.2, }}>Suska Ari Setyawan, S.T Gizi, MM</Text></Text>
           
            </View>

            <View style={{padding:10}}>
            <View style={{padding:1, backgroundColor:'black',}}></View>
            </View>


               {/* INSTASI */}
               <View style={{flexDirection:"row", marginTop:-10, padding:10, alignItems:"center", justifyContent:"flex-start"}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/4.2, }}>Instansi : <Text style={{fontFamily:fonts.primary[400], fontSize:MyDimensi/4.2, }}>UPTD Puskesmas Lok Bahu{'\n'}Samarinda</Text></Text>
           
            </View>

            <View style={{padding:10}}>
            <View style={{padding:1, backgroundColor:'black',}}></View>
            </View>


               {/* Jabatan */}
               <View style={{flexDirection:"row", marginTop:-10, padding:10, alignItems:"center", justifyContent:"flex-start"}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/4.2, }}>Jabatan : <Text style={{fontFamily:fonts.primary[400], fontSize:MyDimensi/4.2, }}>Staff Nutrisionis</Text></Text>
           
            </View>

            <View style={{padding:10}}>
            <View style={{padding:1, backgroundColor:'black',}}></View>
            </View>

            
               {/* Jabatan */}
               <View style={{flexDirection:"row", marginTop:-10, padding:10, alignItems:"center", justifyContent:"flex-start"}}>
            <Text style={{fontFamily:fonts.primary[600], fontSize:MyDimensi/4.2, }}>Nomor Telepon : <Text style={{fontFamily:fonts.primary[400], fontSize:MyDimensi/4.2, }}>0811557084</Text></Text>
           
            </View>

            <View style={{padding:10}}>
            <View style={{padding:1, backgroundColor:'black',}}></View>
            </View>

                  {/* Jabatan */}
                  <View style={{flexDirection:"row", marginTop:-10, padding:10, alignItems:"center", justifyContent:"flex-start"}}>
            <Text style={{fontFamily:fonts.primary[400], fontSize:MyDimensi/4.2, }}>Poltekkes Kemenkes Yogyakarta 2013
Universitas Mulawarman 2022
Profesi Dietisien Poltekkes Kemenkes Malang On Process</Text>
           
            </View>
           
        </View>
       </ScrollView>
     </ImageBackground>
    </View>
  )
}