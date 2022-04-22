<template>
  <div class="yb-confirm-overlay" @click="layClick()">
    <transition name="yb-confirm-fade">
      <div class="yb-confirm" @click.stop="contentClick" v-show="visible">
        <div class="yb-confirm-header"></div>
        <div class="yb-confirm-content">
          {{ props.content }}
        </div>
        <div class="yb-confirm-footer">
          <div class="cancel-box" @click.stop="cancel()">
            <div class="button cancel-button">
              <div class="cross">
                <div class="line"></div>
                <div class="line"></div>
              </div>
            </div>
          </div>
          <div class="success-box" @click.stop="confirm()">
            <div class="button success-button">
              <div class="check">
                <div class="line"></div>
                <div class="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { onMounted, ref, onUnmounted } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: () => {
      return "提示";
    },
  },
  content: {
    default: () => {
      return "";
    },
  },
});
const emits = defineEmits(["cancel", "confirm"]);
let visible = ref(false);
let password = ref("");
const cancel = () => {
  emits("cancel");
};
const confirm = () => {
  emits("confirm", password.value);
};
const layClick = () => {
  emits("cancel");
};
const contentClick = () => {};
onMounted(() => {
  visible.value = true;
});
onUnmounted(() => {});
</script>
<style lang="scss" scoped>
$theme-black: #283c5f;
$theme-white: #faf7d9;
$theme-green: #c3ce5f;
$theme-blue: #4aa9a4;
$theme-red: #c45c66;
.yb-confirm-overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);

  .yb-confirm {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 412px;
    padding: 16px 0;
    margin-top: -30vh;
    border-radius: 4px;
    transition: 0.3s ease;
    background-color: #fff;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: -6px;
      left: -6px;
      width: calc(100% + 8px);
      height: calc(100% + 8px);
      border-radius: 8px;
      border: solid 2px #ffffff;
      pointer-events: none;
    }

    .yb-confirm-header {
      width: 100%;
      height: 40px;
      padding: 5px 0;
      text-indent: 25px;
      font-size: 22px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: start;
      background-color: #ffffff;
    }

    .yb-confirm-content {
      color: #616161;
      width: 100%;
      padding: 30px 0;
      box-sizing: border-box;
      text-align: center;
      background-color: #e4f6f7;
      margin-bottom: 16px;
    }

    .yb-confirm-footer {
      display: flex;
      justify-content: center;
      background-color: #ffffff;

      .cancel-box,
      .success-box {
        width: 48px;
      }

      .cancel-box {
        margin-right: 48px;
      }

      .button {
        position: relative;
        width: 48px;
        height: 48px;
        border: solid 1px #59b2b8;
        border-radius: 50%;
        cursor: pointer;

        &.cancel-button {
          border-color: #ac6569;
        }

        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 2px;
          left: 2px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: #59b2b8;
        }

        &.cancel-button::before {
          background-color: #ac6569;
        }
      }

      .cancel-button {
        .cross {
          position: absolute;
          top: 16px;
          left: 16px;
          width: 16px;
          height: 16px;
          transform: rotate(-45deg);

          .line {
            position: absolute;
            top: 0;
            left: calc(50% - 1px);
            width: 2px;
            height: 100%;
            overflow: hidden;

            &::after {
              content: "";
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: #fff;
              border-radius: 1px;
              transform: translateY(-100%);
            }

            &:last-child {
              transform: rotate(90deg);
            }
          }
        }
      }

      .success-button {
        .check {
          position: absolute;
          top: 16px;
          left: 16px;
          width: 16px;
          height: 16px;
          transform: translate(-8%, -25%) rotate(-45deg);

          .line {
            position: absolute;
            left: 0;
            bottom: 0;
            overflow: hidden;

            &::after {
              content: "";
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: #fff;
              border-radius: 1px;
            }
          }

          .line:nth-child(1) {
            width: 100%;
            height: 2px;

            &::after {
              transform: translateX(-100%);
            }
          }

          .line:nth-child(2) {
            width: 2px;
            height: 70%;

            &::after {
              transform: translateY(-100%);
            }
          }
        }
      }
    }

    .yb-confirm-footer {
      .cancel-button {
        .line:nth-child(1)::after {
          animation: slide-bottom 0.15s ease 0.2s forwards;
        }

        .line:nth-child(2)::after {
          animation: slide-bottom 0.15s ease 0.35s forwards;
        }
      }

      .success-button {
        .line:nth-child(2)::after {
          animation: slide-bottom 0.15s ease 0.2s forwards;
        }

        .line:nth-child(1)::after {
          animation: slide-right 0.15s ease 0.35s forwards;
        }
      }
    }
  }
  .yb-confirm-fade-enter-from,
  .yb-confirm-fade-leave-to {
    opacity: 0;
    transform: translate(0, -70%);
  }
}

//button icon 动画
@keyframes slide-bottom {
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0%);
  }
}

@keyframes slide-right {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0%);
  }
}
</style>
