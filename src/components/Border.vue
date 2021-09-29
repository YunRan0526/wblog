<template>
  <div class="container2">
    <div class="xx">
      <div class="border"></div>
      <div class="border"></div>
      <div class="border"></div>
      <div class="border"></div>
    </div>
  </div>
</template>
<script>
export default {
  setup() { },
};
</script>
<style lang="scss">
@keyframes border {
  0% {
    transform: scale(1.1);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.container2 {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  z-index: 5;
  transform: scale(1);
  opacity: 0;
  animation: border 1.2s cubic-bezier(0, 0.99, 0.44, 1) 0.8s 1 normal forwards;
  .xx {
    width: 100%;
    height: 100%;
    position: relative;
    .border {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      &:nth-of-type(1) {
        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;

          background: url("@/image/homePage/line-2.svg");
        }
      }
      &:nth-of-type(2) {
        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          background: url("@/image/homePage/line-2.svg");
        }
      }
      &:nth-of-type(3) {
        &::after {
          content: "";
          display: block;
          position: absolute;
          right: 0;
          top: 0;

          height: 100%;
          background: url("@/image/homePage/line-1.svg");
        }
      }
      &:nth-of-type(4) {
        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          top: 0;

          height: 100%;
          background: url("@/image/homePage/line-1.svg");
        }
      }
    }
  }
}

@media screen and (min-width: 761px) {
  .container2 {
    padding: 25px;
    .xx {
      .border {
        &:nth-of-type(1) {
          &::after {
            height: 5px;
          }
        }
        &:nth-of-type(2) {
          &::after {
            height: 5px;
          }
        }
        &:nth-of-type(3) {
          &::after {
            width: 5px;
          }
        }
        &:nth-of-type(4) {
          &::after {
            width: 5px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 760px) {
  .container2 {
    padding: 15px;
    .xx {
      .border {
        &:nth-of-type(1) {
          &::after {
            height: 3px;
          }
        }
        &:nth-of-type(2) {
          &::after {
            height: 3px;
          }
        }
        &:nth-of-type(3) {
          &::after {
            width: 3px;
          }
        }
        &:nth-of-type(4) {
          &::after {
            width: 3px;
          }
        }
      }
    }
  }
}
</style>