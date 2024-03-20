import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

export default function Home() {
    return (
        <SafeAreaView className=' justify-start items-center h-full bg-white'>
            <Header
                leftComponent={<View className='w-[55px]' />}
                rightComponent={<View className='w-[55px]' />}
                title={"Home"} />
        </SafeAreaView>
    )
}