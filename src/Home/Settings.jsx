import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import Header from '../Components/Header'

export default function Settings() {
    const dispatch = useDispatch()
    return (
        <SafeAreaView className=' justify-start items-center h-full bg-white'>
            <Header
                leftComponent={<View className='w-[55px]' />}
                rightComponent={<View className='w-[55px]' />}
                title={"Settings"} />
            <TouchableOpacity
                onPress={() => {
                    dispatch({
                        type: "LOGOUT"
                    })
                }}
            >
                <Text>Settings</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}