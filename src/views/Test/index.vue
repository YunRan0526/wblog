<template>
  <div @click="show">
    <PageDec2></PageDec2>
  </div>
</template>

<script setup>
import PageDec2 from "../../components/PageDec2.vue";
const show = () => {
  console.log(1);
};
</script>

<style lang="scss">
.tets {
  position: relative;
  contain: paint;
}
</style>
