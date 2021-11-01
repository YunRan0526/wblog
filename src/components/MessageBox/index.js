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
            parseInt(instances[i].vm.el.style['top'], 10) - removedHeight
        instances[i].vm.component.props.offset = pos
        instances[i].vm.component.props.offset -= 1;
    }
    return {

        close: () =>
            ((vm.component.proxy).visible = false),
    }
}
const $message = (options) => {
    let verticalOffset = options.offset || 20
    instances.forEach(({ vm }) => {
        verticalOffset += (vm.el?.offsetHeight || 0) + 16
    })
    verticalOffset += 16
    const id = `message_${seed++}`
    options.delay ? "" : options.delay = 1500;
    const wraper = document.createElement('div');
    wraper.classList.add('yb-message-wraper');
    let props = {
        id,
        ...options,
        offset: verticalOffset,
        onClose: () => {
            close(id)
        }
    }
    props.onDestroy = () => {
        render(null, wraper)
    }
    const vm = createVNode(MessageBox, props);
    render(vm, wraper);
    instances.push({ vm });
    document.body.appendChild(wraper.firstElementChild);
    return
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