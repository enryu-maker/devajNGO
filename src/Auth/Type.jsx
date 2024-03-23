import { View, Text, ImageBackground, TouchableOpacity, StatusBar, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Images } from '../Assets/Image'

export default function Type({
    navigation
}) {
    const dispatch = useDispatch()
    return (
        <View className="flex-1 items-center justify-center bg-white h-full w-full'"
        >
            {/* <StatusBar barStyle={'black-content'} backgroundColor={"white"} /> */}
            <SafeAreaView className='w-full h-full justify-center items-center'>
                <Image
                    // tintColor={"#ff385c"}
                    className='object-contain'
                    source={Images.login}
                />
                <View
                    className='flex-1 justify-end items-center w-full'
                >
                    <View
                        className='bg-white justify-evenly items-center h-[350px] w-full rounded-tl-[32px] rounded-tr-[32px] '>
                        <Text
                            className='text-xl px-8 text-justify font-poppins self-start tracking-wider text-black'
                        >
                            Empowering Lives, Building Futures: Together with <Text className=' text-primary'>Devaj NGO</Text>
                        </Text>
                        <Text
                            className='text-xs font-poppins tracking-wide px-8 text-justify self-start text-gray-500'
                        >
                            Orphaned children are equally deserving of unconditional support and love, the world is much stronger when the vulnerable are also strengthened
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Login", {
                                    session: false
                                })
                            }}
                            className='bg-primary w-[88%] h-[50px] rounded-full justify-center items-center'
                        >
                            <Text
                                className='text-center text-lg font-poppins  tracking-wider font-Nunito text-white'
                            >
                                Login as Coordinator
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Login", {
                                    session: true
                                })
                            }}
                            className='border-[1px]  border-primary  w-[88%] h-[50px] rounded-full justify-center items-center'
                        >
                            <Text
                                className='text-center font-poppins text-primary text-lg tracking-wider font-Nunito '
                            >
                                Login as Volunteer
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}