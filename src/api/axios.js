import axios from 'axios'
import { BASE_URL, timeout } from './axios.config.js'

// 创建公共实例
const request = axios.create({
    baseURL: BASE_URL,
    timeout
})

request.interceptors.request.use(
    config => {
        config.withCredentials = true;
        return config
    },
    err => {
        return Promise.reject(err)
    })

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 对响应数据做点什么

    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default request