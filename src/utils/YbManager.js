class YbManager {
    constructor() {
        this.zIndex = 3000
    }

    nextIndex() {
        this.zIndex += 1;
        return this.zIndex
    }
}
const yb = new YbManager()

export default yb