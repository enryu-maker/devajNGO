import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function Header({
    leftComponent,
    rightComponent,
    title,
}) {
    return (
        <View className='h-[60px] w-full flex-row items-center justify-between px-4 '>
            {leftComponent}
            <Text className=' font-poppins text-2xl font-bold tracking-wider text-black '>{title}</Text>
            {rightComponent}
        </View>
    )
}