import axios from "@/api/axios.js"

/**
 * xxxxx
 *
 * @author YBW
 */




export function getLoginUrl() {
    return axios({
        url: '/passport_api/qrcode/getLoginUrl',
        method: 'get',
        params:{
            timestamp:new Date().getTime()
        }
    })
}

export function getLoginInfo(obj) {
    return axios({
        headers:{
            'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
        },
        url: '/passport_api/qrcode/getLoginInfo',
        method: 'post',
        params: obj
    })
}

export function getUserInfo() {
    return axios({
        url: '/bili_api/x/space/myinfo',
        method: 'get'
    })
}

