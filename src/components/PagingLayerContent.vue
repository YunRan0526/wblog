<template>
  <div class="content-wraper">
    <div class="content"><slot></slot></div>
    <span class="content-btn">
      <section></section>
      <section><div></div></section>
    </span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@keyframes page-box__show-content {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes page-box__show-close-btn {
  from {
    transform: translate(calc(100% + 20px), calc(-100% + -20px));
  }
  to {
    transform: translate(0, 0);
  }
}
.content-wraper {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  position: relative;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  border: solid 10px #c2617e;
  box-sizing: border-box;
  background-color: #fcfcf3;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6) inset;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  opacity: 0;
  transition: all 0.35s ease 0s;
  animation: page-box__show-content 0.6s ease 0.55s forwards;
}
.content-btn {
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100px;
  height: 100px;
  display: block;
  transform: translate(calc(100% + 20px), calc(-100% + -20px));
  animation: page-box__show-close-btn 0.6s ease 0.9s forwards;
  & > section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    border-radius: 3px;
    transition: all 0.35s ease 0s;
  }

  & > section:nth-child(1) {
    background-color: #c2617e;
    transform: rotate(15deg);
  }
  & > section:nth-child(2) {
    background-color: #fcfcf3;
  }
  & > section:nth-child(2)::before,
  & > section:nth-child(2)::after {
    content: "";
    display: block;
    position: absolute;
    top: 49px;
    left: 20px;
    width: 60px;
    height: 1px;
    border-top: dashed 2px #4a3f55;
    box-sizing: border-box;
    opacity: 0.7;
  }
  & > section:nth-child(2)::before {
    transform: rotate(45deg);
  }
  & > section:nth-child(2)::after {
    transform: rotate(-45deg);
  }
  &:hover section:nth-child(1) {
    background-color: #4a3f55;
    transform: rotate(15deg);
  }
  &:hover section:nth-child(2) {
    background-color: #eee;
  }
  &:hover ~ .content {
    border-color: #4a3f55;
  }
}
</style>
