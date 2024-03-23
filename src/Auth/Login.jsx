import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import { Images } from '../Assets/Image'
import { ActivityIndicator } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast from 'react-native-toast-message'
import { toastConfig } from '../Components/ToastConfig'
import { useDispatch } from 'react-redux'
import { LoginAction } from '../../Store/actions'
export default function Login({
    navigation,
    route
}) {
    console.log(route?.params?.session)
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState({
        username: "",
        password: "",
    })
    const dispatch = useDispatch()
    return (
        <SafeAreaView className=' justify-evenly items-center h-full bg-white'>
            <KeyboardAwareScrollView
                className='w-full flex space-y-6 '
            >
                <Image
                    source={Images?.logo}
                    resizeMode="contain"
                    className='h-[250px] w-[95%] mt-4 rounded-[8px] self-center'
                />
                <Text
                    className='text-2xl text-black font-bold  self-center font-poppins '
                >
                    {
                        route?.params?.session ? "Volunteer Login" : "Coordinator Login"
                    }
                </Text>
                <Text
                    className='text-lg text-gray-600 self-center font-poppins '
                >
                    Please Login to continue
                </Text>
                <View className='w-[100%] items-center justify-center space-y-5'>
                    <View className='w-[88%]'>
                        <Text
                            className='self-start w-full font-poppins text-[16px] pb-2font-poppins text-black'
                        >
                            Username
                        </Text>
                        <TextInput
                            value={data.username}
                            onChangeText={(text) => {
                                setData({ ...data, username: text })
                            }}
                            keyboardType="email-address"
                            className='border-[1px] h-[50px] font-poppins rounded-[8px] border-gray-400 w-full px-6 focus:border-primary'
                            placeholder='@jhondoe'
                        />
                    </View>
                    <View className='w-[88%]'>
                        <Text
                            className='self-start w-full text-[16px] font-poppins pb-2  text-black'
                        >
                            Password
                        </Text>
                        <TextInput
                            value={data.password}
                            onChangeText={(text) => {
                                setData({ ...data, password: text })
                            }}
                            keyboardType="default"
                            className='border-[1px] h-[50px] font-poppins rounded-[8px] border-gray-400 w-full px-6 focus:border-primary'
                            placeholder='*********'
                        />
                    </View>
                    <TouchableOpacity
                        disabled={loading}
                        onPress={() => {
                            dispatch(LoginAction(setLoading, data, navigation))
                        }}
                        className='bg-primary w-[88%] h-[50px] rounded-full justify-center items-center'
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
                                    Login
                                </Text>
                        }
                    </TouchableOpacity>
                    {
                        route?.params?.session ?
                            <TouchableOpacity
                                disabled={loading}
                                onPress={() => {
                                    navigation.navigate("Register")
                                }}
                                className='w-[88%] h-[50px] rounded-full justify-center items-center'
                            >
                                {
                                    loading ?
                                        <ActivityIndicator
                                            color='#fff'
                                        />
                                        :
                                        <Text
                                            className='text-center text-base self-center flex justify-center items-center  tracking-wider font-poppins text-black'
                                        >
                                            Create Volunteer Account?<Text className='text-primary font-bold '> Sign Up Here!</Text>
                                        </Text>
                                }
                            </TouchableOpacity>
                            :
                            null
                    }
                </View>
            </KeyboardAwareScrollView>
            <Toast ref={(ref) => { Toast.setRef(ref) }} config={toastConfig} />
        </SafeAreaView>
    )
}