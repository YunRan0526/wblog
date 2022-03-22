import request from "/src/api/axios.js"
const instance = request.instance
export function login(obj) {
    return instance({
        url: '/user/login',
        method: 'post',
        data: obj
    })
}
