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
    name: "yb-button",
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
<style lang="scss" scoped>
$theme-black: #283c5f;
$theme-white: #faf7d9;
$theme-green: #c3ce5f;
$theme-blue: #4aa9a4;
$theme-red: #c45c66;

.yb-button {
    display: inline-block;
    border-radius: 2px;
    color: #fff;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    -webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    cursor: pointer;

    .text {
        display: inline-block;
        min-width: 40px;
        text-align: justify;
        text-align-last: justify;
    }
}

.primary-button {
    background-color: $theme-blue;
    border-color: $theme-blue;
}

.success-button {
    background-color: $theme-green;
    border-color: $theme-green;
}

.danger-button {
    background-color: $theme-red;
    border-color: $theme-red;
}

.small-button {
    padding: 0 3px;
    line-height: 200%;
    letter-spacing: 1px;
}

.normal-button {
    padding: 0px 15px;
    line-height: 200%;
    letter-spacing: 1px;
}

.big-button {
    padding: 0px 25px;
    line-height: 200%;
    letter-spacing: 1px;
}
</style>