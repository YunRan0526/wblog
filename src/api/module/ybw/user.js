import request from "@/api/axios.js"

export function login(obj) {
    return request({
        url: '/user/login',
        method: 'post',
        data: obj
    })
}