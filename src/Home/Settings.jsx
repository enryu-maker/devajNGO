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
            <View className='w-[88%] space-y-3'>
                <TouchableOpacity
                    onPress={() => {
                        // dispatch({
                        //     type: "LOGOUT"
                        // })
                    }}
                >
                    <Text className=' text-xl font-poppins font-bold tracking-widest'>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch({
                            type: "LOGOUT"
                        })
                    }}
                >
                    <Text className=' text-xl text-red-600 font-poppins font-bold tracking-widest'>Logout</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}