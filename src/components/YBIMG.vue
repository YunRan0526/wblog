<template>
    <div class="imgContainer">
        <span class="poster" v-if="show">
            <i class="el-icon-picture-outline"></i>
        </span>
        <img :src="src" @load="imgLoad($event)" v-show="!show" />
    </div>
</template>
<script>
import { defineComponent, ref, toRefs } from "vue"


export default defineComponent({
    props: {
        src: {
            type: String,
            default: () => {
                return '/yln2.png'
            }
        }
    },
    name: "yb-img",
    setup(props, context) {
        let { src } = toRefs(props);
        let show = ref(true);

        const imgLoad = (e) => {
            show.value = false;
        }
        return {
            src, show, imgLoad
        }
    },
})
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
        animation: toogle 0.4s cubic-bezier(0.88, 0, 1, 1.01) 0s forwards;
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