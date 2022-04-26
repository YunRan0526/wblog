<template>
  <section class="page-title">
    <div></div>
    <div></div>
    <div></div>
    <div :data-content="props.title"></div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: () => {
      return "";
    },
  },
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 760px) {
  .page-title {
    position: relative;
    margin: 50px auto 25px;
    width: 75%;
    height: 40px;

    div {
      min-width: 200px;
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      &:nth-child(1) {
        width: 100%;
        background-color: #e4d6ce;
      }
      &:nth-child(2) {
        width: calc(100% - 15px);
        background-color: #817487;
      }
      &:nth-child(3) {
        width: calc(100% - 30px);
        background-color: #e5b8bd;
      }
      &:nth-child(4) {
        width: calc(100% - 45px);
        background-color: #c2617e;
        &::after {
          content: attr(data-content);
          position: absolute;
          top: 0;
          left: -10px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          color: #ffffff;
          font-size: 24px;
          font-weight: 900;
        }
      }
    }
  }
}
@media screen and (min-width: 761px) {
  .page-title {
    position: relative;
    margin: 50px auto;
    width: 600px;
    height: 50px;
    transition: 0.3s all;
    div {
      position: absolute;
      right: 0;
      top: 0;
      min-width: 200px;
      height: 100%;
      &:nth-child(1) {
        width: 100%;
        background-color: #e4d6ce;
      }
      &:nth-child(2) {
        width: calc(100% - 15px);
        background-color: #817487;
      }
      &:nth-child(3) {
        width: calc(100% - 30px);
        background-color: #e5b8bd;
      }
      &:nth-child(4) {
        width: calc(100% - 45px);
        background-color: #c2617e;
        &::after {
          content: attr(data-content);
          position: absolute;
          top: 0;
          left: -10px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          color: #ffffff;
          font-size: 24px;
          font-weight: 900;
        }
      }
    }
  }
}
</style>
