<template>
  <PageDec2 @animationEnd="close"></PageDec2>
</template>

<script setup>
import { useRouter } from "vue-router";
import PageDec2 from "../../components/PageDec2.vue";
const router = useRouter();
const close = () => {
  router.push("/Home");
};
</script>

<style lang="scss" scoped></style>
