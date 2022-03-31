import hasPerm from '/src/utils/hasPerm.js'
export const lazyBox = {
    name: 'lazyBox',
    mounted(el, binding) {
        let cache = false
        const img = el.childNodes[1]
        img.style.display = 'none'
        img.onload = function () {
            if (cache) {
                img.style.display = 'block'
            } else {
                cache = true
            }
        }
        let watcher = new IntersectionObserver(function (e) {
            if (e[0].isIntersecting) {
                if (cache) {
                    img.style.display = 'block'
                } else {
                    cache = true
                }

                watcher.unobserve(el)
                watcher.disconnect()
                watcher = null;
            }
        })
        watcher.observe(el)
    }
}

export const hasPermission = {
    name: 'hasPermission',
    mounted(el, binding) {
        if (hasPerm(binding.value)) {
            console.log(true);
        } else {
            el.style.disabled = true
        }
    }
}

export const refuseChange = {
    name: 'refuseChange',
    mounted(el, binding) {

        // 观察器的配置（需要观察什么变动）
        const config = { attributes: true, childList: true, subtree: true };
        // 当观察到变动时执行的回调函数
        const callback = function (mutationsList, observer) {
            // Use traditional 'for loops' for IE 11
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    console.log('增加或删除子节点');
                }
                else if (mutation.type === 'attributes') {
                    console.log('节点的  ' + mutation.attributeName + '  属性被修改了.');
                }
            }
        };

        // 创建一个观察器实例并传入回调函数
        const observer = new MutationObserver(callback);

        // 以上述配置开始观察目标节点
        observer.observe(el, config);
    }
}