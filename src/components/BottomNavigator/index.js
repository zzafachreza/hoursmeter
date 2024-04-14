import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../../utils/colors';
import { useState } from 'react';
import { getData, urlAPI } from '../../utils/localStorage';
import { useEffect } from 'react';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import { MyDimensi, fonts } from '../../utils';
export default function BottomNavigator({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [cart, setCart] = useState(0);
  const isFocused = useIsFocused();
  useEffect(() => {

    // if (isFocused) {
    //   getData('user').then(users => {
    //     axios.post(urlAPI + '/1_cart.php', {
    //       fid_user: users.id
    //     }).then(res => {
    //       console.log('cart', res.data);

    //       setCart(parseFloat(res.data))
    //     })
    //   })
    // }

  }, [])


  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ backgroundColor: colors.white, flexDirection: 'row',  borderTopLeftRadius:20, borderTopRightRadius:20}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, {
              key: 0
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let iconName = 'home';
        let Newlabel = '';

        if (label === 'Home') {
          iconName = 'home-outline';
          Newlabel = 'Home';
        } else if (label === 'Konten') {
          iconName = 'newspaper-outline';
          Newlabel = 'Konten';
        } else if (label === 'TanyaJawab') {
          iconName = 'chatbubbles-outline';
          Newlabel = 'Tanya Jawab';
        } else if (label === 'Notifikasi') {
          iconName = 'notifications-outline';
          Newlabel = 'Notifikasi';
        } else if (label === 'Logout') {
          iconName = 'log-out-outline';
          Newlabel = 'Logout';
        } else if (label === 'Account') {
          iconName = 'person-outline';
          Newlabel = 'Profile';
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={
              label === 'Kategori'
                ? () =>
                  navigation.navigate('Barang', {
                    key: 0
                  })
                : onPress
            }
            onLongPress={onLongPress}
            style={{ flex: 1 }}>
            <View
              style={{
                color: isFocused ? colors.secondary : '#919095',
                paddingTop: 5,
                paddingBottom: 0,
                fontSize: 12,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}>

              <View
                style={{
                  width: 80,
                  bottom: 0,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                
                }}>
                {/* {label == 'Cart' && <Text style={{
                  position: 'absolute', top: 0, right: 20, bottom: 0, backgroundColor: colors.white, width: 15,
                  textAlign: 'center',
                  fontSize: 11,
                  height: 15, borderRadius: 10, color: colors.primary
                }} >{cart}</Text>} */}
                <Icon
                  name={isFocused ? iconName.replace('-outline', '') : iconName}
                  type="ionicon"
                  size={MyDimensi / 3}
                  color={isFocused ? colors.primary : "#dededede"}
                />

                <Text
                  style={{
                    fontSize: MyDimensi / 5,
                    color: isFocused ? colors.black : "#dededede",
                    fontFamily:fonts.primary[600]
                  }}>
                  {Newlabel}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tab: iconName => ({
    // paddingTop: 5,
    // paddingBottom: 5,
    // fontSize: 12,
    // justifyContent: 'center',
    // alignItems: 'center',
    // textAlign: 'center',
  }),
  box: iconName => ({}),
});
