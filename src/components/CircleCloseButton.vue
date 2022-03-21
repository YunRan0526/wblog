<template>
    <div class="CircleCloseButton" >
        <div></div>
        <div></div>
    </div>
</template>
<script>import { reactive } from "@vue/reactivity";

export default {
    props: {
        smallSize: {
            type: String,
            default: () => {
                return '75px'
            }
        },
        normalSize: {
            type: String,
            default: () => {
                return '100px'
            }
        }
    },
    setup(props, ctx) {
        let { smallSize, normalSize } = reactive(props)
        return {
            smallSize,
            normalSize
        }
    },
};
</script>
<style lang="scss" scoped>
.CircleCloseButton {
    background-color: #fff;
    transition: all 0.6s ease 0s;
    position: relative;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 5px rgb(0 0 0 / 30%);
    &::after {
        content: "";
        display: block;
        position: absolute;
        top: 5px;
        left: 5px;
        width: calc(100% - 10px);
        height: calc(100% - 10px);
        box-sizing: border-box;
        border: dashed 1px #283c5f;
        border-radius: 50%;
    }
    div {
        position: absolute;
        top: calc(50% - 1px);
        left: 15px;
        width: calc(100% - 30px);
        height: 2px;
        background-color: #283c5f;
        border-radius: 10px;
        &:nth-of-type(1) {
            transform: rotate(45deg);
        }
        &:nth-of-type(2) {
            transform: rotate(-45deg);
        }
    }
}

@media screen and (max-width: 760px) {
    .CircleCloseButton {
        width: v-bind(smallSize);
        height: v-bind(smallSize);
    }
    
}
@media screen and (min-width: 761px) {
    .CircleCloseButton {
        width: v-bind(normalSize);
        height: v-bind(normalSize);
    }
}
</style>