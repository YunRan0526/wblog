<template>
  <div class="V1">
    <div class="container">
      <div class="left_bg_circle circle"></div>
      <div class="center_bg_circle circle"></div>
      <div class="right_bg_circle circle"></div>
    </div>
    <div class="container2">
      <div class="xx">
        <div class="border"></div>
        <div class="border"></div>
        <div class="border"></div>
        <div class="border"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "V1",
  setup() {},
  mounted() {},
};
</script>

<style scoped lang="scss">
$theme-black: #283c5f;
$theme-white: #faf7d9;
$theme-green: #c3ce5f;
$theme-blue: #4aa9a4;
$theme-red: #c45c66;
* {
  margin: 0;
  padding: 0;
}
.V1 {
  display: flex;
  justify-content: center;
  align-items: center;
  contain: paint;
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
            height: 5px;
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
            height: 5px;
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
            width: 5px;
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
            width: 5px;
            height: 100%;
            background: url("@/image/homePage/line-1.svg");
          }
        }
      }
    }
  }
  .container {
    display: flex;
    contain: paint;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100vh;

    position: relative;
    .left_bg_circle {
      width: 0px;
      height: 0px;
      position: relative;
      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(-50%, -50%);
        width: 100vmax;
        height: 100vmax;
        background-color: $theme-red;
        z-index: 1;
        animation: left_circle 1s cubic-bezier(0.4, -0.15, 0, 1) 0s 1 normal
          forwards;
      }
    }
    .center_bg_circle {
      width: 0px;
      height: 0px;
      position: relative;
      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        background-color: $theme-black;
        z-index: 2;
        animation: center_circle 1.2s cubic-bezier(0, 0.5, 0.2, 0.98) -0.3s 1 normal
          forwards;
      }
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        border: solid 3px $theme-blue;
        opacity: 0.7;
        z-index: 3;
        animation: center_inner_circle 1.2s cubic-bezier(0, 0.5, 0.2, 0.98) -0.3s
          1 normal forwards;
      }
    }
    .right_bg_circle {
      width: 0px;
      height: 0px;
      position: relative;
      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        transform: translate(-50%, -50%);
        width: 100vmax;
        height: 100vmax;
        background-color: $theme-green;
        z-index: 1;
        animation: right_circle 1s cubic-bezier(0.4, -0.15, 0, 1) 0s 1 normal
          forwards;
      }
    }
  }
}
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
@media screen and (max-width: 760px) {
  @keyframes left_circle {
    0% {
      width: 0;
      height: 0;
      border-radius: 50%;
    }
    70% {
      width: 100vmax;
      height: 100vmax;
      border-radius: 50%;
    }
    100% {
      width: 100vmax;
      height: 100vmax;
      border-radius: 50% 50% 0 0;
    }
  }
  @keyframes right_circle {
    0% {
      width: 0;
      height: 0;
      border-radius: 50%;
    }
    70% {
      width: 100vmax;
      height: 100vmax;
      border-radius: 50%;
    }
    100% {
      width: 100vmax;
      height: 100vmax;
      border-radius: 0 0 50% 50%;
    }
  }
  @keyframes center_circle {
    0% {
      width: 0;
      height: 0;
    }
    50% {
      width: 0;
      height: 0;
    }
    100% {
      width: 90vmax;
      height: 90vmax;
    }
  }
  @keyframes center_inner_circle {
    0% {
      width: 0;
      height: 0;
      opacity: 0;
    }
    50% {
      width: 0;
      height: 0;
      opacity: 0;
    }
    100% {
      width: 86vmax;
      height: 86vmax;
      opacity: 0.7;
    }
  }

  .V1 {
    .container2 {
      padding: 10px;
    }
    .container {
      flex-direction: column;
      .left_bg_circle {
        &::after {
        }
      }

      .right_bg_circle {
        &::after {
        }
      }
    }
  }
}
@media screen and (min-width: 761px) {
  @keyframes left_circle {
    0% {
      width: 0;
      height: 0;
      border-radius: 50%;
    }
    70% {
      width: 100vmax;
      height: 100vmax;
      border-radius: 50%;
    }
    100% {
      width: 100vmax;
      height: 100vmax;
      border-radius: 50% 0 0 50%;
    }
  }
  @keyframes right_circle {
    0% {
      width: 0;
      height: 0;
      border-radius: 50%;
    }
    70% {
      width: 100vmax;
      height: 100vmax;
      border-radius: 50%;
    }
    100% {
      width: 100vmax;
      height: 100vmax;
      border-radius: 0 50% 50% 0;
    }
  }
  @keyframes center_circle {
    0% {
      width: 0;
      height: 0;
    }
    50% {
      width: 0;
      height: 0;
    }
    100% {
      width: 90vmax;
      height: 90vmax;
    }
  }
  @keyframes center_inner_circle {
    0% {
      width: 0;
      height: 0;
    }
    50% {
      width: 0;
      height: 0;
      opacity: 0;
    }
    100% {
      width: 86vmax;
      height: 86vmax;
      opacity: 0.7;
    }
  }

  .V1 {
    .container2 {
      padding: 25px;
    }
    .container {
      flex-direction: row;
    }
  }
}
</style>
