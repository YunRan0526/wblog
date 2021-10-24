<template>
    <div class="imgContainer">
        
        <span class="poster" v-if="show">
            <i class="el-icon-picture-outline"></i>
        </span>
        <img :src="src" @load="imgLoad($event)" v-show="!show"/>
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
        transform: rotateX(180deg);
    }
    100% {
        transform: rotateX(0);
    }
}
.imgContainer {
    position: relative;
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        transform-origin: center bottom;
        transform: rotateX(90deg);
        animation: toogle 1.1s cubic-bezier(0.79, 0.01, 0.27, 0.99) 0s forwards;
    }
    .poster {
        background-color: #EEEEEE;
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