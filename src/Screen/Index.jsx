import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Auth from '../Auth/Auth';
import HomeNav from '../Home/HomeNav';
import { useDispatch, useSelector } from 'react-redux';
import { Init } from '../../Store/actions';
export default function Index() {
    const access = useSelector(state => state.Reducers.access)
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(Init())
    },[])
    return (
        <NavigationContainer>
            {
                    access == null ? <Auth /> : <HomeNav />
            }
        </NavigationContainer>
    )
}