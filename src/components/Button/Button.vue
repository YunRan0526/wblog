<template>
    <div :class="btnClass">
        <span class="text">
            <slot></slot>
        </span>
    </div>
</template>
<script>

import { defineComponent, } from 'vue'

export default defineComponent({
    name:"yb-button",
    data() {
        return {
            btnClass: ''
        }
    },
    render() {

    },
    created() {
        let type, size
        this.$attrs?.type ? type = this.$attrs.type : type = "primary"
        this.$attrs?.size ? type = this.$attrs.size : size = "normal"
        this.btnClass = `yb-button ${type}-button ${size}-button`
    }
})

</script>