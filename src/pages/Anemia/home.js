import { View, Text, ScrollView, TouchableNativeFeedback, Image } from 'react-native'
import React from 'react'
import { MyDimensi, colors, fonts } from '../../utils'
import { MyButton, MyGap, MyHeader, MyInput, MyPicker } from '../../components'


export default function HomeAnemia({navigation}) {
  const backPage = () => {
    navigation.goBack()
}
  return (
    <View style={{flex:1, backgroundColor:colors.primary,}}>
    <MyHeader judul="Anemia" onPress={backPage}/>
    <ScrollView style={{padding:10,}}>

    {/* MENU ATAS */}
    <View style={{flexDirection:"row", justifyContent:"space-around",}}>
    {/* MENU 1*/}

    <TouchableNativeFeedback onPress={() => navigation.navigate('WhatsIsAnemia')}>
        <View style={{padding:10, backgroundColor:colors.secondary, 
        width:147, height:100, borderRadius:5, alignItems:"center"

        }}>
            <Image style={{
                width:51, height:51,
            }} source={require('../../assets/apaituanemiaicon.png')}/>

            <Text style={{fontFamily:fonts.primary[600], fontSize: MyDimensi/4.3, top:10}}>What Is Anemia</Text>
        </View>
    </TouchableNativeFeedback>

    <MyGap jarak={20}/>

     {/* MENU 2*/}
     <TouchableNativeFeedback onPress={() => navigation.navigate('AnemiaCouses')}>
        <View style={{padding:10, backgroundColor:colors.secondary, 
        width:147, height:100, borderRadius:5, alignItems:"center"

        }}>
            <Image style={{
                width:51, height:51,
            }} source={require('../../assets/anemiacouses.png')}/>

            <Text style={{fontFamily:fonts.primary[600], fontSize: MyDimensi/4.3, top:10}}>Anemia Causes</Text>
        </View>
    </TouchableNativeFeedback>
    </View>

            <MyGap jarak={30}/>

     {/* MENU BAWAH */}
     <View style={{flexDirection:"row", justifyContent:"space-around",}}>
    {/* MENU 1*/}
    <TouchableNativeFeedback onPress={() => navigation.navigate('TypeAnemia')}>
        <View style={{padding:10, backgroundColor:colors.secondary, 
        width:147, height:100, borderRadius:5, alignItems:"center"

        }}>
            <Image style={{
                width:51, height:51,
            }} source={require('../../assets/typeanemia.png')}/>

            <Text style={{fontFamily:fonts.primary[600], fontSize: MyDimensi/4.3, top:10}}>Types of Anemia</Text>
        </View>
    </TouchableNativeFeedback>

    <MyGap jarak={20}/>

     {/* MENU 2*/}
     <TouchableNativeFeedback onPress={() => navigation.navigate('AnemiaHelt')}>
        <View style={{padding:10, backgroundColor:colors.secondary, 
        width:147, height:100, borderRadius:5, alignItems:"center"

        }}>
            <Image style={{
                width:51, height:51,
            }} source={require('../../assets/anemiatratment.png')}/>

            <Text style={{fontFamily:fonts.primary[600], fontSize: MyDimensi/4.8, top:11}}>Anemia Treatment</Text>
        </View>
    </TouchableNativeFeedback>
    </View>
    </ScrollView>
    </View>
  )
}