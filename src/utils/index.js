export function debounce(fn, duration) {
    let timer
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.call(this, ...args)
        }, duration)
    }

}

export function throttle(fn, duration) {
    let now = 0
    return function (...args) {
        if ((new Date() - now) < duration) return
        fn.call(this, ...args)
        now = new Date()
    }
}
