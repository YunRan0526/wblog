<template>
  <div class="yb-confirm-overlay">
    <transition name="unlock" @after-leave="emit('destroy')">
      <div
        class="unlock"
        @mouseup.stop="drawEnd"
        @mousedown.capture="drawStart"
        @mousemove.stop="drawIng"
        ref="unlock"
        :style="{
          width: `${props.width}px`,
        }"
        v-show="visible"
      >
        <div class="row" v-for="item in 3" :key="item">
          <Circle
            v-for="c in 3"
            :key="(item - 1) * 3 + c"
            :id="(item - 1) * 3 + c"
            :isDraw="isDraw"
            :caEdit="caEdit"
            :Error="isError"
            @drawStart="drawStart"
            @drawEnd="drawEnd"
            @checkCircle="checkCircle"
            @ent="getCenter"
          />
        </div>
        <Line
          v-for="(item, index) in lineQueue"
          :key="index"
          :start="item.startPoint"
          :end="item.endPoint"
        />
      </div>
    </transition>
  </div>
</template>

<script setup>
import Circle from "/src/components/UnLock/Circle.vue";
import Line from "/src/components/UnLock/Line.vue";
import { ref, onMounted } from "vue";
import { login } from "/src/api/module/ybw/user.js";
let requestTimer = null;
let errorTimer = null;
const visible = ref(false);
const unlock = ref("unlock");
const lineQueue = ref([]);
const queue = ref([]);
const isDraw = ref(false);
const caEdit = ref(true);
const password = ref("");
const isError = ref(false);
const props = defineProps({
  width: {
    type: Number,
    default: () => {
      return 500;
    },
  },
});
const emit = defineEmits(["cancel", "confirm"]);
const drawStart = (e, v) => {
  e.preventDefault();
  isDraw.value = true;
};
let date = ref(Date.now());
const drawIng = (e) => {
  if (!isDraw.value) return;
  if (Date.now() - date.value <= 10) return;
  date.value = Date.now();
  const arr = [];
  queue.value.forEach((p, index) => {
    let endPoint;
    let startPoint = queue.value[index];
    if (index + 1 >= queue.value.length) {
      let { left, top } = unlock.value.getBoundingClientRect();
      endPoint = { x: e.clientX - left, y: e.clientY - top };
    } else {
      endPoint = queue.value[index + 1];
    }
    arr.push({
      startPoint,
      endPoint,
    });
  });
  lineQueue.value = arr;
};
const drawEnd = (e, v) => {
  //连线完成后一段时间内禁止操作
  caEdit.value = false;
  if (
    lineQueue.value.length > 0 &&
    !lineQueue.value[lineQueue.value.length - 1].endPoint.id
  ) {
    lineQueue.value.pop();
  }
  requestTimer = setTimeout(() => {
    if (password.value.length > 0) {
      login({
        account: "136518847@qq.com",
        password: password.value,
      }).then((res) => {
        if (res.success) {
          emit("confirm", { type: true, message: "登录成功" });
          sessionStorage.setItem("yebaoc_password", "1234567");
          init();
        } else {
          isError.value = true;
          errorTimer = setTimeout(() => {
            init();
            clearTimeout(errorTimer);
          }, 1000);
        }
        clearTimeout(requestTimer);
      });
    } else {
      init();
    }
  }, 1000);
  // 在circle里面弹起鼠标;
  isDraw.value = false;
  let pw = "";
  queue.value.forEach((p) => {
    pw = pw + p.id;
  });
  password.value = pw;
};
const checkCircle = (v) => {
  queue.value.push(v);
};
const getCenter = (v) => {
  let idx = lineQueue.value.findIndex((item) => item.id === v.id);
  if (idx !== -1) return;
  lineQueue.value.push(v);
};
const init = () => {
  isError.value = false;
  caEdit.value = true;
  queue.value = [];
  lineQueue.value = [];
  password.value = "";
};
onMounted(() => {
  visible.value = true;
});
</script>

<style lang="scss">
.unlock-enter-to,
.unlock-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.unlock-enter-from,
.unlock-leave-to {
  opacity: 0;
  transform: translateY(-200px);
}
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
}
.unlock {
  position: relative;
  background: #393e46;
  aspect-ratio: 1/ 1;
  width: 100%;
  height: atuo;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  transition: all 0.3s;
  .row {
    aspect-ratio: 5/ 1;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
  }
}
</style>
