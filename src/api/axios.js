import axios from 'axios'
import $message from '/src/components/MessageBox/index.js'
const queue = []
export class Request {
    constructor(baseURL = '/api', timeout = 5000) {
        this.instance = axios.create({
            baseURL,
            withCredentials: true, // 跨域携带 cookie
            headers: {
                'Content-Type': 'application/json', // json 格式
            },
            timeout
        })
        this.useInterceptors();
        this.queue = queue
    }
    //拦截器初始化
    useInterceptors() {
        // 请求拦截器
        this.instance.interceptors.request.use(config => {
            let token = localStorage.getItem('yebaoc_token')
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        }, error => {
            $message.error(error)
            Promise.reject(error)
        })

        // 响应拦截器
        this.instance.interceptors.response.use(
            response => {
                if (!response.data.success) {
                    $message.error(JSON.stringify(response.data.message))
                }
                return response.data
            },
            error => {
                $message.error(error)
                Promise.reject(error)
            }
        )
    }
}

export default new Request()