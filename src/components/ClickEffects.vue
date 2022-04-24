<template>
  <div>
    <section>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  </div>
</template>
<script setup>
import { reactive } from "vue";

const colorList = reactive([
  "#283c5f",
  "#2ecc71",
  "#c3ce5f",
  "#4aa9a4",
  "#c45c66",
  "#8e44ad",
  "#c0392b",
  "#f39c12",
]);
const borderColor =
  colorList[Math.floor(Math.random() * (colorList.length - 1) * 1.1)];
</script>
<style lang="scss" scoped>
.ClickEffects {
  section {
    div {
      &::after {
        border-top: solid 17px;
        border-top-color: v-bind(borderColor);
      }
    }
  }
}
</style>
