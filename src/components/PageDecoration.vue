<template>
    <div class="PageDecoration">
        <div class="decoration"></div>
        <div class="pageBorder"></div>
        <div class="moon_and_star">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <ElScrollbar class="page_content">
            <slot></slot>
        </ElScrollbar>

        <CircleCloseButton class="btn" @click="close" />
    </div>
</template>
<script setup>

import CircleCloseButton from "@/components/CircleCloseButton.vue"
import { ElScrollbar } from "element-plus"
const emit = defineEmits(["close"])
const close = () => {
    emit("close")
}

</script>
<style lang="scss" scoped>
$theme-black: #283c5f;
$theme-white: #faf7d9;
$theme-green: #c3ce5f;
$theme-blue: #4aa9a4;
$theme-red: #c45c66;
@keyframes slide-top {
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0%);
    }
}
@keyframes slide-bottom {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0%);
    }
}
@keyframes page__show-frame {
    from {
        transform: scale(1.1);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes slide-left {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0%);
    }
}
@keyframes star-down {
    0% {
        transform: translateY(-110%);
    }
    20% {
        transform: translateY(0%);
    }
    40% {
        transform: translateY(-3%);
    }
    60% {
        transform: translateY(0);
    }
    80% {
        transform: translateY(-1.5%);
    }
    100% {
        transform: translateY(0);
    }
}
@keyframes star_rotate {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(-360deg);
    }
}
@media screen and (min-width: 761px) {
    .PageDecoration {
        width: 100%;
        height: 100vh;
        contain: paint;
        position: relative;
        overflow: hidden;
        .btn {
            z-index: 999;
            position: absolute;
            right: -18px;
            top: -18px;
            transform: translateX(100%);
            &:hover {
                box-shadow: 0 0 50px rgb(0 0 0 / 50%);
            }
            animation: slide-left 0.6s cubic-bezier(0.06, 0.51, 0.01, 1.03) 1.2s
                forwards;
        }
        .decoration {
            &::before {
                display: block;
                content: "";
                position: absolute;
                top: 0;
                width: 100%;
                height: 60px;
                background-color: $theme-red;
                animation: slide-bottom 0.6s
                    cubic-bezier(0.99, 0.04, 0.01, 0.99) 0s forwards;
                transform: translateY(-100%);
                transition: 0.3s;
                z-index: 20;
            }
            &::after {
                display: block;
                content: "";
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 60px;
                background-color: $theme-green;
                animation: slide-top 0.6s cubic-bezier(0.99, 0.04, 0.01, 0.99)
                    0s forwards;
                transform: translateY(100%);
                transition: 0.3s;
                z-index: 20;
            }
        }
        .pageBorder {
            z-index: 30;
            top: 30px;
            left: 30px;
            width: calc(100% - 60px);
            height: calc(100% - 60px);
            border: dashed 5px #283c5f;
            border-radius: 40px;
            position: absolute;
            box-sizing: border-box;
            opacity: 0;
            animation: page__show-frame 0.8s
                cubic-bezier(0.99, 0.04, 0.01, 0.99) 0.2s forwards;
            transition: 0.3s;
        }
        .moon_and_star {
            div {
                z-index: 10;
                position: absolute;
                top: 0;
                width: 30px;
                transform: translateY(-110%);
                perspective: 1000px;
                transform-style: preserve-3d;
                &::before {
                    content: "";
                    display: block;
                    margin-left: calc(50% - 0.5px);
                    width: 1px;
                    background-color: #283c5f;
                    height: calc(100% - 15px);
                }
                &::after {
                    content: "";
                    display: block;
                    width: 30px;
                    height: 30px;
                    background-image: url("/src/image/page/star.svg");
                    background-position: center top;
                    background-size: contain;
                    background-repeat: no-repeat;
                    animation: star_rotate 6s linear 0s infinite;
                }
                &:nth-of-type(1) {
                    left: 10%;
                    height: 30%;
                    animation: star-down 0.6s ease 0.8s forwards;
                }
                &:nth-of-type(2) {
                    left: 20%;
                    height: 25%;
                    animation: star-down 0.6s ease 1s forwards;
                }
                &:nth-of-type(3) {
                    right: 20%;
                    height: 45%;
                    animation: star-down 0.6s ease 0.9s forwards;
                    &::after {
                        background-image: url("/src/image/page/moon.svg");
                    }
                }
                &:nth-of-type(4) {
                    right: 10%;
                    height: 30%;
                    animation: star-down 0.6s ease 1.1s forwards;
                }
            }
        }
        .page_content {
            position: absolute;
            top: 60px;
            left: 40px;
            width: calc(100% - 80px);
            height: calc(100% - 120px);
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            overflow: scroll;
            z-index: 31;
            overflow-x: hidden;
            &::-webkit-scrollbar {
                width: 0;
                height: 0;
            }
            :deep(.el-scrollbar__wrap) {
                width: 100% !important;
            }
        }
    }
}

@media screen and (max-width: 760px) {
    .PageDecoration {
        width: 100%;
        height: 100vh;
        contain: paint;
        position: relative;

        .btn {
            z-index: 999;
            position: absolute;
            right: -18px;
            top: -18px;
            transform: translateX(100%);
            &:hover {
                box-shadow: 0 0 50px rgb(0 0 0 / 50%);
            }
            animation: slide-left 0.6s cubic-bezier(0.06, 0.51, 0.01, 1.03) 0.6s
                forwards;
        }
        .decoration {
            &::before {
                display: block;
                content: "";
                position: absolute;
                top: 0;
                width: 100%;
                height: 40px;
                background-color: $theme-red;
                animation: slide-bottom 0.6s
                    cubic-bezier(0.99, 0.04, 0.01, 0.99) 0s forwards;
                transform: translateY(-100%);
                transition: 0.3s;
            }
            &::after {
                display: block;
                content: "";
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 40px;
                background-color: $theme-green;
                animation: slide-top 0.6s cubic-bezier(0.99, 0.04, 0.01, 0.99)
                    0s forwards;
                transform: translateY(100%);
                transition: 0.3s;
            }
        }
        .pageBorder {
            top: 10px;
            left: 10px;
            width: calc(100% - 20px);
            height: calc(100% - 20px);
            border: dashed 2.5px #283c5f;
            border-radius: 30px;
            position: absolute;
            box-sizing: border-box;
            opacity: 0;
            animation: page__show-frame 0.8s
                cubic-bezier(0.99, 0.04, 0.01, 0.99) 0.2s forwards;
            transition: 0.3s;
        }
        .moon_and_star {
            div {
                position: absolute;
                top: 0;
                width: 15px;
                transform: translateY(-110%);
                perspective: 1000px;
                transform-style: preserve-3d;
                &::before {
                    content: "";
                    display: block;
                    margin-left: calc(50% - 0.5px);
                    width: 1px;
                    background-color: #283c5f;
                    height: calc(100% - 15px);
                }
                &::after {
                    content: "";
                    display: block;
                    width: 15px;
                    height: 15px;
                    background-image: url("/src/image/page/star.svg");
                    background-position: center top;
                    background-size: contain;
                    background-repeat: no-repeat;
                    animation: star_rotate 6s linear 0s infinite;
                }
                &:nth-of-type(1) {
                    left: 6%;
                    height: 20%;
                    animation: star-down 0.6s ease 0.8s forwards;
                }
                &:nth-of-type(2) {
                    left: 12%;
                    height: 12%;
                    animation: star-down 0.6s ease 1s forwards;
                }
                &:nth-of-type(3) {
                    right: 12%;
                    height: 30%;
                    animation: star-down 0.6s ease 0.9s forwards;
                    &::after {
                        background-image: url("/src/image/page/moon.svg");
                    }
                }
                &:nth-of-type(4) {
                    right: 6%;
                    height: 20%;
                    animation: star-down 0.6s ease 1.1s forwards;
                }
            }
        }
        .page_content {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            top: 40px;
            left: 20px;
            width: calc(100% - 40px);
            height: calc(100% - 80px);
            :deep(.el-scrollbar__wrap) {
                width: 100% !important;
            }
        }
    }
}
</style>