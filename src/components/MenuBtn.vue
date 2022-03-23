<template>
    <div class="MenuBtn">
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
$theme-black: #283c5f;
$theme-white: #faf7d9;
$theme-green: #c3ce5f;
$theme-blue: #4aa9a4;
$theme-red: #c45c66;
@keyframes showMenuBtn {
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
.MenuBtn {
    position: relative;
    z-index: 8;
    background-color: $theme-white;
    border-radius: 5px;
    cursor: pointer;
    overflow: hidden;
    transform: scale(0);
    animation: showMenuBtn 0.6s ease 1.5s forwards;
    transition: 0.1s;
    &:hover::before {
        transform: scale(1);
    }
    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #4aa9a4;
        transform: scale(0);
        transition: all 0.35s cubic-bezier(0.77, 0, 0.17, 1.02) 0s;
    }
    &::after {
        content: "";
        display: block;
        position: absolute;
        box-sizing: border-box;
        border-radius: 5px;
    }
}
@media screen and (min-width: 761px) {
    .MenuBtn {
        width: 120px;
        height: 120px;
        &::after {
            top: 5px;
            left: 5px;
            width: calc(100% - 10px);
            height: calc(100% - 10px);
            border: dashed 2px #283c5f;
        }

        div {
            position: absolute;
            background-color: #283c5f;
            border-radius: 15px;
            top: calc(50% - 2.5px);
            left: 30px;
            width: calc(100% - 60px);
            height: 5px;
            &:nth-of-type(1) {
                transform: translateY(-20px);
            }
            &:nth-of-type(3) {
                transform: translateY(20px);
            }
        }
    }
}
@media screen and (max-width: 760px) {
    .MenuBtn {
        width: 60px;
        height: 60px;
        div {
            position: absolute;
            background-color: #283c5f;
            border-radius: 15px;
            top: calc(50% - 1.5px);
            left: 17.5px;
            width: calc(100% - 35px);
            height: 3px;
            &:nth-of-type(1) {
                transform: translateY(-10px);
            }
            &:nth-of-type(3) {
                transform: translateY(10px);
            }
        }
        &::after {
            top: 2.5px;
            left: 2.5px;
            width: calc(100% - 5px);
            height: calc(100% - 5px);
            border: dashed 1px #283c5f;
        }
    }
}
</style>