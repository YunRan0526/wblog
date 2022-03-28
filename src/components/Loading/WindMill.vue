<template>
  <div class="setPosition" ref="el">
    <div
      class="windmill-container"
      :style="{ transform: `scale(${props.scale})` }"
    >
      <div
        class="linear"
        :style="{
          'z-index': yb.nextIndex(),
          height: `${lineHeight / props.scale}px`,
          width: `${12 * props.scale}px`,
        }"
        v-if="props.showLine"
      ></div>
      <div
        class="windmill"
        :style="{
          width: `${430}px`,
          height: `${430}px`,
          animation: `rotate ${3 / props.speed}s infinite linear`,
          'z-index': yb.nextIndex(),
        }"
      >
        <div class="leave" :style="leaveStyle"></div>
        <div class="leave" :style="leaveStyle"></div>
        <div class="leave" :style="leaveStyle"></div>
        <div class="leave" :style="leaveStyle"></div>
      </div>
      <div
        class="center"
        :style="{ 'z-index': yb.nextIndex() }"
        ref="center"
        v-if="props.showCenter"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref, onMounted, toRefs } from "vue";
import yb from "/src/utils/YbManager.js";
const props = defineProps({
  x: {
    type: Number,
    default: () => {
      return 215;
    },
  },
  y: {
    type: Number,
    default: () => {
      return 215;
    },
  },
  scale: {
    type: Number,
    default: () => {
      return 1;
    },
  },
  speed: {
    type: Number,
    default: () => {
      return 1;
    },
  },
  color: {
    type: String,
    default: () => {
      return "#9d49a7";
    },
  },
  showLine: {
    type: Boolean,
    default: () => {
      return true;
    },
  },
  showCenter: {
    type: Boolean,
    default: () => {
      return true;
    },
  },
});
let center = ref(null);
let el = ref(null);
let lineHeight = ref(0);
const leaveStyle = computed(() => {
  return {
    "border-top": `${30}px solid transparent`,
    "border-left": `${75}px solid ${props.color}`,
    "border-bottom": `${185}px solid transparent`,
  };
});
onMounted(() => {
  let { top } = center.value.getBoundingClientRect();
  //风车线的高度
  lineHeight.value = innerHeight - top;
  //风车定位
  el.value.style.left = `${props.x}px`;
  el.value.style.top = `${props.y}px`;
});
</script>

<style lang="scss">
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.setPosition {
  position: absolute;
  transform: translate(-50%, -50%);
}
.windmill-container {
  display: inline-block;
  position: relative;
  .windmill {
    position: relative;
    transform-origin: center;
    .leave {
      position: absolute;
      width: 0px;
      height: 0px;
      box-sizing: border-box;
      transform-origin: top left;
      &:nth-of-type(1) {
        transform: rotate(0deg) translate(215px, 215px);
      }
      &:nth-of-type(2) {
        transform: rotate(90deg) translate(215px, -215px);
      }
      &:nth-of-type(3) {
        transform: rotate(180deg) translate(-215px, -215px);
      }
      &:nth-of-type(4) {
        transform: rotate(270deg) translate(-215px, 215px);
      }
    }
  }
  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: v-bind("props.color");
  }
  .linear {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 0);
    height: 300px;
    background: v-bind("props.color");
  }
}
</style>
