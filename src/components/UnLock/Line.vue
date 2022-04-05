<template>
  <div
    class="line"
    :style="{
      position: 'absolute',
      'transform-origin': '0% 50%',
      height: '10px',
      'border-radius': '5px',
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
//当结束点位改变时需要重新计算结束点位位置
watch(
  () => props.end,
  () => {
    computedStyle();
  }
);
//计算Line样式
const computedStyle = () => {
  let l = props.end.y - props.start.y; //底边
  let h = props.end.x - props.start.x; //高
  //勾股定理计算宽度
  const width = Math.sqrt(Math.pow(Math.abs(l), 2) + Math.pow(Math.abs(h), 2));
  //根据tan值计算角度
  let angel = (Math.atan2(l, h) * 180) / Math.PI;
  option.value = {
    left: `${props.start.x}px`,
    top: `${props.start.y - 5}px`,
    background: "rgba(255, 255, 255, 0.9)",
    width: `${width}px`,
    transform: `rotate(${angel}deg)`,
  };
};
onMounted(() => {});
</script>

<style lang="scss"></style>
