import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MyDimensi, colors, fonts, windowWidth } from '../../utils'
import { TouchableWithoutFeedback } from 'react-native'
import { Icon, ListItem, Button } from 'react-native-elements';
export default function MyRadio({ label, iconname, value, onPress, onPress2 }) {
    return (
        <View style={{

        }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 0,
                    position: 'relative'
                }}>
                <Icon type="ionicon" name={iconname} color={colors.primary} size={MyDimensi / 4} />
                <Text
                    style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.primary,
                        left: 10,
                        fontSize: MyDimensi / 4,
                    }}>
                    {label}
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
                paddingRight: windowWidth / 2,
            }}>
                <TouchableWithoutFeedback onPress={onPress}>
                    <View style={{

                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: MyDimensi / 2,
                            height: MyDimensi / 2,
                            backgroundColor: colors.border,
                            borderRadius: MyDimensi / 4,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                            {value == 'Ya' && <View style={{
                                width: MyDimensi / 3,
                                height: MyDimensi / 3,
                                backgroundColor: colors.primary,
                                borderRadius: MyDimensi / 6,
                            }} />}
                        </View>

                        <Text style={{
                            left: 10,
                            fontFamily: fonts.secondary[600],
                            fontSize: MyDimensi / 4
                        }}>Ya</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={onPress2}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            width: MyDimensi / 2,
                            height: MyDimensi / 2,
                            backgroundColor: colors.border,
                            borderRadius: MyDimensi / 4,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            {value == 'Tidak' && <View style={{
                                width: MyDimensi / 3,
                                height: MyDimensi / 3,
                                backgroundColor: colors.primary,
                                borderRadius: MyDimensi / 6,
                            }} />}
                        </View>

                        <Text style={{
                            left: 10,
                            fontFamily: fonts.secondary[600],
                            fontSize: MyDimensi / 4
                        }}>Tidak</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})