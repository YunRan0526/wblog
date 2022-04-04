import UnLock from "/src/components/UnLock/index.vue"
import { render, createVNode } from "vue";
let callBackObj
const $unlock = (str) => {
    let wraper = document.createElement('div');
    const props = {
        onCancel: () => {
            callBackObj.reject()
            render(null, wraper)
            vm ? vm = null : ""
            wraper ? wraper = null : ""
        },
        onConfirm: (v) => {
            callBackObj.resolve(v)
            render(null, wraper)
            vm ? vm = null : ""
            wraper ? wraper = null : ""
        },
        content: str
    }
    //createVNode 即 h() 将参数渲染成Vnode
    let vm = createVNode(UnLock, props);
    //将vnode挂载到wraper
    render(vm, wraper);
    document.body.appendChild(wraper.firstElementChild);
    return new Promise((resolve, reject) => {
        callBackObj = { resolve, reject }
    })
}

export default $unlock