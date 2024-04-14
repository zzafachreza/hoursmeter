import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Linking,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { windowWidth, fonts, MyDimensi } from '../../utils/fonts';
import { getData, MYAPP, storeData, urlAPI, urlApp, urlAvatar } from '../../utils/localStorage';
import { colors } from '../../utils/colors';
import { MyButton, MyGap, MyHeader } from '../../components';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { ScrollView } from 'react-native';

export default function ({ navigation, route }) {
    const [user, setUser] = useState({});
    const [com, setCom] = useState({});
    const isFocused = useIsFocused();
    const [wa, setWA] = useState('');
    const [open, setOpen] = useState(false);



    useEffect(() => {


        if (isFocused) {
            getData('user').then(res => {
                console.log(res)
                setOpen(true);
                setUser(res);

            });
        }




    }, [isFocused]);



    const btnKeluar = () => {
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
    };

    const MyList = ({ label, value }) => {
        return (
            <View
                style={{
                    marginVertical: 2,
                    paddingTop: 2,
                    paddingHorizontal: 10,
                    backgroundColor: colors.white,
                    borderRadius: 5,
                }}>
                <Text
                    style={{
                        fontFamily: fonts.primary[400],
                        color: colors.primary,
                    }}>
                    {label}
                </Text>
                <Text
                    style={{
                        fontFamily: fonts.primary[400],
                        color: colors.black,
                    }}>
                    {value}
                </Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.background
        }}>


            <MyHeader judul="Profile" onPress={() => navigation.goBack()} />
            {!open && <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>}
            <ScrollView>
                {open &&
                    <>


                        <View style={{
                            margin: 5,
                            flex: 1,
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: 100,
                                    height: 100,
                                    borderWidth: 1,
                                    borderColor: colors.border,
                                    overflow: 'hidden',
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>

                                    <Image source={{
                                        uri: user.foto_user
                                    }} style={{
                                        width: 100,
                                        height: 100,

                                    }} />

                                </View>
                            </View>
                            <Text style={{
                                fontFamily: fonts.secondary[800],
                                fontSize: MyDimensi / 3,
                                textAlign: 'center',
                                marginVertical: 10,
                                color: colors.primary
                            }}>{user.level}</Text>
                            <View style={{ padding: 10, }}>
                                <MyList label="Nama Lengkap" value={user.nama_lengkap} />
                                <MyList label="Telepon / Whatsapp" value={user.telepon} />
                                <MyList label="Alamat" value={user.alamat} />
                                <MyList label="Kecamatan" value={user.kecamatan} />
                                <MyList label="Desa" value={user.desa} />
                                <MyList label="Posyandu" value={user.posyandu} />

                                {user.level == 'IBU' &&
                                    <>
                                        <MyList label="Nama Anak" value={user.nama_anak} />
                                        <MyList label="Tanggal Lahir Anak" value={moment(user.tanggal_lahir).format('DD MMMM YYYY')} />
                                        <MyList label="Jenis Kelamin" value={user.jenis_kelamin} />
                                    </>
                                }


                            </View>
                            {/* data detail */}
                        </View>
                    </>
                }
                <View style={{
                    padding: 20,
                }}>
                    <MyButton warna={colors.primary} title="Edit Profile" Icons="create-outline" onPress={() => navigation.navigate('AccountEdit', user)} />
                    <MyGap jarak={10} />
                    <MyButton onPress={btnKeluar} warna={colors.secondary} title="Log Out" Icons="log-out-outline" iconColor={colors.white} colorText={colors.white} />
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({});
