import ContextMenu from './ContextMenu.vue'
import { render, createVNode, ref } from "vue";
import yb from '/src/utils/YbManager.js'
let uuid = 1
//用于渲染菜单的el
const instance = []

export const clear = () => {
    let cache = [...instance]
    if (!cache.length) return
    cache.forEach(({ vNode, id }) => {
        if (vNode) {
            console.log(vNode)
            vNode.component.exposed.hide()
            console.log('CLOSE' + id)
        }
        let idx = instance.findIndex((item) => id === item.id)
        if (idx > -1) {
            instance.splice(idx, 1)
        }
    })
}

const $contextMenu = (
    x, y,
    menu = [
        { key: 'getDetail', value: '查看', handler: () => { console.log('查看') } },
        { key: 'edit', value: '编辑', handler: () => { console.log('编辑') } },
        { key: 'delete', value: '删除', handler: () => { console.log('删除') } },
    ],
    v
) => {
    if (instance) {
        clear()
    }
    let zIndex = yb.nextIndex()
    let id = uuid++
    let props = {
        id,
        x, y, v,
        zIndex,
        menu,
        onDestroy: () => {
            console.log('DESTORY' + id)
            if (el) {
                render(null, el)
                el = null
                vNode = null
            }
            //在这里销毁组件
        }
    }
    let el = document.createElement('div');
    //createVNode 即 h() 将参数渲染成Vnode
    let vNode = createVNode(ContextMenu, props);
    instance.push({
        id, vNode
    })
    //将vnode挂载到el vNode => dom
    render(vNode, el);

    //将真实dom挂载到页面
    document.body.appendChild(el.firstElementChild);
}


export default $contextMenu
