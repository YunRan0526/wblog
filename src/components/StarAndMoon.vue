<template>
  <div class="container3">
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="star"></div>
    <div class="moon"></div>
  </div>
</template>

<script>
export default {
  name: "StarAndMoon",
  setup() {},
  mounted() {},
};
</script>
<style lang="scss">
$theme-black: #283c5f;
$theme-white: #faf7d9;
$theme-green: #c3ce5f;
$theme-blue: #4aa9a4;
$theme-red: #c45c66;
@mixin pc-layout {
  @media screen and (min-width: 761px) {
    @content;
  }
}

@mixin sp-layout {
  @media screen and (max-width: 760px) {
    @content;
  }
}
.container3 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 7;
  .star {
    position: absolute;
    top: 0;
    perspective: 1000px;
    transform-style: preserve-3d;
    transform: translateY(-100%);
    &::before,
    &::after {
      content: "";
      display: block;
    }
    &::before {
      width: 1px;
      @include pc-layout {
        height: calc(100% - 35px);
      }
      @include sp-layout {
        height: calc(100% - 20px);
      }
      margin-left: calc(50% - 0.5px);
      background-color: $theme-white;
    }
    &::after {
      @include pc-layout {
        width: 35px;
        height: 35px;
      }
      @include sp-layout {
        width: 20px;
        height: 20px;
      }
      background-image: url("@/image/homePage/star.svg");
      background-size: 100% auto;
      background-position: center top;
      background-repeat: no-repeat;
      position: absolute;
      bottom: 0;
    }
  }
  @include pc-layout {
    .star:nth-child(1) {
      left: 15%;
      height: 40%;
    }
    .star:nth-child(2) {
      left: 25%;
      height: 30%;
    }
    .star:nth-child(3) {
      right: 45%;
      height: 25%;
    }
    .star:nth-child(4) {
      right: 15%;
      height: 40%;
    }
  }
  @include sp-layout {
    .star:nth-child(1) {
      left: 8%;
      height: 40%;
    }
    .star:nth-child(2) {
      left: 17%;
      height: 30%;
    }
    .star:nth-child(3) {
      right: 26%;
      height: 25%;
    }
    .star:nth-child(4) {
      right: 8%;
      height: 40%;
    }
  }

  .moon {
    position: absolute;
    top: 0;
     transform: translateY(-100%);
    @include pc-layout {
      right: 25%;
    }
    @include sp-layout {
      right: 15%;
    }
    height: 80%;
    perspective: 1000px;
    transform-style: preserve-3d;

    &::before,
    &::after {
      content: "";
      display: block;
    }
    &::before {
      width: 1px;
      @include pc-layout {
        height: calc(100% - 35px);
      }
      @include sp-layout {
        height: calc(100% - 20px);
      }
      margin-left: calc(50% - 0.5px);
      background-color: $theme-white;
    }
    &::after {
      @include pc-layout {
        width: 35px;
        height: 35px;
      }
      @include sp-layout {
        width: 20px;
        height: 20px;
      }
      background-image: url("@/image/homePage/moon.svg");
      background-size: auto 100%;
      background-position: center top;
      background-repeat: no-repeat;
    }
  }
}
@media screen and (min-width: 761px){
  .container3{
    .star{
      &::after{
        position: absolute;
        bottom: 0;
        left: -17.5px;
      }
    }
  }
}
@media screen and (max-width: 760px){
  .container3{
    .star{
      &::after{
        position: absolute;
        bottom: 0;
        left: -10px;
      }
    }
  }
}
@keyframes showStar {
  0%   { transform: translateY(-100%) ; }
  40%  { transform: translateY(0%); }
  60%  { transform: translateY(-5%); }
  80%  { transform: translateY(-3%); }
  100% { transform: translateY(-5%); }
}
@keyframes starRoate {
  from { transform: rotateY(0deg) }
  to   { transform: rotateY(-360deg) }
}
.container3 {
  .star::after {
    animation: starRoate 6s linear 0s infinite;
  }
  .moon::after {
    animation: starRoate 6s linear 0s infinite;
  }
  .star:nth-child(1) {
    animation: showStar 0.6s ease 1.5s forwards;
  }
  .star:nth-child(4) {
    animation: showStar 0.6s ease 1.6s forwards;
  }
  .star:nth-child(2) {
    animation: showStar 0.6s ease 1.7s forwards;
  }
  .moon {
    animation: showStar 0.6s ease 1.8s forwards;
  }
  .star:nth-child(3) {
    animation: showStar 0.6s ease 1.9s forwards;
  }
}
</style>