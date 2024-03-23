import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Auth from '../Auth/Auth';
import HomeNav from '../Home/HomeNav';
import { useSelector } from 'react-redux';
export default function Index() {
    const access = useSelector(state => state.Reducers.access)
    return (
        <NavigationContainer>
            {
                    access == null ? <Auth /> : <HomeNav />
            }
        </NavigationContainer>
    )
}