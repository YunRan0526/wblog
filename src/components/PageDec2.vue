<template>
  <div>
    <PagingLayer ref="layer">
      <PagingLayerContent> </PagingLayerContent>
    </PagingLayer>
  </div>
</template>

<script setup>
import PagingLayer from ".//PagingLayer.vue";
import PagingLayerContent from "./PagingLayerContent.vue";
import { ref } from "vue";
const layer = ref(null);

const toogle = () => {
  layer.value.toggle();
};
</script>

<style lang="scss" scoped></style>
