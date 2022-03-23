<template>
    <div class="myMenu">
        <div class="content">
            <span class="avatar_container">
                <img src="../image/avatar.jpg" class="avatar" @dblclick="login" />
            </span>

            <div class="cen">
                <div
                    class="item"
                    @click="router.push({ path: item.path })"
                    v-for="item in props.menu"
                    :key="item.path"
                >
                    <img :src="getSrc(item.src)" class="icon" />
                    {{ item.name }}
                </div>
            </div>

            <div class="footer">
                <div class="colorList">
                    <span
                        style="background-color:#c45c66"
                        class="color"
                        @mouseenter="changeMenuColor('#c45c66')"
                    ></span>
                    <span
                        style="background-color:#c3ce5f"
                        class="color"
                        @mouseenter="changeMenuColor('#c3ce5f')"
                    ></span>
                    <span
                        style="background-color:#283c5f"
                        class="color"
                        @mouseenter="changeMenuColor('#283c5f')"
                    ></span>
                    <span
                        style="background-color:#4aa9a4"
                        class="color"
                        @mouseenter="changeMenuColor('#4aa9a4')"
                    ></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref,defineProps } from "vue"
import { useRouter } from 'vue-router'
const router = useRouter();
let menuColor = ref('#4aa9a4');
const props = defineProps({
    menu: {
        type: Array,
        default: () => {
            return [
                {
                    name: '工作台',
                    path: '/WorkSpace',
                    src: '/src/image/page/star.svg'
                },
                {
                    name: '我的文章',
                    path: '/Articles',
                    src: '/src/image/page/moon.svg'
                },
                {
                    name: '我的作品',
                    path: '/Memories',
                    src: '/src/image/page/mountain.svg'
                },
                {
                    name: '关于我',
                    path: '/AboutMe',
                    src: '/src/image/page/dog.svg'
                }
            ]
        }
    }
})
const getSrc = (path) => {
    if (process.env.NODE_ENV === 'development') {
        return path
    }
    const modules = import.meta.globEager("/src/image/page/*.*");
    return modules[path].default;
}
const changeMenuColor = (color) => {
    menuColor.value = color;
}
const login = () => {
    console.log("login");
    switch (menuColor.value) {
        case "#c45c66":
            changeMenuColor("#c3ce5f")
            break;
        case "#c3ce5f":
            changeMenuColor("#283c5f")
            break;
        case "#283c5f":
            changeMenuColor("#4aa9a4")
            break;
        case "#4aa9a4":
            changeMenuColor("#c45c66")
            break;
    }
}
</script>
<style lang="scss" scoped>
$theme-black: #283c5f;
$theme-white: #faf7d9;
$theme-green: #c3ce5f;
$theme-blue: #4aa9a4;
$theme-red: #c45c66;
@keyframes showAvatar {
    0% {
        transform: scale(0);
    }
    40% {
        transform: scale(1.1);
    }
    60% {
        transform: scale(1);
    }
    80% {
        transform: scale(1.03);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes menu__rotate-icon {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(-360deg);
    }
}
@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@keyframes scale0-1 {
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
}

.myMenu {
    flex: 1;
    z-index: 15;
    background-color: #ffffff;
    display: flex;
    position: relative;
    &::before {
        background-color: v-bind(menuColor);
        transition: 0.3s;
    }
    &::after {
        background-color: v-bind(menuColor);
        transition: 0.3s;
    }
    .content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: dashed 2px #283c5f;
        border-radius: 20px;
        z-index: 16;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .avatar_container {
            cursor: pointer;
            transition: all 0.4s ease;
            &:hover {
                transform: scale(1.3);
            }
            .avatar {
                display: block;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                margin-top: 7px;
                transform: scale(0);
                animation: showAvatar 0.6s ease 0.6s forwards;
            }
        }

        .cen {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 80%;
            .item {
                transition: all 0.6s ease 0s;
                width: 100%;
                border-radius: 25px;
                padding: 10px 0 10px 15px;
                margin: 15px 0;
                background-color: $theme-white;
                text-align: start;
                font-weight: 900;
                display: flex;
                align-items: center;
                opacity: 0;
                cursor: pointer;
                &:hover {
                    background-color: v-bind(menuColor);
                }
                .icon {
                    width: 20px;
                    height: 20px;
                    margin-right: 15px;
                    transform-style: preserve-3d;
                    animation: menu__rotate-icon 3s linear 0s infinite;
                }
                .icon2 {
                    width: 28px;
                    height: 20px;
                    margin-right: 7px;
                    transform-style: preserve-3d;

                    animation: menu__rotate-icon 3s linear 0s infinite;
                }
                &:nth-of-type(1) {
                    animation: fadein 0.7s ease 0.7s forwards;
                }
                &:nth-of-type(2) {
                    animation: fadein 0.7s ease 0.8s forwards;
                }
                &:nth-of-type(3) {
                    animation: fadein 0.7s ease 0.9s forwards;
                }
                &:nth-of-type(4) {
                    animation: fadein 0.7s ease 1s forwards;
                }
            }
        }

        .footer {
            width: 100%;
            height: 80px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .colorList {
                width: 350px;
                height: 50px;
                margin-top: -20px;
                display: flex;
                justify-content: center;
                align-items: center;
                .color {
                    display: block;
                    width: 21px;
                    height: 21px;
                    margin: 0 10px;
                    transform: scale(0);
                    border: solid 2px rgba(255, 255, 255, 0.4);
                    border-radius: 50%;
                    transition: 0.3s;
                    cursor: pointer;
                    &:hover {
                        width: 40px;
                        height: 40px;
                    }
                    &:nth-of-type(1) {
                        animation: scale0-1 0.6s ease 0.7s forwards;
                    }
                    &:nth-of-type(2) {
                        animation: scale0-1 0.6s ease 0.8s forwards;
                    }
                    &:nth-of-type(3) {
                        animation: scale0-1 0.6s ease 0.9s forwards;
                    }
                    &:nth-of-type(4) {
                        animation: scale0-1 0.6s ease 1s forwards;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 760px) {
    .myMenu {
        .content {
            width: calc(100% - 30px);
            height: calc(100% - 30px);
        }
        &::before {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 80px;
            left: 0;
            top: 0;
        }
        &::after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 20px;
            left: 0;
            bottom: 0;
        }
    }
}
@media screen and (min-width: 761px) {
    .myMenu {
        .content {
            width: calc(100% - 50px);
            height: calc(100% - 50px);
        }
        &::before {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 120px;
            left: 0;
            top: 0;
        }
        &::after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 40px;
            left: 0;
            bottom: 0;
        }
    }
}
</style>