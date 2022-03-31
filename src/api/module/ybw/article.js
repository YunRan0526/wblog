import request from "/src/api/axios.js"
const instance = request.instance
export function addArticle(obj = {}) {
    return instance({
        url: '/article/add',
        method: 'post',
        data: obj
    })
}

export function deleteArticle(obj = {}) {
    return instance({
        url: '/article/delete',
        method: 'post',
        data: obj
    })
}

export function getAllArticle(obj = {}) {
    return instance({
        url: '/article/getAll',
        method: 'get',
        params: obj
    })
}

export function getArticle(obj = {}) {
    return instance({
        url: '/article/getArticle',
        method: 'get',
        params: obj
    })
}
