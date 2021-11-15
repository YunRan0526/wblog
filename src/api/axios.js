import axios from 'axios'

axios.interceptors.request.use(
    config => {
        config.withCredentials=true;
        return config
    },
    err => {
        return Promise.reject(err)
    })

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log(response);
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default axios