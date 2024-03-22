import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header'
import { Images } from '../../Assets/Image'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RadioForm from 'react-native-simple-radio-button';
import ImagePicker from 'react-native-image-crop-picker';
import { ActivityIndicator } from 'react-native-paper'
import DatePicker from 'react-native-date-picker'
import { SelectList } from 'react-native-dropdown-select-list'
export default function AddStudents({
    navigation
}) {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const [image, setImage] = React.useState(null);
    const [loading, setLoading] = useState(false);

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

    const [items, setItems] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
    ]);
    const pickImage = async () => {
        let result = await ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7,
        });

        if (result.cancelled) {
            // setImageError(true);
        }

        if (!result.cancelled) {
            const newImageUri = Platform.OS === "ios" ? 'file:///' + result?.sourceURL.split('file:/').join('') : 'file:///' + result?.path.split('file:/').join('')
            const uriParts = result?.path?.split('.')
            const fileType = uriParts[uriParts.length - 1];
            setImage({
                type: `image/${fileType}`,
                uri: result?.path,
                name: `photo.${fileType}`
            });
        }
    };

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
        disability_percentage: "",
        payement_mode:""
    })

    const disableItems = [
        { label: `Yes`, value: true },
        { label: 'No', value: false }
    ]
    const paymentItems = [
        { label: `CASH`, value: "CASH" },
        { label: 'ONLINE/UPI', value: "ONLINE" }
    ]
    return (
        <View className='flex-1  items-center h-full bg-white'>
            <SafeAreaView>

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
            </SafeAreaView>

            <KeyboardAwareScrollView className='w-[100%] self-center space-y-2'>
                <TouchableOpacity
                    className=' w-[175px] justify-center self-center items-center'
                    onPress={pickImage}>
                    <View
                        className='border-[1px] h-[120px] w-[120px] justify-center items-center border-gray-400 rounded-full '
                    >
                        {image ? (
                            <View>
                                <Image
                                    source={{ uri: image?.uri }}
                                    className='h-full w-full rounded-full justify-center items-center'
                                    resizeMode='cover'
                                />
                            </View>
                        ) : (
                            <View>
                                <Image
                                    source={Images.user}
                                    className='h-[50px] w-[50px] self-center '
                                    tintColor={"#9ca3af"}
                                    resizeMode='contain'
                                />
                            </View>
                        )}
                    </View>
                    <View
                        className='w-full self-center justify-center items-center'
                    >
                        <Text
                            className='w-full text-center font-poppins text-[14px] pb-2 text-gray-500'
                        >
                            Upload Student's Photo <Text className=' text-red-600'>*</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
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
                    <TouchableOpacity
                        className='border-[1px] justify-center tracking-widest h-[50px] font-poppins rounded-[8px]  border-gray-400 w-full px-6 focus:border-primary'
                        onPress={() => {
                            setOpen(!open)
                        }}
                    >
                        <Text
                            className='self-start w-full font-poppins text-[14px] text-gray-500'
                        >
                            {data?.date_of_birth || 'Select date'}
                        </Text>
                    </TouchableOpacity>
                    <DatePicker
                        style={{
                            height: "80px"
                        }}
                        mode='date'
                        className='border-[1px] h-[50px] font-poppins rounded-[8px]  border-gray-400 w-full px-6 focus:border-primary'
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setData({ ...data, date_of_birth: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` });
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
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
                        initial={1}
                        buttonColor={"#2976c3"}
                        selectedButtonColor={"#2976c3"}
                        onPress={(value) => { setData({ ...data, is_disable: value }) }}
                    />
                    {
                        data?.is_disable ?
                            <>
                                <Text
                                    className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                                >
                                    If Yes?<Text className=' text-red-600'>*</Text>
                                </Text>
                                <TextInput
                                    value={data.disability_percentage}
                                    onChangeText={(text) => {
                                        setData({ ...data, disability_percentage: text })
                                    }}
                                    keyboardType="email-address"
                                    className='border-[1px] h-[50px] font-poppins rounded-[8px]  border-gray-400 w-full px-6 focus:border-primary'
                                    placeholder='How much in %'
                                />
                            </>
                            :
                            null
                    }
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
                        buttonColor={"#2976c3"}
                        selectedButtonColor={"#2976c3"}
                        onPress={(value) => { setData({ ...data, gender: value }) }}
                    />
                </View>
                <View className='w-[88%] self-center'>
                    <Text
                        className='self-start w-full font-poppins text-[14px] pb-2 text-gray-500'
                    >
                        Payement Mode<Text className=' text-red-600'>*</Text>
                    </Text>
                    <RadioForm
                        style={{
                            marginVertical: 10
                        }}
                        labelStyle={{
                            fontFamily: 'Poppins',
                        }}
                        radio_props={paymentItems}
                        initial={0}
                        buttonColor={"#2976c3"}
                        selectedButtonColor={"#2976c3"}
                        onPress={(value) => { setData({ ...data, payement_mode: value }) }}
                    />
                </View>
            </KeyboardAwareScrollView>
            <TouchableOpacity
                onPress={(e) => {
                    // setLoading(true)
                }}
                className={`w-full ${Platform.OS=="ios"?"h-[90px]":"h-[70px]"} justify-center items-center bg-primary`}>
                {
                    loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) :
                        <Text
                            className=' w-[100%] uppercase font-poppins font-bold  tracking-wider text-center text-white text-xl'
                        >Save STUDENT</Text>
                }
            </TouchableOpacity>
        </View>
    )
}