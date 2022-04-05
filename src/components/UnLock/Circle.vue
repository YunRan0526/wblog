<template>
  <div
    :class="{
      circle: true,
      isError: mode == 'isError',
      isSuccess: mode == 'isSuccess',
      isActive: mode == 'isActive',
    }"
    @mouseenter="enter"
    @mouseleave="leave"
    @mousedown="down"
    ref="CIRCLE"
  >
    <div
      :class="{
        inner: true,
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  id: {
    type: Number,
  },
  isDraw: {
    type: Boolean,
  },
  canEdit: {
    type: Boolean,
  },
  Error: {
    type: Boolean,
  },
});
const emit = defineEmits(["checkCircle", "ent"]);
const CIRCLE = ref(null);
const mode = ref("info");

const enter = (e) => {
  if (!props.canEdit) return;
  if (props.isDraw) {
    if (mode.value == "isSuccess") return;
    mode.value = "isSuccess";
    emit("checkCircle", getCenter());
  } else {
    mode.value = "isActive";
  }
};
const down = (e) => {
  enter();
};
const leave = (e) => {
  if (!props.canEdit) return;
  if (!props.isDraw) {
    mode.value = "info";
  }
};
const getCenter = () => {
  const x = CIRCLE.value.offsetLeft + CIRCLE.value.offsetWidth / 2;
  const y = CIRCLE.value.offsetTop + CIRCLE.value.offsetHeight / 2;
  return { id: props.id, x, y };
};
//绘制结束后初始化
watch(
  () => props.canEdit,
  (v) => {
    if (v) mode.value = "info";
  }
);
//验证失败
watch(
  () => props.Error,
  (v) => {
    if (v) {
      mode.value = "isError";
    }
  }
);
</script>

<style lang="scss">
.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  aspect-ratio: 1/ 1;
  width: 20%;
  height: atuo;
  border-radius: 50%;
  border: solid 4px rgba(255, 255, 255, 0.6);
  transition: border-color 0.2s;
  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    aspect-ratio: 1/ 1;
    width: 18%;
    height: atuo;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    transition: background-color 0.3s;
    filter: contrast();
  }
}
.isActive {
  border-color: rgba(255, 255, 255, 0.9);
  .inner {
    background-color: rgba(255, 255, 255, 0.9);
  }
}
.isSuccess {
  border-color: rgba(85, 233, 188, 1);
  .inner {
    background-color: rgba(85, 233, 188, 1);
  }
}
.isError {
  border-color: rgba(249, 89, 89, 1);
  .inner {
    background-color: rgba(249, 89, 89, 1);
  }
}
</style>
