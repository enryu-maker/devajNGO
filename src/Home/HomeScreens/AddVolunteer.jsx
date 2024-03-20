import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { Images } from '../../Assets/Image'
export default function AddVolunteers({
    navigation
}) {
    return (
        <SafeAreaView className=' justify-start items-center h-full bg-white'>
            <Header
                rightComponent={<View className='w-[20px]' />}
                title={"Add Volunteers"}
                leftComponent={
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image source={Images.back} className='h-6 w-6' />
                    </TouchableOpacity>
                }
            />
        </SafeAreaView>
    )
}