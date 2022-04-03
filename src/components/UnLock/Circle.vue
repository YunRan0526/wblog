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
  >
    <div
      :class="{
        inner: true,
      }"
    ></div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
const props = defineProps({
  id: {
    type: Number,
  },
  isDraw: {
    type: Boolean,
  },
  caEdit: {
    type: Boolean,
  },
});
const emit = defineEmits(["checkCircle"]);
const mode = ref("info");

const enter = (e) => {
  if (!props.caEdit) return;
  if (props.isDraw) {
    if (mode.value == "isSuccess") return;
    mode.value = "isSuccess";
    emit("checkCircle", props.id);
  } else {
    mode.value = "isActive";
  }
};
const down = (e) => {
  console.log(e);
  enter();
};
const leave = (e) => {
  if (!props.caEdit) return;
  if (!props.isDraw) {
    mode.value = "info";
  }
};
watch(
  () => props.caEdit,
  (v) => {
    if (v) mode.value = "info";
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
