<template>
    <div class="myMenu">
        <div class="content"></div>
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
        border-radius:20px;
        z-index: 16;
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