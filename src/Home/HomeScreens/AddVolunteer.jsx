import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import { Images } from '../../Assets/Image'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ActivityIndicator } from 'react-native-paper'

export default function AddVolunteers({
    navigation
}) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = React.useState({
        "first_name": "",
        "last_name": "",
        "mobile_number": ""
    })
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
            <KeyboardAwareScrollView className='w-[100%] self-center space-y-2'>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                    >
                        First Name of Volunteer <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        value={data.first_name}
                        onChangeText={(text) => {
                            setData({ ...data, first_name: text })
                        }}
                        keyboardType="default"
                        className='border-[1px] h-[50px] font-poppins rounded-[8px] border-gray-400 w-full px-6 focus:border-primary'
                    />
                </View>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                    >
                        Last Name of Volunteer <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        value={data.last_name}
                        onChangeText={(text) => {
                            setData({ ...data, last_name: text })
                        }}
                        keyboardType="default"
                        className='border-[1px] h-[50px] font-poppins rounded-[8px] border-gray-400 w-full px-6 focus:border-primary'
                    />
                </View>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                    >
                        Mobile Number of Volunteer <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        value={data.mobile_number}
                        onChangeText={(text) => {
                            setData({ ...data, mobile_number: text })
                        }}
                        keyboardType="tel"
                        maxLength={10}
                        className='border-[1px] h-[50px] font-poppins rounded-[8px] border-gray-400 w-full px-6 focus:border-primary'
                    />
                </View>
            </KeyboardAwareScrollView>
            <TouchableOpacity
                onPress={(e) => {
                    // setLoading(true)
                }}
                className='w-full h-[70px] justify-center items-center bg-primary'>
                {
                    loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) :
                        <Text
                            className=' w-[100%] uppercase tracking-wider text-center text-white text-xl'
                        >ADD Volunteer</Text>
                }
            </TouchableOpacity>
        </SafeAreaView>
    )
}