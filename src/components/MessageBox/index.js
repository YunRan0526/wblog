import MessageBox from "/src/components/MessageBox/MessageBox.vue"
import { render, createVNode } from "vue";
let seed = 1;
const instances = [];
const close = (id) => {
    console.log('close', id);
    const idx = instances.findIndex(({ vm }) => id === vm.component.props.id);
    if (idx === -1) return

    const { vm } = instances[idx]
    if (!vm) return

    const removedHeight = vm.el.offsetHeight
    instances.splice(idx, 1)

    //调整其他messageBox的高度
    const len = instances.length
    if (len < 1) return
    for (let i = idx; i < len; i++) {
        const pos =
      parseInt(instances[i].vm.el.style['top'], 10) - removedHeight - 20

    instances[i].vm.component.props.offset = pos
    }
    vm.component.proxy.visible = false
}
const $message = (options) => {
    let verticalOffset = options.offset || 20
    instances.forEach(({ vm }) => {
        verticalOffset += (vm.el?.offsetHeight || 0) + 20
    })
    verticalOffset += 20
    const id = `message_${seed++}`
    options.delay ? "" : options.delay = 1500;
    const wraper = document.createElement('div');
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
        render(null, wraper)
    }
    //createVNode 即 h() 将参数渲染成Vnode
    const vm = createVNode(MessageBox, props);
    //将vnode挂载到wraper
    render(vm, wraper);
    instances.push({ vm });
    document.body.appendChild(wraper.firstElementChild);
    return {
        close:()=>((
            vm.component.proxy.visible=false
        ))
    }
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