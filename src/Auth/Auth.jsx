import { View, Text, Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Type from './Type';
import Register from './Register';
const Stack = createNativeStackNavigator()
export default function Auth() {
    return (
        <Stack.Navigator screenOptions={({ navigation }) => {
            return {
                detachPreviousScreen: !navigation.isFocused(),
                headerShown: false,
                animation: Platform.OS == "ios" ? "simple_push" : "simple_push",
                onTransitionStart: () => Keyboard.dismiss(),
            }
        }}
            initialRouteName={'Type'}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Type' component={Type} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}