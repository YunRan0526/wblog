<template>
    <div class="myMenu">
        <div class="content">
            <img src="../image/avatar.jpg" class="avatar" />

            <div class="cen">
                <div class="item">
                    <img src="../image/page/star.svg" class="icon" />吔包
                </div>
                <div class="item">
                    <img src="../image/page/moon.svg" class="icon" />吔包
                </div>
                <div class="item" >
                    <img src="../image/page/dog.svg" class="icon2"/>吔包
                </div>
                <div class="item">
                    <img  src="../image/page/mountain.svg" class="icon2"/>吔包
                </div>
            </div>
            <div class="footer">
                <div class="colorList">
                    <span style="background-color"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
    name: "menu",
    setup() {

        return {

        }
    }
})
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
.myMenu {
    flex: 1;
    z-index: 15;
    background-color: #ffffff;
    display: flex;
    position: relative;
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
        .avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-top: 7px;
            transform: scale(0);
            animation: showAvatar 0.6s ease 1.5s forwards;
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
                &:hover {
                    background-color: $theme-blue;
                }
                .icon {
                    width: 20px;
                    height: 20px;
                    margin-right: 15px;
                    transform-style: preserve-3d;
                    animation: menu__rotate-icon 3s linear 0s infinite;
                }
                .icon2{
                    width: 28px;
                    height: 20px;
                    margin-right: 7px;
                    transform-style: preserve-3d;
                    animation: menu__rotate-icon 3s linear 0s infinite;
                }
            }
        }

        .footer {
            width: 100%;
            height: 80px;
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
            background-color: $theme-blue;
        }
        &::after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 20px;
            left: 0;
            bottom: 0;
            background-color: $theme-blue;
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
            background-color: $theme-blue;
        }
        &::after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 40px;
            left: 0;
            bottom: 0;
            background-color: $theme-blue;
        }
    }
}
</style>