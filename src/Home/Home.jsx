import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { Images } from '../Assets/Image'

export default function Home() {
    return (
        <SafeAreaView className=' justify-start items-center h-full bg-white'>
            <Header
                leftComponent={<View className='w-[55px]' />}
                rightComponent={<View className='w-[55px]' />}
                title={"Home"} />
                
            <Image
                source={Images?.login}
                className='h-[280px] w-[95%] rounded-[8px] self-center'
            />
            <View
                className='flex-row justify-between w-full px-3 py-5'>
                <Text
                    className='w-[50%] rounded-[8px] py-1 text-center font-semibold text-sm font-poppins text-white bg-primary'
                >
                    Verified By GOV. of INDIA
                </Text>
            </View>
            <Text
                className='w-full text-start px-3 font-semibold text-2xl font-poppins text-black'
            >
                Devaj NGO
            </Text>
            <Text
                className='w-full text-start capitalize px-3 tracking-wide font-semibold text-sm font-poppins text-gray-400'
            >
                HOUSE NO. 11999,VRUNDAVAN NAGAR,MALEGAON ROAD,Chalisgaon,JALGAON 424101
            </Text>
            <Text
                className='w-full text-start py-3 px-3 font-semibold text-lg font-poppins text-black'
            >
                About
            </Text>
            <Text
                className='w-full text-justify capitalize px-3 tracking-wide font-semibold text-sm font-poppins text-gray-400'
            >
                Devaj NGO is a non-profit organization dedicated to supporting orphaned individuals across India. Founded in 2018, our mission is to provide love, care, education, and opportunities for orphaned children and young adults, empowering them to lead fulfilling lives and become valuable members of society.
            </Text>
        </SafeAreaView>
    )
}