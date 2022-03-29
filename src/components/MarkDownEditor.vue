<template>
  <div class="editor">
    <div class="topContainer">
      <!--  -->
      <div class="title">
        <div class="item">
          <span class="label">标题：</span>
          <div class="content">
            <el-input
              v-model="article.title"
              placeholder="输入文章标题"
            ></el-input>
          </div>
        </div>
        <div class="operation">
          <el-button @click="submit">提交</el-button>
        </div>
      </div>
      <!--  -->
      <div class="desc">
        <div class="item">
          <span class="label">简介：</span>
          <div class="content">
            <el-input
              v-model="article.description"
              type="textarea"
              placeholder="输入文章简介"
            ></el-input>
          </div>
        </div>
        <div class="operation"></div>
      </div>
      <!--  -->
      <div class="poster-upload">
        <span class="label">封面：</span>
        <UpLoad @selectFile="selectFile"></UpLoad>
      </div>
    </div>
    <MdEditor v-model="article.content" @save="save" />
  </div>
</template>

<script setup>
import MdEditor from "md-editor-v3";
import { ElInput, ElButton } from "element-plus";
import "md-editor-v3/lib/style.css";
import { onMounted, reactive } from "vue";
import UpLoad from "/src/components/UpLoad/index.vue";
const props = defineProps({
  id: {
    type: [String, Number],
    default: () => {
      return NaN;
    },
  },
  editorHandle: {
    type: Function,
  },
});

const article = reactive({
  id: props.id,
  title: "",
  poster: "",
  description: "",
  content: "",
});

//编辑器内容部保存
const save = (value) => {};
//提交文章
const submit = () => {
  props.editorHandle(article);
};
// 修改文章  则需要请求文章内容然后初始化
const initArticle = () => {
  article.id = props.id;
};
//选取图片
const selectFile = (file) => {
  article.poster = file;
};
onMounted(() => {
  props.id ? initArticle() : "";
});
</script>
<style lang="scss" scoped>
.editor {
  text-align: start;
  .topContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    padding: 15px;
    .title {
      width: 100%;
      display: flex;
      align-items: center;
      .item {
        width: calc(100% - 120px);
        display: flex;
        align-items: center;
        .content {
          flex: 1;
        }
      }
      .operation {
        width: 120px;
        height: 100%;
        box-sizing: border-box;
        padding: 15px;
      }
    }
    .desc {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      .item {
        width: calc(100% - 120px);
        display: flex;
        align-items: center;
        .content {
          flex: 1;
        }
      }

      .operation {
        width: 120px;
        height: 100%;
        box-sizing: border-box;
        padding: 15px;
      }
    }
    .poster-upload {
      width: 100%;
      display: flex;
      align-items: center;
    }
  }
  #md-editor-v3 {
    height: calc(100vh - 350px);
  }
}
</style>
