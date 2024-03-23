import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const Init = () => {
    return async dispatch => {
        let access = await AsyncStorage.getItem('access');
        let role = await AsyncStorage.getItem('role');

        if (access !== null) {
            dispatch({
                type: 'LOGIN',
                payload: {
                    access: access,
                    role: role
                }
            })
        }
    }
}

export const LoginAction = (setLoading, data, navigation) => {
    return async dispatch => {
      setLoading(true);
      try {
        await axios.post(baseURL + 'login/', data)
          .then((response) => {
            AsyncStorage.setItem('access', response?.data?.access);
            AsyncStorage.setItem('role', response?.data?.role);
            dispatch({
              type: 'LOGIN',
              payload: {
                access: response?.data?.access,
                role: response?.data?.role,
              },
            })
            setLoading(false);
            navigation.navigate('Main')
          })
          .catch((error) => {
            setLoading(false);
            Toast.show({
              type: 'error',
              text1: error.response.data.msg || error.response.data,
              visibilityTime: 2000,
              autoHide: true,
              topOffset: 30,
              bottomOffset: 40,
            });
          }
          )
      }
      catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  }