import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import axiosIns, { baseURL } from "../src/Helper/Helper";
import Toast from "react-native-toast-message";

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
            text1: error?.response?.data?.msg ,
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
          });
        }
        )
    }
    
}

export const RegisterAction = (setLoading, data, navigation) => {
  return async dispatch => {
    setLoading(true);
    try {
      await axios.post(baseURL + 'register/', data)
        .then((response) => {
          Toast.show({
            type: 'success',
            text1: response?.data?.msg,
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
          });
          setTimeout(() => {
            setLoading(false);
            navigation.goBack();
          }, 3500)
        })
        .catch((error) => {
          setLoading(false);
          Toast.show({
            type: 'error',
            text1: error?.response?.data?.msg,
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
          });
        }
        )
    }
    catch (error) {
      (error?.response?.data?.msg);
      setLoading(false);
    }
  }
}

export const AddStudentAction = (setLoading, data, navigation) => {
  const formdata = new FormData();
  for (let key in data) {
    formdata.append(key, data[key]);
  }
  return async dispatch => {
    setLoading(true);
      await axiosIns.post(baseURL + 'add-student/', formdata,{
        headers:{
          'Content-Type': 'multipart/form-data',
        }
      })
        .then((response) => {
          Toast.show({
            type: 'success',
            text1: "Students Added Sucessfully",
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
          });
          setTimeout(() => {
            setLoading(false);
            navigation.goBack();
          }, 2500)
        })
        .catch((error) => {
          setLoading(false);
          Toast.show({
            type: 'error',
            text1: "Error Adding Students" ,
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
          });
        }
        )
  }
}

export const GetStudentAction = (setLoading) => {
  return async dispatch => {
    setLoading(true);
      await axiosIns.get(baseURL + 'my-student/')
        .then((response) => {
          dispatch({
            type: 'GET_STUDENTS',
            payload: response.data,
          })
          setLoading(false)
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
}

export const GetVolunteersAction = (setLoading) => {
  return async dispatch => {
    setLoading(true);
      await axiosIns.get(baseURL + 'my-volunteer/')
        .then((response) => {
          dispatch({
            type: 'GET_VOLUNTEERS',
            payload: response.data,
          })
          setLoading(false)
        })
        .catch((error) => {
          setLoading(false);
          Toast.show({
            type: 'error',
            text1: error?.response?.data?.msg  || "Error Occurred!",
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
          });
        }
        )
    }
}