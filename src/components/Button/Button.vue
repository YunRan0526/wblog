<template>
    <div :class="btnClass">
        <span class="text">
            <slot></slot>
        </span>
    </div>
</template>
<script setup>
import { onMounted, useAttrs, ref } from 'vue';
const btnClass = ref('')
const attrs = useAttrs()
onMounted(() => {
    let type, size
    attrs?.type ? type = attrs.type : type = "primary"
    attrs?.size ? type = attrs.size : size = "normal"
    btnClass.value = `yb-button ${type}-button ${size}-button`
})


</script>
<style lang="scss" scoped>
$theme-black: #283c5f;
$theme-white: #faf7d9;
$theme-green: #c3ce5f;
$theme-blue: #4aa9a4;
$theme-red: #c45c66;

.yb-button {
    box-sizing: border-box;
    display: inline-block;
    border-radius: 5px;
    color: #fff;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    -webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    cursor: pointer;
    transition: filter .1s;
    user-select: none;

    .text {
        display: inline-block;
        min-width: 40px;
        text-align: justify;
        text-align-last: justify;
    }
    &:hover {
        filter: contrast(120%);
    }
    &:active {
        filter: saturate(80%);
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
    padding: 3px 15px;
    line-height: 200%;
    letter-spacing: 1px;
}

.big-button {
    padding: 5px 25px;
    line-height: 200%;
    letter-spacing: 1px;
}
</style>