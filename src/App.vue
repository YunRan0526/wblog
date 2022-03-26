<template >
  <router-view @click="clickToEffects" />
  <ClickEffects
    v-for="item in effectsArr "
    :key="item.id"
    :style="{ position: 'absolute', left: item.left, top: item.top }"
    class="ClickEffects"
  />
</template>

<script>

import { onMounted, reactive, inject } from "@vue/runtime-core";
import ClickEffects from "./components/ClickEffects.vue";
import YbButton from "/src/components/Button/Button.vue"
export default {
  name: "App",
  components: {
    ClickEffects, YbButton
  },
  setup() {
    const effectsArr = reactive([]);
    let clearTimer = reactive({});
    const clickToEffects = (e) => {
      let left = `${e.pageX - 50}px`;
      let top = `${e.pageY - 50}px`;
      let obj = {
        id: Math.random().toString(16).slice(2),
        left, top,
        show: true
      }
      effectsArr.push(obj);
      if (clearTimer) {
        clearTimeout(clearTimer);
        clearTimer = null;
      }
      clearTimer = setTimeout(() => {
        effectsArr.length = 0;
        clearTimeout(clearTimer);
        clearTimer = null;

      }, 1000)
    }


    return {
      clickToEffects,
      effectsArr,
      clearTimer
    }
  },
  methods: {

  }
};
</script>
<style lang="scss">
$theme-black: #283c5f;
$theme-white: #faf7d9;
$theme-green: #c3ce5f;
$theme-blue: #4aa9a4;
$theme-red: #c45c66;
* {
  margin: 0;
  padding: 0;
}
//markdown样式
.markdown-body {
  box-sizing: border-box;
  height: 100vh;
  text-align: left;
  .md2vue-wrapper {
    padding: 0 50px;
  }
}
//markdown样式
.left_top_flower {
  &::after {
    content: "";
    display: block;
    width: 35px;
    height: 35px;
    position: absolute;
    left: 0;
    top: 0;
    animation: flowerRoatel 4s linear 0s infinite;
    z-index: 999;
    background-image: url("@/image/Flower.svg");
    background-size: 100% auto;
    background-position: center top;
    background-repeat: no-repeat;
  }
}

@media screen and (max-width: 760px) {
  .flower_border_bottom {
    border-bottom: dashed 1px #283c5f;
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: -10px;
      bottom: -10px;
      width: 20px;
      height: 20px;
      animation: flowerRoater 4s linear 0s infinite;
      background-image: url("@/image/page/flower.svg");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: -10px;
      bottom: -10px;
      width: 20px;
      height: 20px;
      animation: flowerRoatel 4s linear 0s infinite;
      background-image: url("@/image/page/flower.svg");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}
@media screen and (min-width: 761px) {
  .flower_border_bottom {
    border-bottom: dashed 1px #283c5f;
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      right: -15px;
      bottom: -15px;
      width: 30px;
      height: 30px;
      animation: flowerRoater 4s linear 0s infinite;
      background-image: url("@/image/page/flower.svg");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    &::before {
      content: "";
      display: block;
      position: absolute;
      left: -15px;
      bottom: -15px;
      width: 30px;
      height: 30px;
      animation: flowerRoatel 4s linear 0s infinite;
      background-image: url("@/image/page/flower.svg");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}
@keyframes show-type {
  from {
    transform: translateY(30px);
  }
  to {
    transform: translateY(-18px);
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

#app {
  contain: paint;
}
.ClickEffects {
  pointer-events: none;
  section {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    z-index: 999;
    position: relative;
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      &:nth-child(1) {
        transform: rotate(0deg);
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(90deg);
      }
      &:nth-child(4) {
        transform: rotate(135deg);
      }
      &:nth-child(5) {
        transform: rotate(180deg);
      }
      &:nth-child(6) {
        transform: rotate(225deg);
      }
      &:nth-child(7) {
        transform: rotate(270deg);
      }
      &:nth-child(8) {
        transform: rotate(315deg);
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 1.25px;
        left: calc(50% - 5px);
        border-left: solid 5px transparent;
        border-right: solid 5px transparent;
        transform: translateY(130px);
        opacity: 0;
        animation: fadein 0.3s ease 0s forwards, show-type 0.6s ease 0s forwards;
      }
    }
  }
}
</style>
