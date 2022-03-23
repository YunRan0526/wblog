<template>
    <div class="imgContainer">
        <span class="poster">
            <i class="el-icon-picture-outline"></i>
        </span>
        <img :src="src" @load="imgLoad($event)" />
    </div>
</template>
<script setup>
import {  ref, toRefs,defineProps } from "vue"
const props = defineProps({
    src: {
        type: String,
        default: () => {
            return '/yln2.png'
        }
    }
})

let { src } = toRefs(props);
let show = ref(true);

const imgLoad = (e) => {
    show.value = false;
}
</script>
<style scoped lang="scss">
@keyframes toogle {
    0% {
        transform: rotate(-90deg);
    }
    60%,
    80%,
    100% {
        transform: rotate(0deg);
    }
    70% {
        transform: rotate(-6deg);
    }
    90% {
        transform: rotate(-3deg);
    }
}
.imgContainer {
    position: relative;
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        transform-origin: left bottom;
        transform: rotate(-90deg);
        animation: toogle 0.4s cubic-bezier(0.88, 0, 1, 1.01) 0.1s forwards;
    }
    .poster {
        background-color: #eeeeee;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
    }
}
</style>