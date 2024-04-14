import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Animated, View, Image, ScrollView, ActivityIndicator, TouchableOpacity, BackHandler, Alert, Linking, ImageBackground } from 'react-native';
import { fonts, windowWidth, colors, windowHeight, MyDimensi } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';
import { TouchableNativeFeedback } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
import { color } from 'react-native-reanimated';

export default function Login({ navigation }) {

  const [kirim, setKirim] = useState({
    api_token: api_token,
    username: null,
    password: null
  });
  const [loading, setLoading] = useState(false);

  const [comp, setComp] = useState({});

  const card = new Animated.Value(-30);
  const img = new Animated.Value(-20);




  const masuk = () => {


    if (kirim.username == null && kirim.password == null) {
      Alert.alert(MYAPP, 'username dan Password tidak boleh kosong !');
    } else if (kirim.username == null) {
      Alert.alert(MYAPP, 'username tidak boleh kosong !');
    } else if (kirim.password == null) {
      Alert.alert(MYAPP, 'Password tidak boleh kosong !');
    } else {


      setLoading(true);
      console.log(kirim);

      axios
        .post(apiURL + 'login', kirim)
        .then(res => {
          setLoading(false);
          console.log(res.data);
          if (res.data.status == 404) {
            showMessage({
              type: 'danger',
              message: res.data.message
            })
          } else {
            storeData('user', res.data.data);
            navigation.replace('InputHoursMeter')
          }
        });



    }




  }

  useEffect(() => {
    Animated.timing(card, {
      toValue: 1,
      duration: 850,
      useNativeDriver: false,
    }).start();
    Animated.timing(img, {
      toValue: 0,
      duration: 850,
      useNativeDriver: false,
    }).start();
    axios.post(apiURL + 'company').then(res => {
      setComp(res.data.data);
    })

  }, []);

  return (
    <View style={{
      flex: 1,

    }}>

      <ScrollView style={{ position: "relative" }}>


        <Animated.View style={{
          padding: 10,
          flex: 1, margin: 10,
          bottom: card,
          borderRadius: 0,

        }}>

          <Image source={require('../../assets/icon.png')} style={{
            height: 250, width: 250,
            alignItems: 'center',
            alignSelf: "center",
            marginTop: -30
          }} />
          <Text style={{
            fontFamily: fonts.primary[400],
            color: "black",
            fontSize: MyDimensi / 3.9,
            marginTop: 10,
            textAlign: "center"

          }}>by Rindiani Amelia</Text>


          <Text style={{
            fontFamily: fonts.primary[600],
            color: "black",
            fontSize: MyDimensi / 2.8,
            marginTop: 25,
            textAlign: "center"

          }}>LOGIN</Text>
          <Text style={{
            fontFamily: fonts.primary[400],
            color: "black",
            fontSize: MyDimensi / 5.8,
            marginTop: 0,
            textAlign: "center"

          }}>Silahkan login dengan akun anda</Text>

          {/* USERNAME INPUT */}


          <MyGap jarak={25} />

          <MyInput label="Username" iconname="person" onChangeText={x => {
            setKirim({
              ...kirim,
              username: x
            })
          }} placeholder="Masukan Username" />


          <MyGap jarak={20} />
          {/* PASSWORD INPUT */}


          <MyInput label="Password" onChangeText={x => {
            setKirim({
              ...kirim,
              password: x
            })
          }} iconname="lock-closed" placeholder="Masukan password" secureTextEntry={true} />


          {/* BUTTON LOGIN */}


          <MyGap jarak={30} />
          <MyGap jarak={0} />
          {!loading &&





            <MyButton
              onPress={masuk}
              title="Login"


              Icons="log-in-outline"
            />


          }


        </Animated.View>
        <View style={{ marginTop: '10%' }}>

        </View>





        {loading && <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>}
      </ScrollView>
    </View>




  );
}

const styles = StyleSheet.create({});
