import { View, Text, Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Tab from './Tab';
import AddStudents from './HomeScreens/AddStudents';
import AddVolunteers from './HomeScreens/AddVolunteer';
const Stack = createNativeStackNavigator()
export default function HomeNav() {
    return (
        <Stack.Navigator screenOptions={({ navigation }) => {
            return {
                detachPreviousScreen: !navigation.isFocused(),
                headerShown: false,
                animation: Platform.OS == "ios" ? "simple_push" : "simple_push",
                onTransitionStart: () => Keyboard.dismiss(),
            }
        }}
            initialRouteName={'Main'}>
            <Stack.Screen name='Main' component={Tab} />
            <Stack.Screen name='AddStudents' component={AddStudents} />
            <Stack.Screen name='AddVolunteers' component={AddVolunteers} />
        </Stack.Navigator>
    )
}