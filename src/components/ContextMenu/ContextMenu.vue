<template>
  <transition name="context-menu" @after-leave="emit('destroy')">
    <ul
      v-show="visible"
      :class="{
        'yb-context-menu': true,
      }"
      :style="{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        'z-index': zIndex,
      }"
      @contextmenu="contextmenu"
    >
      <li
        v-for="item in menu"
        :key="item.key"
        @click="menuHandle[item.key]"
        :class="{ 'context-menu-item': true }"
      >
        {{ item.value }}
      </li>
    </ul>
  </transition>
</template>

<script setup>
import { toRefs, reactive, ref, onMounted } from "vue";
const emit = defineEmits(["clear", "destroy"]);
const props = defineProps({
  x: {
    type: Number,
  },
  y: {
    type: Number,
  },
  zIndex: {
    type: Number,
  },
  menu: {
    type: Array,
  },
});
let visible = ref(false);
const menuHandle = reactive({
  getDetail: () => {
    console.log("查看");
    hide();
  },
  edit: () => {
    console.log("编辑");
    hide();
  },
  delete: () => {
    console.log("删除");
    hide();
  },
});
const contextmenu = (e) => {
  e.preventDefault();
};
const show = () => {
  visible.value = true;
};
const hide = () => {
  visible.value = false;
};

let { x, y, zIndex, menu } = toRefs(props);
defineExpose({
  hide,
});
const height = ref("");
height.value = `${menu.value.length * 41 - (menu.value.length - 1) * 5}px`;
onMounted(() => {
  show();
});
</script>

<style lang="scss">
.context-menu-enter-to,
.context-menu-leave-from {
  height: v-bind(height);
}
.context-menu-enter-from,
.context-menu-leave-to {
  height: 0px;
}

.yb-context-menu {
  box-sizing: border-box;
  cursor: pointer;
  background: #ffffff;
  list-style: none;
  border-radius: 5px;
  transition: 0.1s ease;
  overflow: hidden;
  background: #fffef9;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .context-menu-item {
    position: relative;
    min-width: 100px;
    min-height: 40px;
    box-sizing: border-box;
    padding: 5px 15px;
    margin: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;
    overflow: hidden;

    &:hover {
      font-size: 18px;
      font-weight: 900;
      color: white;
    }
    &:hover::after {
      transform: scale(1);
    }
    &::after {
      z-index: -1;
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #4aa9a4;
      transform: scale(0);
      transition: all 0.25s cubic-bezier(0.77, 0, 0.17, 1.02) 0s;
    }
  }
}
</style>
