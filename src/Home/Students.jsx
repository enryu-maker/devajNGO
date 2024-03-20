import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

export default function Students({
    navigation
}) {
    return (
        <SafeAreaView className=' justify-start items-center h-full bg-white'>
            <Header
                leftComponent={<View className='w-[55px]'/>}
                title={"Students"}
                rightComponent={
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AddStudents')}
                    >
                        <Text className='text-primary text-base font-bold'>Add + </Text>
                    </TouchableOpacity>
                }
            />
        </SafeAreaView>
    )
}