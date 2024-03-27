import { View, Text, Image, Platform } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import { Images } from '../Assets/Image';
import Students from './Students';
import Volunteers from './Volunteers';
import Settings from './Settings';
import { useSelector } from 'react-redux';
const BottomTab = createBottomTabNavigator();
export default function Tab() {
  const role = useSelector(state => state.Reducers.role)
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? Images?.home : Images?.home
          }
          else if (route.name === 'Students') {
            iconName = focused ? Images?.graduation : Images?.graduation;
          }
          else if (route.name === 'Volunteers') {
            iconName = focused ? Images?.user : Images?.user;
          }
          else if (route.name === 'Settings') {
            iconName = focused ? Images?.settings : Images?.settings;
          }
          return (
            <View
              style={{
                // height: 45,
                justifyContent: 'center',
                alignItems: "center",
                alignSelf: 'center',
                marginTop: Platform.OS === "android" ? 0 : 30
              }}>
              <Image
                source={iconName}
                resizeMode={"contain"}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: 30,
                  width: 30,
                  tintColor: focused ? "#f49d32" : "#5c5c5c"
                }}
              />
              <Text
                className=' font-poppins text-xs mt-1 tracking-widest'
                style={{
                  color: focused ? "#f49d32" : "#8C8C8C",
                }}
              >
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarLabelStyle: {
          padding: 0,
          margin: 0,
        },
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#ECECEC",
          height: 80,
          left: 10,
          right: 10,
          justifyContent: "space-evenly",
          alignItems: "center",
          borderRadius: 100,
          alignSelf: "center",
          bottom: 20,
          elevation: 0
        },
        tabBarActiveTintColor: "#2976c3",
        tabBarInactiveTintColor: "#000000",

      })}>
      <BottomTab.Screen name="Home" component={Home} />
      {
        role === "Volunteer"?null:
        <BottomTab.Screen name="Volunteers" component={Volunteers} />
      }
      <BottomTab.Screen name="Students" component={Students} />
      <BottomTab.Screen name="Settings" component={Settings} />

      {/* <BottomTab.Screen name="User" component={Progress} /> */}
    </BottomTab.Navigator>
  )
}