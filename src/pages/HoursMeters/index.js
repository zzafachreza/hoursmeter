import { ActivityIndicator, Alert, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { MyDimensi, colors, fonts } from '../../utils'
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput } from '../../components'

import DateTimePicker from '@react-native-community/datetimepicker';
import { MYAPP, apiURL, getData, storeData } from '../../utils/localStorage';
import moment from 'moment';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import { Icon } from 'react-native-elements';

export default function HoursMeters({ navigation }) {
  const backPage = () => {
    navigation.goBack();
  }


  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);



  const handleStartTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || startTime;
    setShowStartTimePicker(Platform.OS === 'ios');
    setStartTime(currentDate);
    setKirim({
      ...kirim,
      jam_awal: moment(currentDate.toISOString()).format('HH:mm')
    })
  };


  const handleEndTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || endTime;
    setShowEndTimePicker(Platform.OS === 'ios');
    setEndTime(currentDate);
    setKirim({
      ...kirim,
      jam_akhir: moment(currentDate.toISOString()).format('HH:mm')
    })
  };


  const showStartTimePickerModal = () => {
    setShowStartTimePicker(true);
  };

  const showEndTimePickerModal = () => {
    setShowEndTimePicker(true);
  };
  const [kirim, setKirim] = useState({

    nama_operator: '',
    proyek: '',
    jam_awal: '',
    jam_akhir: '',
    tanggal: moment().format('YYYY-MM-DD'),
    kode_unit: '',
    hm_awal: '',
    hm_akhir: '',
    jumlah_meter: '',
    fid_user: '',
  });

  const [comp, setComp] = useState({})

  useEffect(() => {
    axios.post(apiURL + 'company').then(res => {
      console.log(res.data);
      setComp(res.data.data)
    })
    getData('user').then(uu => {
      setKirim({
        ...kirim,
        fid_user: uu.id,
        nama_lengkap: uu.nama_lengkap
      })
    })
  }, []);


  const [loading, setLoading] = useState(false)
  const sendServer = () => {
    if (kirim.hm_awal.length == 0) {
      showMessage({
        type: 'info',
        message: 'HM Awal wajib diisi !'
      })
    } else if (kirim.hm_akhir.length == 0) {
      showMessage({
        type: 'info',
        message: 'HM Terakhir wajib diisi !'
      })
    } else if (kirim.jumlah_meter.length == 0) {
      showMessage({
        type: 'info',
        message: 'Jumlah Meter wajib diisi !'
      })
    } else {
      console.log(kirim);

      let TXT = `
            *INPUT HOURS METER*%0A%0ANama Akun = ${kirim.nama_lengkap} %0ANama Operator = ${kirim.nama_operator} %0AProyek Yang Dikerjakan = ${kirim.proyek} %0AJam Mulai Kerja = ${kirim.jam_awal} %0AJam Terakhir Kerja = ${kirim.jam_akhir} %0ATanggal Kerja = ${kirim.tanggal} %0AKode Unit = ${kirim.kode_unit} %0AHM Awal (Jika Proyek Per HM) = ${kirim.hm_awal} %0AHM Terakhir (Jika Proyek Per HM) = ${kirim.hm_akhir} %0AJumlah Meter (Jika Proyek Per Meter) = ${kirim.jumlah_meter} %0A
  
      `;


      setLoading(true);
      axios.post(apiURL + 'rekap_insert', kirim).then(res => {
        console.log(res.data);
        if (res.data.status == 200) {
          showMessage({
            type: 'success',
            message: res.data.message
          });
          Linking.openURL('https://wa.me/' + comp.tlp + '?text=' + TXT);
        }
      }).finally(() => {
        setLoading(false)
      })

    }


  }


  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>

      {/* HEADERS */}


      <ScrollView>
        <View style={{
          padding: 10,
          marginBottom: 10,
          borderBottomWidth: 5,
          borderBottomColor: colors.primary,
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Image source={require('../../assets/icon.png')} style={{
            width: 60,
            height: 60,
          }} />
          <Text style={{
            fontFamily: fonts.secondary[800],
            fontSize: 15,
            flex: 1,
            textAlign: 'center'
          }}>Input Hours Meter</Text>
          <TouchableWithoutFeedback onPress={() => {
            Alert.alert(MYAPP, 'Apakah kamu yakin akan keluar ?', [
              {
                text: 'Batal',
                style: "cancel"
              },
              {
                text: 'Keluar',
                onPress: () => {
                  storeData('user', null);

                  navigation.reset({
                    index: 0,
                    routes: [{ name: 'Splash' }],
                  });
                }
              }
            ])
          }}>
            <View style={{
              padding: 10,

            }}>
              <Icon type='ionicon' name='log-out-outline' size={25} />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={{ padding: 10, }}>
          <MyInput label="Nama Operator" onChangeText={x => {
            setKirim({
              ...kirim,
              nama_operator: x
            })
          }} />
          <MyGap jarak={20} />
          <MyInput label="Proyek Yang Dikerjakan" onChangeText={x => {
            setKirim({
              ...kirim,
              proyek: x
            })
          }} />
          <MyGap jarak={20} />
          <TouchableOpacity onPress={showStartTimePickerModal}>
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: MyDimensi / 4, color: colors.black, left: 10
            }}>Jam Mulai Kerja</Text>
            <View style={{ height: 50, justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: colors.gray }}>
              <Text style={{ fontFamily: fonts.secondary[600], fontSize: MyDimensi / 4, color: colors.black, left: 20 }}>{kirim.jam_awal}</Text>
            </View>
          </TouchableOpacity>
          {showStartTimePicker && (
            <DateTimePicker
              testID="startTimePicker"
              value={startTime}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={handleStartTimeChange}
            />
          )}
          <MyGap jarak={20} />
          <TouchableOpacity onPress={showEndTimePickerModal}>
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: MyDimensi / 4, color: colors.black, left: 10
            }}>Jam Terakhir Kerja</Text>
            <View style={{ height: 50, justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: colors.gray }}>
              <Text style={{ fontFamily: fonts.secondary[600], fontSize: MyDimensi / 4, color: colors.black, left: 20 }}>{kirim.jam_akhir}</Text>
            </View>
          </TouchableOpacity>
          {showEndTimePicker && (
            <DateTimePicker
              testID="endTimePicker"
              value={endTime}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={handleEndTimeChange}
            />
          )}
          <MyGap jarak={20} />
          <MyCalendar label="Tanggal Kerja" value={kirim.tanggal} onDateChange={x => {
            setKirim({
              ...kirim,
              tanggal: x
            })
          }} />
          <MyGap jarak={20} />
          <MyInput label="Kode Unit" onChangeText={x => {
            setKirim({
              ...kirim,
              kode_unit: x
            })
          }} />
          <MyGap jarak={20} />
          <MyInput keyboardType='number-pad' onChangeText={x => {
            setKirim({
              ...kirim,
              hm_awal: x
            })
          }} label="HM Awal (Jika Proyek Per HM)" />
          <MyGap jarak={20} />
          <MyInput keyboardType='number-pad' onChangeText={x => {
            setKirim({
              ...kirim,
              hm_akhir: x
            })
          }} label="HM Terakhir (Jika Proyek Per HM)" />
          <MyGap jarak={20} />
          <MyInput keyboardType='number-pad' onChangeText={x => {
            setKirim({
              ...kirim,
              jumlah_meter: x
            })
          }} label="Jumlah Meter (Jika Proyek Per Meter)" />
          <MyGap jarak={50} />

          {/* DATA INI AKAN MASUK KE DATABASE DAN AKAN KE WHATSAAP SEPERTI DI DOKUMEN DAN DESAINNYA SEPERTI DI FIGMA */}
          {!loading && <MyButton title="Kirim" onPress={sendServer} />}
          {loading && <ActivityIndicator size="large" color={colors.primary} />}
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})