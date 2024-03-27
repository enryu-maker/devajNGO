import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export const baseURL = 'http://192.168.10.34:8000/account/'
let headers = {};
const axiosIns = axios.create({
    baseURL: 'http://192.168.10.34:8000/account/',
    headers,
});
axiosIns.interceptors.request.use(

    async (config) => {
        const token = await AsyncStorage.getItem("access");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error.msg);
    },
);

axiosIns.interceptors.response.use(
    (response) =>
        new Promise((resolve, reject) => {
            resolve(response);
        }),
    (error) => {
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
        if (error.response.status === 401) {
            console.log("401");
        } else {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    },
);

export default axiosIns;