import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image, ScrollView, RefreshControl } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { GetVolunteersAction } from '../../Store/actions'

export default function Volunteers({
    navigation
}) {
    const dispatch = useDispatch()
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        dispatch(GetVolunteersAction(setLoading))
    }, [volunteers])
    const volunteers = useSelector(state => state.Reducers.volunteers)
    console.log(volunteers)
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
                title={"Volunteers"}
                rightComponent={<View className='w-[55px]' />}
            />
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                {
                    volunteers?.map((item, index) => (
                        <View key={index} className='h-[100px] w-[96%] bg-gray-100 mb-3 flex-row  justify-between px-3 items-center self-center'>
                            <View
                                className='w-[100%] space-y-2'>
                                <Text
                                    className=' font-poppins font-bold'
                                >
                                    Role : {item?.role}
                                </Text>
                                <Text
                                    className=' font-poppins font-bold'
                                >
                                    Student Added : {item?.student_count}
                                </Text>
                                <Text
                                    className=' font-poppins font-bold'
                                >
                                    Volunteer Count : {item?.volunteer_count}
                                </Text>
                            </View>

                        </View>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}