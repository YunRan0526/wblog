<template>
  <transition
    name="yb-message-fade"
    @after-leave="$emit('destroy')"
    @before-leave="onClose"
  >
    <div
      v-show="visible"
      :class="{
        'yb-message': true,
        'yb-message-error': isError,
        'yb-message-success': isSuccess,
        'yb-message-info': isInfo,
        'yb-message-warning': isWarning,
      }"
      :style="customStyle"
    >
      <img
        :src="getSrc(`/src/assets/MessageBox/${type}.svg`)"
        :class="{ 'yb-icon': true, 'yb-icon-transform': isSuccess || isInfo }"
      />
      <div class="yb-message-content">{{ message }}</div>
      <CircleCloseButton
        class="yb-mesage-close"
        @click.stop="close"
        v-if="showClose"
        :smallSize="'50px'"
        :normalSize="'60px'"
      />
    </div>
  </transition>
</template>
<script setup>
import { onMounted, computed, ref } from "vue";
import CircleCloseButton from "/src/components/CircleCloseButton.vue";

const emits = defineEmits(["destroy"]);
const props = defineProps({
  id: {
    type: String,
  },
  type: {
    type: String,
  },
  offset: {
    type: Number,
  },
  delay: {
    type: Number,
  },
  message: {
    type: String,
  },
  zIndex: {
    type: Number,
    default: () => {
      return 1;
    },
  },
  onDestroy: {
    type: Function,
  },
  onClose: {
    type: Function,
  },
  showClose: {
    type: Boolean,
    default: () => {
      return true;
    },
  },
});
const customStyle = computed(() => ({
  top: `${props.offset}px`,
  zIndex: props.zIndex,
}));

const isSuccess = computed(() => props.type === "success");
const isError = computed(() => props.type === "error");
const isInfo = computed(() => props.type === "info");
const isWarning = computed(() => props.type === "warning");

let visible = ref(false);
let timer = ref(null);
const close = () => {
  visible.value = false;
};
const getSrc = (path) => {
  if (process.env.NODE_ENV === "development") {
    return path;
  }
  const modules = import.meta.globEager("/src/assets/MessageBox/*.*");
  return modules[path].default;
};
onMounted(() => {
  visible.value = true;
  timer.value = setTimeout(() => {
    close();
  }, props.delay);
});
</script>
<style lang="scss" scoped>
$theme-black: #283c5f;
$theme-white: #faf7d9;
$theme-green: #c3ce5f;
$theme-blue: #4aa9a4;
$theme-red: #c45c66;

body {
  overflow: hidden;
}

.yb-message {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  background-color: #ffffff;
  transition: 0.3s ease;

  &::before {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    content: "";
    display: block;
    width: 95%;
    height: 90%;
    border-radius: 10px;
    border: dashed 2px $theme-blue;
  }

  .yb-icon {
    width: 75px;
    margin-right: 20px;
  }
  .yb-icon-transform {
    transform: scaleX(-100%);
  }

  .yb-message-content {
    white-space: nowrap;
    font-size: 24px;
    color: #34495e;
    margin-right: 20px;
  }

  .yb-mesage-close {
    margin-right: 10px;
    z-index: 99;
  }
}

.yb-message-error {
  &::before {
    border: dashed 2px $theme-red;
  }

  .yb-message-content {
    color: $theme-red;
  }
}

.yb-message-success {
  &::before {
    border: dashed 2px $theme-blue;
  }
}

.yb-message-info {
  &::before {
    border: dashed 2px #c3ce5f;
  }
}

.yb-message-fade-enter-from,
.yb-message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
