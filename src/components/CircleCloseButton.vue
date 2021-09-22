<template>
    <div class="CircleCloseButton">
        <div></div>
        <div></div>
    </div>
</template>
<script>
export default {
    setup() { },
};
</script>
<style lang="scss" scoped>
.CircleCloseButton {
    width: 100px;
    height: 100px;
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
        left: 25px;
        width: calc(100% - 50px);
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
</style>