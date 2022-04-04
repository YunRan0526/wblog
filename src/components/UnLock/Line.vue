<template>
  <div
    class="line"
    :style="{
      position: 'absolute',
      ...option,
    }"
  ></div>
</template>
<script setup>
import { onMounted, watch, ref } from "vue";
const props = defineProps({
  start: {
    type: Object,
  },
  end: {
    type: Object,
  },
});
const option = ref({});

watch(
  () => props.end,
  () => {
    computedStyle();
  }
);
const computedStyle = () => {
  let l = props.end.y - props.start.y;
  let h = props.end.x - props.start.x;
  const width = Math.sqrt(Math.pow(Math.abs(l), 2) + Math.pow(Math.abs(h), 2));
  let angel = (Math.atan2(l, h) * 180) / Math.PI;
  option.value = {
    left: `${props.start.x}px`,
    top: `${props.start.y}px`,
    background: "rgba(255, 255, 255, 0.9)",
    "border-radius": "5px",
    width: `${width}px`,
    "transform-origin": "left center",
    transform: `rotate(${angel}deg)`,
    height: "10px",
  };
};
onMounted(() => {});
</script>

<style lang="scss"></style>
