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
@keyframes flowerRoatel {
  from {
    transform-origin: center center;
    transform: rotateZ(0deg);
  }
  to {
    transform-origin: center center;
    transform: rotateZ(-360deg);
  }
}
@keyframes flowerRoater {
  from {
    transform-origin: center center;
    transform: rotateZ(0deg);
  }
  to {
    transform-origin: center center;
    transform: rotateZ(360deg);
  }
}
* {
  font-family: tbchibirgothicplusk-pro, sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0;
  padding: 0;
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
    animation: flowerRoatel 4s linear 0s infinite;
    z-index: 999;
    background-image: url("@/image/Flower.svg");
    background-size: 100% auto;
    background-position: center top;
    background-repeat: no-repeat;
  }
}
.flower_border_bottom {
  border-bottom: dashed 1px #283c5f;
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    right: -7.5px;
    bottom: -7.5px;
    width: 15px;
    height: 15px;
    animation: flowerRoater 4s linear 0s infinite;
    background-image: url("@/image/page/flower.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -7.5px;
    bottom: -7.5px;
    width: 15px;
    height: 15px;
    animation: flowerRoatel 4s linear 0s infinite;
    background-image: url("@/image/page/flower.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
