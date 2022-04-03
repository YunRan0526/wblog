<template>
  <div class="unlock" @mouseup="drawEnd" @mousedown.capture="drawStart">
    <div class="row" v-for="item in 3" :key="item">
      <Circle
        v-for="c in 3"
        :key="item * (item - 1) + c"
        :id="item * (item - 1) + c"
        :isDraw="isDraw"
        :caEdit="caEdit"
        @drawStart="drawStart"
        @drawEnd="drawEnd"
        @checkCircle="checkCircle"
      />
    </div>
  </div>
</template>

<script setup>
import Circle from "/src/components/UnLock/Circle.vue";
import { ref } from "vue";
const queue = ref([]);
const isDraw = ref(false);
const caEdit = ref(true);
const drawStart = (e, v) => {
  e.preventDefault();
  isDraw.value = true;
};
const drawEnd = (e, v) => {
  //连线完成后一段时间内禁止操作
  caEdit.value = false;
  setTimeout(() => {
    caEdit.value = true;
    queue.value = [];
  }, 1000);
  //在circle里面弹起鼠标
  isDraw.value = false;

  console.log(queue.value.join(""));
};
const checkCircle = (v) => {
  queue.value.push(v);
};
</script>

<style lang="scss">
.unlock {
  background: #393e46;
  aspect-ratio: 1/ 1;
  width: 100%;
  height: atuo;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .row {
    aspect-ratio: 5/ 1;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
  }
}
</style>
