<template>
    <div class="menuPage">
        <!-- 斑点背景 -->
        <div class="plotBackground">
            <div class="downItem"></div>
            <div class="downItem"></div>
            <div class="downItem"></div>
            <div class="downItem"></div>
            <MoveStar v-if="currentSize >= 760" />
        </div>

        <!-- 菜单 -->
        <div class="menu">
            <CircleCloseButton class="btn" @click="closeMenu" />
            <Menu />
        </div>
    </div>
</template>


<script>
import CircleCloseButton from "@/components/CircleCloseButton.vue"
import Menu from "@/components/Menu.vue"
import MoveStar from "@/components/MoveStar.vue"
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue"
export default defineComponent({
    name: "menuPage",
    components: {
        CircleCloseButton,
        Menu,
        MoveStar
    },
    emits: ["closeMenu"],
    setup(_props, { emit: emits }) {
        const closeMenu = () => {
            emits("closeMenu")
        }
        let bgc = ref('#faf7d9');
        const currentSize = ref(window.innerWidth);
        const resizeHandler = () => {
            currentSize.value = window.innerWidth;
        }
        onMounted(() => {
            window.addEventListener('resize', resizeHandler);
        });
        onBeforeUnmount(() => {
        
            window.removeEventListener('resize', resizeHandler);
        })
        return {
            CircleCloseButton,
            emits,
            closeMenu,
            bgc,
            currentSize,
            resizeHandler
        };
    },
});
</script>
<style lang="scss" scoped>
$theme-black: #283c5f;
$theme-white: #faf7d9;
$theme-green: #c3ce5f;
$theme-blue: #4aa9a4;
$theme-red: #c45c66;
.menuPage {
    display: flex;
    contain: paint;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 10;
}
@media screen and (min-width: 761px) {
    @keyframes menuItem_Down {
        0% {
            transform: translateY(-100%);
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
    @keyframes menu_moveIn {
        0% {
            transform: translateX(100%);
        }
        20% {
            transform: translateX(0%);
        }
        40% {
            transform: translateX(3%);
        }
        60% {
            transform: translateX(0);
        }
        80% {
            transform: translateX(1.5%);
        }
        100% {
            transform: translateX(0);
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
    @keyframes slide-left {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0%);
        }
    }

    @keyframes canvas-slide-left {
        0% {
            transform: translateX(100%);
        }
        40% {
            transform: translateX(0%);
        }
        55% {
            transform: translateX(3%);
        }
        70% {
            transform: translateX(0);
        }
        85% {
            transform: translateX(1.5%);
        }
        100% {
            transform: translateX(0);
        }
    }
    .menuPage {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        contain: paint;
        .plotBackground {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            contain: paint;
            .downItem {
                background-color: v-bind(bgc);
                width: 100%;
                height: 100%;
                transition: 0.8s;
                transform: translateY(-100%);
                &:nth-of-type(1) {
                    animation: menuItem_Down 0.6s ease 0.1s forwards;
                }
                &:nth-of-type(2) {
                    animation: menuItem_Down 0.6s ease 0.2s forwards;
                }
                &:nth-of-type(3) {
                    animation: menuItem_Down 0.6s ease 0.3s forwards;
                }
                &:nth-of-type(4) {
                    animation: menuItem_Down 0.6s ease 0.4s forwards;
                }
            }
            #moveStar {
                width: 100%;
                height: 100%;
                display: block;
                position: absolute;
                left: 0;
                top: 0;
                background: #364253;
                transform: translateX(100%);
                z-index: 12;
                animation: canvas-slide-left 0.8s
                    cubic-bezier(0.17, 0.67, 0.47, 1) 2s forwards;
            }
            &::before {
                content: "";
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-position: center;
                background-image: url("@/image/menu/bg.svg");
                // background-color: $theme-white;
                background-size: 90px;
                opacity: 0;
                z-index: 11;
                animation: fadein 1s ease 1s forwards;
            }
        }

        .menu {
            width: 450px;
            height: 100%;
            transform: translateX(100%);
            animation: menu_moveIn 0.6s ease 0s forwards;
            position: relative;
            display: flex;
            contain: paint;
            .btn {
                z-index: 999;
                position: absolute;
                right: -18px;
                top: -18px;
                transform: translateX(100%);
                &:hover {
                    box-shadow: 0 0 50px rgb(0 0 0 / 50%);
                }
                animation: slide-left 0.6s cubic-bezier(0.06, 0.51, 0.01, 1.03)
                    1.2s forwards;
            }
        }
    }
}
@media screen and (max-width: 760px) {
    @keyframes slide-left {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0%);
        }
    }
    @keyframes menu_moveIn {
        0% {
            transform: translateX(100%);
        }
        20% {
            transform: translateX(0%);
        }
        40% {
            transform: translateX(3%);
        }
        60% {
            transform: translateX(0);
        }
        80% {
            transform: translateX(1.5%);
        }
        100% {
            transform: translateX(0);
        }
    }
    .menuPage {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        contain: paint;
        .plotBackground {
            display: none;
            contain: paint;
        }
        .menu {
            width: 100%;
            height: 100%;
            flex: 1;
            transform: translateX(100%);
            animation: menu_moveIn 0.6s ease 0s forwards;
            position: relative;
            display: flex;
            .btn {
                z-index: 999;
                position: absolute;
                right: -18px;
                top: -18px;
                transform: translateX(100%);
                &:hover {
                    box-shadow: 0 0 50px rgb(0 0 0 / 50%);
                }
                animation: slide-left 0.6s cubic-bezier(0.06, 0.51, 0.01, 1.03)
                    0.6s forwards;
            }
        }
    }
}
</style>