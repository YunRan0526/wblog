<template>
  <div class="layer" :data-state="state">
    <div class="card"></div>
    <div class="card"></div>
    <div class="card"></div>
    <div class="card" ref="contentCard">
      <slot> </slot>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
const contentCard = ref(null);
const state = ref("");
const timer = ref(null);
const emits = defineEmits(["animationEnd"]);
const show = () => {
  state.value = true;
};
const close = () => {
  state.value = true;
};
const toggle = () => {
  state.value = !state.value;
};
const cradHanlder = () => {
  if (!state.value) {
    if (timer.value) clearTimeout(timer.value);
    timer.value = setTimeout(() => {
      emits("animationEnd");
      clearTimeout(timer.value);
    }, 100);
  }
};
defineExpose({
  show,
  close,
  toggle,
});
onMounted(() => {
  contentCard.value.addEventListener("transitionend", cradHanlder);
  show();
});
onBeforeUnmount(() => {
  contentCard.value.removeEventListener("transitionend", cradHanlder);
});
</script>
<style scoped lang="scss">
$bg1: #c2617e;
$bg3: #c3ce5f;
$bg2: #fcfcf3;
@keyframes page-box__show {
  0% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes page-box__hidden {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-90deg);
  }
}
@keyframes fadeout {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
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

.layer {
  position: relative;
  width: 100%;
  height: 100vh;
  contain: paint;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: right top;
  }
}
.layer[data-state="true"] {
  .card {
    transform: rotate(90deg);
    &:nth-child(1) {
      background-color: $bg1;
      animation: page-box__show 0.35s ease 0.1s forwards;
    }
    &:nth-child(2) {
      background-color: $bg2;
      animation: page-box__show 0.35s ease 0.2s forwards;
    }
    &:nth-child(3) {
      background-color: $bg1;
      animation: page-box__show 0.35s ease 0.3s forwards;
    }
    &:nth-child(4) {
      background-color: $bg2;
      animation: page-box__show 0.35s ease 0.4s forwards;
    }
  }
}
.layer[data-state="false"] {
  .card {
    transform: rotate(0deg);
    &:nth-child(1) {
      background-color: $bg1;
      animation: page-box__hidden 0.35s ease 0.3s forwards;
    }
    &:nth-child(2) {
      background-color: $bg2;
      animation: page-box__hidden 0.35s ease 0.2s forwards;
    }
    &:nth-child(3) {
      background-color: $bg1;
      animation: page-box__hidden 0.35s ease 0.1s forwards;
    }
    &:nth-child(4) {
      background-color: $bg2;
      animation: page-box__hidden 0.35s ease 0s forwards;
    }
  }
}
</style>
