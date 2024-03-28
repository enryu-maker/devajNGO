import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image, ScrollView, RefreshControl } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Cards from './HomeComponent/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { GetStudentAction } from '../../Store/actions'

export default function Students({
    navigation
}) {
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        dispatch(GetStudentAction(setLoading))
    }, [student])
    const student = useSelector(state => state.Reducers.student)
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        dispatch(GetStudentAction(setLoading))
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <SafeAreaView className=' justify-start items-center h-full bg-white'>
            <Header
                leftComponent={<View className='w-[55px]' />}
                title={"My Students"}
                rightComponent={
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AddStudents')}
                    >
                        <Text className='text-primary text-base font-bold w-[50px]'>Add + </Text>
                    </TouchableOpacity>
                }
            />
            <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            >
                {
                    student?.map((item, index) => (
                        <View key={index} className='h-[80px] w-[96%] bg-gray-100 mb-3 flex-row  justify-between px-3 items-center self-center'>
                            <Image src={"https://apicollection.pythonanywhere.com" + item?.photo} className='h-[80%] w-[60px] rounded-full shadow-md' />
                            <View
                                className='w-[70%]'>
                                <Text
                                    className=' font-poppins font-bold'
                                >
                                    Name : {item?.full_name}
                                </Text>
                                <Text
                                    className=' font-poppins font-bold'
                                >
                                    Gender : {item?.gender}
                                </Text>
                                <Text
                                    className=' font-poppins font-bold'
                                >
                                    District : {item?.district}
                                </Text>
                            </View>

                        </View>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}