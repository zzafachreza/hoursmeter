import { View, Text, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { MyHeader } from '../../components'
import { ScrollView } from 'react-native-gesture-handler'
import { MyDimensi, colors, fonts } from '../../utils'


export default function MakananIbuhamil({navigation}) {
    const backPage = () => {
        navigation.goBack();
    }
  return (
    <View style={{flex:1, backgroundColor:"white", }}>
     <MyHeader judul="Makanan Balita" onPress={backPage}/>
     <ScrollView>

    <View style={{padding:10,
    }}>

    {/* 1 */}
    
    <View  style={{}}>

    <View  style={{alignItems:"center", }}>
    <Image source={require('../../assets/makananibuhamil1.png')} style={{
        width:316,
        height:121,


    }}/>

    </View>

    <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:15}}>
        <Text style={{fontFamily:fonts.primary[600], fontSize: MyDimensi/3, marginLeft:20, bottom:10}}>Nasi Merah</Text>

        <View style={{marginTop:0, marginRight:20}}>
        <TouchableNativeFeedback>
            <View style={{backgroundColor:colors.primary, padding:10, width:80, height:39, borderRadius:10}}>
                    <Text style={{fontFamily:fonts.primary[600], color:'white', textAlign:"center"}}>Detail</Text>
            </View>
        </TouchableNativeFeedback>
    </View>
    </View>



    </View>
<View style={{padding:0, marginTop:20}}>
<View style={{padding:1, backgroundColor:'black', marginTop:20}}></View>
</View>


    {/* 2 */}
    
    <View  style={{marginTop:20}}>

    <View  style={{alignItems:"center", }}>
    <Image source={require('../../assets/makananibuhamil2.png')} style={{
        width:316,
        height:121,


    }}/>

    </View>

    <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:15}}>
        <Text style={{fontFamily:fonts.primary[600], fontSize: MyDimensi/3, marginLeft:20, bottom:10}}>Salad Sayuran{'\n'}Segar</Text>

        <View style={{marginTop:0, marginRight:20}}>
        <TouchableNativeFeedback>
            <View style={{backgroundColor:colors.primary, padding:10, width:80, height:39, borderRadius:10}}>
                    <Text style={{fontFamily:fonts.primary[600], color:'white', textAlign:"center"}}>Detail</Text>
            </View>
        </TouchableNativeFeedback>
    </View>
    </View>



    </View>
<View style={{padding:0, marginTop:20}}>
<View style={{padding:1, backgroundColor:'black', marginTop:20}}></View>
</View>


  {/* 3 */}
    
  <View  style={{marginTop:20}}>

<View  style={{alignItems:"center", }}>
<Image source={require('../../assets/makananibuhamil3.png')} style={{
    width:316,
    height:121,


}}/>

</View>

<View style={{flexDirection:"row", justifyContent:"space-between", marginTop:15}}>
    <Text style={{fontFamily:fonts.primary[600], fontSize: MyDimensi/3, marginLeft:20, bottom:10}}>Roti Gandum{'\n'}Selai Kacang</Text>

    <View style={{marginTop:0, marginRight:20}}>
    <TouchableNativeFeedback onPress={() => navigation.navigate('ResepMakananIbuHamil')}>
        <View style={{backgroundColor:colors.primary, padding:10, width:80, height:39, borderRadius:10}}>
                <Text style={{fontFamily:fonts.primary[600], color:'white', textAlign:"center"}}>Detail</Text>
        </View>
    </TouchableNativeFeedback>
</View>
</View>



</View>
<View style={{padding:0, marginTop:20}}>
<View style={{padding:1, backgroundColor:'black', marginTop:20}}></View>
</View>






    </View>


     </ScrollView>


    </View>
  )
}