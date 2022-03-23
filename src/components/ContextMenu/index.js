import ContextMenu from './ContextMenu.vue'
import { render, createVNode } from "vue";
import yb from '/src/utils/YbManager.js'
//用于渲染菜单的el
const instance = []
instance.clear = () => {
    for (let i = 0; i <= instance.length; i++) {
        instance.pop().component.proxy.visible = false
    }
}
const $contextMenu = (x, y) => {
    if (instance.length) {
        instance.clear()
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
            console.log('destroy')
            if (el) {
                render(null, el)
                el = null
                vNode = null
            }
            //在这里销毁组件
        },
        onClose: () => {
            console.log('close')
            vNode.component.proxy.visible = false
        }
    }
    let el = document.createElement('div');
    //createVNode 即 h() 将参数渲染成Vnode
    let vNode = createVNode(ContextMenu, props);
    instance.push(vNode)
    //将vnode挂载到el vNode => dom
    render(vNode, el);

    //将真实dom挂载到页面
    document.body.appendChild(el.firstElementChild);
    return instance
}


export default $contextMenu
