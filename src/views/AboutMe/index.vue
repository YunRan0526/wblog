<template>
  <PageDec2 @animationEnd="close">
    <PageTitle :title="'About Me'"></PageTitle>
    <div class="container">
      <div class="box">
        <div class="avatar">
          <img src="/src/assets/avatar/avatar4.png" />
        </div>
        <h3 class="name">@YBW</h3>
        <div class="info">
          <div class="info-li">
            <span>昵称</span>
            <span>：</span>
            <span>YBW / 吔包C</span>
          </div>
          <div class="info-li">
            <span>爱好</span>
            <span>：</span>
            <span>写代码、可爱的东西</span>
          </div>
          <div class="info-li">
            <span>技能</span>
            <span>：</span>
            <span>JavaScript、Vue、Koa2</span>
          </div>
          <div class="info-li">
            <span>标签</span>
            <span>：</span>
            <span>技术宅、反二次元</span>
          </div>
        </div>
      </div>
    </div>
  </PageDec2>
</template>

<script setup>
import { useRouter } from "vue-router";
import PageDec2 from "../../components/PageDec2.vue";
import PageTitle from "../../components/PageTitle.vue";
const router = useRouter();
const close = () => {
  router.push("/Home");
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 761px) {
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .box {
      width: 600px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .avatar {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .name {
        margin: 0 auto;
        margin-top: 50px;
        width: 150px;
        height: 40px;
        border-left: solid 15px #4a3f55;
        background-color: #fff;
        padding: 0 5px;
        box-shadow: 0 0 5px rgb(0 0 0 / 40%);
        font-size: 25px;
        color: #555;
        font-weight: bold;
        text-align: center;
        line-height: 40px;
        transform: rotate(-5deg);
      }
      .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        box-sizing: border-box;
        padding-left: 2.5%;
        .info-li {
          text-align: left;
          position: relative;
          width: 70%;
          padding: 0 50px;
          margin: 10px auto;
          margin-bottom: 15px;
          border-bottom: solid 1px #c45c66;
          &::after {
            position: absolute;
            left: -15px;
            bottom: -5px;
            content: "";
            display: block;
            width: 10px;
            height: 10px;
            background-color: #c45c66;
            border-radius: 50%;
          }
          span {
            font-weight: 800;
            font-size: 14px;
            color: #283c5f;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 760px) {
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .box {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .avatar {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .name {
      margin: 0 auto;
      margin-top: 25px;
      width: 150px;
      height: 40px;
      border-left: solid 15px #4a3f55;
      background-color: #fff;
      padding: 0 5px;
      box-shadow: 0 0 5px rgb(0 0 0 / 40%);
      font-size: 25px;
      color: #555;
      font-weight: bold;
      text-align: center;
      line-height: 40px;
      transform: rotate(-5deg);
    }
    .info {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
      box-sizing: border-box;
      padding-left: 5%;
      .info-li {
        text-align: left;
        position: relative;
        width: 70%;
        padding: 0 20px;
        margin: 5px auto;
        margin-bottom: 15px;
        border-bottom: solid 1px #c45c66;
        &::after {
          position: absolute;
          left: -15px;
          bottom: -5px;
          content: "";
          display: block;
          width: 10px;
          height: 10px;
          background-color: #c45c66;
          border-radius: 50%;
        }
        span {
          font-weight: 800;
          font-size: 14px;
          color: #283c5f;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
