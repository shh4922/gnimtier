import axios, { Axios, AxiosRequestConfig } from 'axios' // 추가 
import { interceptorAxios } from './interceptor';


const http: Axios = axios.create({
    baseURL: 'http://gnumtier.kr',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000
})

export const get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await http.get<T>(url, config);
    return response.data;
};
export const post = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    const response = await http.post<T>(url, data, config);
    return response.data;
};

export const getWithToken = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    const response = await interceptorAxios.get<T>(url, config);
    return response.data;
};
export const postWithToken = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    const response = await interceptorAxios.post<T>(url, data, config);
    return response.data;
};
