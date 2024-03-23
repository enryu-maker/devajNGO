import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, Platform } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ActivityIndicator } from 'react-native-paper'
import { Images } from '../Assets/Image'
import Header from '../Components/Header'
import { SelectList } from 'react-native-dropdown-select-list'

export default function AddVolunteers({
    navigation
}) {
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState({
        "name": "",
        "mobile_number": "",
        "state":"Maharashtra"
    })
    const district = [
        { key: 1, value: "Ahmednagar" },
        { key: 2, value: "Akola" },
        { key: 3, value: "Amravati" },
        { key: 4, value: "Aurangabad" },
        { key: 5, value: "Beed" },
        { key: 6, value: "Bhandara" },
        { key: 7, value: "Buldhana" },
        { key: 8, value: "Chandrapur" },
        { key: 9, value: "Dhule" },
        { key: 10, value: "Gadchiroli" },
        { key: 11, value: "Gondia" },
        { key: 12, value: "Hingoli" },
        { key: 13, value: "Jalgaon" },
        { key: 14, value: "Jalna" },
        { key: 15, value: "Kolhapur" },
        { key: 16, value: "Latur" },
        { key: 17, value: "Mumbai City" },
        { key: 18, value: "Mumbai Suburban" },
        { key: 19, value: "Nagpur" },
        { key: 20, value: "Nanded" },
        { key: 21, value: "Nandurbar" },
        { key: 22, value: "Nashik" },
        { key: 23, value: "Osmanabad" },
        { key: 24, value: "Palghar" },
        { key: 25, value: "Parbhani" },
        { key: 26, value: "Pune" },
        { key: 27, value: "Raigad" },
        { key: 28, value: "Ratnagiri" },
        { key: 29, value: "Sangli" },
        { key: 30, value: "Satara" },
        { key: 31, value: "Sindhudurg" },
        { key: 32, value: "Solapur" },
        { key: 33, value: "Thane" },
        { key: 34, value: "Wardha" },
        { key: 35, value: "Washim" },
        { key: 36, value: "Yavatmal" }
    ]
    return (
        <View className='flex-1  items-center h-full bg-white'>
            <SafeAreaView>
                <Header
                    rightComponent={<View className='w-[20px]' />}
                    title={"Register as Volunteers"}
                    leftComponent={
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Image source={Images.back} className='h-6 w-6' />
                        </TouchableOpacity>
                    }
                />
            </SafeAreaView>
            <KeyboardAwareScrollView className='w-[100%] self-center space-y-5 mb-[10px] mt-5'>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full  font-poppins  text-[14px] pb-2 text-gray-500'
                    >
                        Name of Volunteer <Text className=' text-red-600'>*</Text>
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
                        Mobile Number of Volunteer <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        value={data.mobile_number}
                        onChangeText={(text) => {
                            setData({ ...data, mobile_number: text })
                        }}
                        keyboardType="number-pad"
                        maxLength={10}
                        className='border-[1px] h-[50px] font-poppins rounded-[8px] border-gray-400 w-full px-6 focus:border-primary'
                    />
                </View>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                    >
                        Name of Bank <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        value={data.mobile_number}
                        onChangeText={(text) => {
                            setData({ ...data, mobile_number: text })
                        }}
                        keyboardType="number-pad"
                        maxLength={10}
                        className='border-[1px] h-[50px] font-poppins rounded-[8px] border-gray-400 w-full px-6 focus:border-primary'
                    />
                </View>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                    >
                        Account Number of Volunteer <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        value={data.first_name}
                        onChangeText={(text) => {
                            setData({ ...data, first_name: text })
                        }}
                        keyboardType="number-pad"
                        className='border-[1px] h-[50px] font-poppins rounded-[8px] border-gray-400 w-full px-6 focus:border-primary'
                    />
                </View>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                    >
                        IFSC CODE of Volunteer <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        value={data.mobile_number}
                        onChangeText={(text) => {
                            setData({ ...data, mobile_number: text })
                        }}
                        keyboardType="number-pad"
                        maxLength={10}
                        className='border-[1px] h-[50px] font-poppins rounded-[8px] border-gray-400 w-full px-6 focus:border-primary'
                    />
                </View>

                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                    >
                        Taluka <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        value={data.taluka}
                        onChangeText={(text) => {
                            setData({ ...data, taluka: text })
                        }}
                        keyboardType="email-address"
                        className='border-[1px] h-[50px] font-poppins rounded-[8px] border-gray-400 w-full px-6 focus:border-primary'
                    // placeholder='@jhondoe'
                    />
                </View>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                    >
                        District <Text className=' text-red-600'>*</Text>
                    </Text>
                    <SelectList
                        fontFamily='Poppins'
                        setSelected={(val) => setData({ ...data, district: val })}
                        data={district}
                        save="value"
                        placeholder='Select  District'
                    />
                </View>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                    >
                        State <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        readOnly
                        value={data.state}
                        keyboardType="email-address"
                        className='border-[1px] h-[50px] font-poppins rounded-[8px] bg-gray-100 border-gray-400 w-full px-6 focus:border-primary'
                    // placeholder='@jhondoe'
                    />
                </View>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                    >
                        Password <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        value={data.taluka}
                        onChangeText={(text) => {
                            setData({ ...data, taluka: text })
                        }}
                        keyboardType="email-address"
                        className='border-[1px] h-[50px] font-poppins rounded-[8px] border-gray-400 w-full px-6 focus:border-primary'
                    // placeholder='@jhondoe'
                    />
                </View>
                <TouchableOpacity
                        disabled={loading}
                        onPress={() => {
                            dispatch(LoginAction(setLoading, data, navigation))
                        }}
                        className='bg-primary w-[88%] self-center h-[50px] rounded-full justify-center items-center'
                    >
                        {
                            loading ?
                                <ActivityIndicator
                                    color='#fff'
                                />
                                :
                                <Text
                                    className='text-center text-lg font-bold  self-center flex justify-center items-center  tracking-wider font-poppins text-white'
                                >
                                    Register
                                </Text>
                        }
                    </TouchableOpacity>

            </KeyboardAwareScrollView>
            {/* <TouchableOpacity
                onPress={(e) => {
                    // setLoading(true)
                }}
                className={`w-full ${Platform.OS == "ios" ? "h-[90px]" : "h-[70px]"} justify-center items-center bg-primary`}>
                {
                    loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) :
                        <Text
                            className=' w-[100%] font-bold  uppercase tracking-wider font-poppins text-center text-white text-xl'
                        >SignUp</Text>
                }
            </TouchableOpacity> */}
        </View>
    )
}