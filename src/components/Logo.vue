<template>
  <div class="Logo">
    <img :src="getSrc('/src/assets/yebaoc.svg')" />
  </div>
</template>
<script setup>
const getSrc = (path) => {
  if (process.env.NODE_ENV === 'development') {
    return path
  }
  const modules = import.meta.globEager("/src/assets/*.*");
  return modules[path].default;
}
</script>
<style lang="scss">
@keyframes showLogo {
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.1);
  }
  60% {
    transform: scale(1);
  }
  80% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
}

.Logo {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90vmin;
    transform: scale(0);
    animation: showLogo 0.6s ease 0.9s forwards;
  }
}
</style>