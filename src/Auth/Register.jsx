import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, Platform } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ActivityIndicator } from 'react-native-paper'
import { Images } from '../Assets/Image'
import Header from '../Components/Header'
import { SelectList } from 'react-native-dropdown-select-list'
import { RegisterAction } from '../../Store/actions'
import { useDispatch } from 'react-redux'
import { district } from '../Components/Data'
export default function AddVolunteers({
    navigation
}) {
    const [loading, setLoading] = React.useState(false);
    const [taluka,setTaluka] = React.useState([])
    const [data, setData] = React.useState({
        "first_name": "",
        "email": "",
        "phone":"",
        "role":"Volunteer",
        "ifsc_code":"",
        "bank_name":"",
        "district":"",
        "taluka":"",
        "bank_account_number":"",
        "state":"Maharashtra",
        "password":""
    })
    
    const dispatch = useDispatch()
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
                        Email of Volunteer <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        value={data.email}
                        onChangeText={(text) => {
                            setData({ ...data, email: text })
                        }}
                        keyboardType="email-address"
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
                        value={data.phone}
                        onChangeText={(text) => {
                            setData({ ...data, phone: text })
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
                        value={data.bank_name}
                        onChangeText={(text) => {
                            setData({ ...data, bank_name: text })
                        }}
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
                        value={data.bank_account_number}
                        onChangeText={(text) => {
                            setData({ ...data, bank_account_number: text })
                        }}
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
                        value={data.ifsc_code}
                        onChangeText={(text) => {
                            setData({ ...data, ifsc_code: text })
                        }}
                        className='border-[1px] h-[50px] font-poppins rounded-[8px] border-gray-400 w-full px-6 focus:border-primary'
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
                        setSelected={(val) =>{ 
                            setData({ ...data, district: val })
                            setTaluka(district[district.findIndex(({ value }) => value === val)].talukas)
                        }}
                        data={district}
                        save="value"
                        placeholder='Select  District'
                    />
                </View>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                    >
                        Taluka <Text className=' text-red-600'>*</Text>
                    </Text>
                    <SelectList
                        fontFamily='Poppins'
                        setSelected={(val) => setData({ ...data, taluka: val })}
                        data={taluka}
                        save="value"
                        placeholder='Select  Taluka'
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
                        value={data.password}
                        onChangeText={(text) => {
                            setData({ ...data, password: text })
                        }}
                        className='border-[1px] h-[50px] font-poppins rounded-[8px] border-gray-400 w-full px-6 focus:border-primary'
                    // placeholder='@jhondoe'
                    />
                </View>
                <TouchableOpacity
                        disabled={loading}
                        onPress={() => {
                            dispatch(RegisterAction(setLoading, data, navigation))
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
        </View>
    )
}