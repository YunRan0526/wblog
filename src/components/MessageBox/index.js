import MessageBox from "/src/components/MessageBox/MessageBox.vue"
import { render, createVNode } from "vue";
let seed = 1;
const instances = [];
const close = (id) => {
    console.log('close', id);
    const idx = instances.findIndex(({ vNode }) => id === vNode.component.props.id);
    if (idx === -1) return

    const { vNode } = instances[idx]
    if (!vNode) return

    const removedHeight = vNode.el.offsetHeight
    instances.splice(idx, 1)

    //调整其他messageBox的高度
    const len = instances.length
    if (len < 1) return
    for (let i = idx; i < len; i++) {
        const pos =
            parseInt(instances[i].vNode.el.style['top'], 10) - removedHeight - 20

        instances[i].vNode.component.props.offset = pos
    }
    vNode.component.proxy.visible = false
}
const $message = (options) => {
    let verticalOffset = options.offset || 20
    instances.forEach(({ vNode }) => {
        verticalOffset += (vNode.el?.offsetHeight || 0) + 20
    })
    verticalOffset += 20
    const id = `message_${seed++}`
    options.delay ? "" : options.delay = 1000;
    const el = document.createElement('div');
    let props = {
        id,
        ...options,
        offset: verticalOffset,
        onClose: () => {
            close(id)
        }
    }
    props.onDestroy = () => {
        console.log("onDestroy");
        //在这里销毁组件
        render(null, el)
    }
    //createVNode 即 h() 将参数渲染成Vnode
    const vNode = createVNode(MessageBox, props);
    //将vnode挂载到el
    render(vNode, el);
    instances.push({ vNode });
    document.body.appendChild(el.firstElementChild);
    // return {
    //     close:()=>((
    //         vNode.component.proxy.visible=false
    //     ))
    // }
}
//拓展方法
['success', 'error', 'info', 'warning'].forEach(type => {
    $message[type] = msg => {
        let options = {

        }
        options.type = type;
        options.message = msg;
        return $message(options)
    }
});
export default $message