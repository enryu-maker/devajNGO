import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header'
import { Images } from '../../Assets/Image'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RadioForm from 'react-native-simple-radio-button';
import DropDownPicker from 'react-native-dropdown-picker'
export default function AddStudents({
    navigation
}) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
    ]);

    const [data, setData] = React.useState({
        full_name: "",
        parent_name: "",
        photo: "",
        address: "",
        taluka: "",
        district: "",
        state: "Maharashtra",
        pin_code: "",
        mobile_number: "",
        adhar_number: "",
        date_of_birth: "",
        gender: "",
        is_disable: "",
        disability_percentage: ""

    })

    const disableItems = [
        { label: `Yes`, value: true },
        { label: 'No', value: false }
    ]
    return (
        <SafeAreaView className=' justify-start items-center h-full bg-white'>
            <Header
                rightComponent={<View className='w-[20px]' />}
                title={"Add Student"}
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
                        Full Name of Student <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        value={data.full_name}
                        onChangeText={(text) => {
                            setData({ ...data, full_name: text })
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
                        Student Photo <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        // value={data.usename}
                        onChangeText={(text) => {
                            // setData({ ...data, usename: text })
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
                        Full Name of Student's Mother or Father <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        value={data.parent_name}
                        onChangeText={(text) => {
                            setData({ ...data, parent_name: text })
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
                        Complete Address of Student <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        multiline
                        value={data.address}
                        onChangeText={(text) => {
                            setData({ ...data, address: text })
                        }}
                        keyboardType="email-address"
                        className='border-[1px] h-[80px] font-poppins rounded-[8px] border-gray-400 w-full px-6 focus:border-primary'
                    // placeholder='@jhondoe'
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
                    {/* <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    /> */}
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
                        Pin Code <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        value={data.pin_code}
                        onChangeText={(text) => {
                            setData({ ...data, pin_code: text })
                        }}
                        keyboardType="number-pad"
                        className='border-[1px] h-[50px] font-poppins rounded-[8px]  border-gray-400 w-full px-6 focus:border-primary'
                    // placeholder='@jhondoe'
                    />
                </View>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                    >
                        Mobile Number <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        value={data.mobile_number}
                        onChangeText={(text) => {
                            setData({ ...data, mobile_number: text })
                        }}
                        keyboardType="number-pad"
                        maxLength={10}
                        className='border-[1px] h-[50px] font-poppins rounded-[8px]  border-gray-400 w-full px-6 focus:border-primary'
                    // placeholder='@jhondoe'
                    />
                </View>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                    >
                        Student's Aadhaar Card Number <Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        value={data.adhar_number}
                        keyboardType="number-pad"
                        maxLength={12}
                        onChangeText={(text) => {
                            setData({ ...data, adhar_number: text })
                        }}
                        className='border-[1px] tracking-widest h-[50px] font-poppins rounded-[8px]  border-gray-400 w-full px-6 focus:border-primary'
                    // placeholder='@jhondoe'
                    />
                </View>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                    >
                        Date of Birth of Student<Text className=' text-red-600'>*</Text>
                    </Text>
                    <TextInput
                        // value={data.usename}
                        onChangeText={(text) => {
                            // setData({ ...data, usename: text })
                        }}
                        keyboardType="email-address"
                        className='border-[1px] h-[50px] font-poppins rounded-[8px]  border-gray-400 w-full px-6 focus:border-primary'
                    // placeholder='@jhondoe'
                    />
                </View>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                    >
                        Is the Student disabled? <Text className=' text-red-600'>*</Text>
                    </Text>
                    <RadioForm
                        style={{
                            marginVertical: 10
                        }}
                        labelStyle={{
                            fontFamily: 'Poppins',
                        }}
                        radio_props={disableItems}
                        initial={0}
                        buttonColor={"#FF385C"}
                        selectedButtonColor={"#FF385C"}
                        onPress={(value) => { setData({ ...data, is_disable: value }) }}
                    />
                </View>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                    >
                        Gender<Text className=' text-red-600'>*</Text>
                    </Text>
                    <RadioForm
                        style={{
                            marginVertical: 10
                        }}
                        labelStyle={{
                            fontFamily: 'Poppins',
                        }}
                        radio_props={items}
                        initial={0}
                        buttonColor={"#FF385C"}
                        selectedButtonColor={"#FF385C"}
                        onPress={(value) => { setData({ ...data, gender: value }) }}
                    />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}