import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Auth from '../Auth/Auth';
import HomeNav from '../Home/HomeNav';
export default function Index() {
    return (
        <NavigationContainer>
            <HomeNav />
        </NavigationContainer>
    )
}