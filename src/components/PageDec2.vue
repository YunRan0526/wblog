<template>
  <PagingLayer ref="layer" @animationEnd="emits('animationEnd')">
    <PagingLayerContent @hide="toogle">
      <slot></slot>
    </PagingLayerContent>
  </PagingLayer>
</template>

<script setup>
import PagingLayer from ".//PagingLayer.vue";
import PagingLayerContent from "./PagingLayerContent.vue";
import { ref } from "vue";
const emits = defineEmits(["animationEnd"]);
const layer = ref(null);

const toogle = () => {
  layer.value.toggle();
};
</script>

<style lang="scss" scoped></style>
