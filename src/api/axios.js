import axios from 'axios'
axios.interceptors.request.use(
    config => {
        console.log(config);
        return config
    },
    err => {
        return Promise.reject(err)
    })
export default axios