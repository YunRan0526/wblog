<template>
  <router-view />
 
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style lang="scss">
@keyframes flowerRoate {
  from {
    transform-origin: center center;
    transform: rotateZ(0deg);
  }
  to {
    transform-origin: center center;
    transform: rotateZ(-360deg);
  }
}
.left_top_flower {
  &::after {
    content: "";
    display: block;
    width: 35px;
    height: 35px;
    position: absolute;
    left: 0;
    top: 0;
    animation: flowerRoate 4s linear 0s infinite;
    z-index: 999;
    background-image: url("@/image/Flower.svg");
    background-size: 100% auto;
    background-position: center top;
    background-repeat: no-repeat;
  }
}
</style>
