import { View, Text, Platform } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
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
            initialRouteName={'Login'}>
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
}