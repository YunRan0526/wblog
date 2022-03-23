import ContextMenu from './ContextMenu.vue'
import { render, createVNode } from "vue";
import yb from '/src/utils/YbManager.js'
//用于渲染菜单的el
let cache = null

const $contextMenu = (x, y) => {
    if (cache) {
        cache.clear()
        cache = null
    }
    let zIndex = yb.nextIndex()
    const menu = [
        { key: 'getDetail', value: '查看' },
        { key: 'edit', value: '编辑' },
        { key: 'delete', value: '删除' },
    ]
    let props = {
        x, y,
        zIndex,
        menu,
        onDestroy: () => {
            console.log("onDestroy");
            //在这里销毁组件
            render(null, wraper)
        },
        onClose: () => {
            console.log("onClsoe");
            vm.component.proxy.visible = false
        }
    }
    let wraper = document.createElement('div');
    //createVNode 即 h() 将参数渲染成Vnode
    const vm = createVNode(ContextMenu, props);
    cache = vm
    cache.clear = () => {
        render(null, wraper);
        wraper = null
    }
    //将vnode挂载到wraper vm => dom
    render(vm, wraper);
    //将真实dom挂载到页面
    document.body.appendChild(wraper.firstElementChild);
    return {
        close: () => {
            vm.component.proxy.visible = false
        }
    }
}


export default $contextMenu
