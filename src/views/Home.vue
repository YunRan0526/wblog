<template>
  <div class="home">
    <MainPage />
    <a
      href="http://www.beian.gov.cn/portal/registerSystemInfo?spm=a2cmq.17629970.J_9220772140.114.f0d079feFwsJR2"
      target="_blank"
      class="beian"
      >鄂ICP备2021000948号</a
    >
  </div>
</template>

<script>
import MainPage from "@/views/MainPage.vue";
export default {
  name: "Home",
  components: {
    MainPage,
  },
  setup() {},
};
</script>
<style lang="scss" scoped>
@keyframes bottom_beian {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.home {
  .beian {
    animation: bottom_beian 1.2s ease-out 1.1s 1 normal forwards;
  }
}
@media screen and (max-width: 760px) {
  .home {
    position: relative;
    .beian {
      font-size: 12px;
      text-decoration: none;
      color: #dfe6e9;
      position: absolute;
      bottom: 0px;
      left: 50%;
      opacity: 0;
      transform: translateX(-50%) scale(0.8);
    }
  }
}
@media screen and (min-width: 761px) {
  .home {
    position: relative;
    .beian {
      font-size: 12px;
      text-decoration: none;
      color: #dfe6e9;
      position: absolute;
      bottom: 5px;
      left: 50%;
      opacity: 0;
      transform: translateX(-50%);
    }
  }
}
</style>
