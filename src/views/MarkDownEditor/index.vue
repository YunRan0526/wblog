<template>
  <MarkDownEditor :id="articleId" :editorHandle="editorHandle" />
</template>

<script setup>
import MarkDownEditor from "/src/components/MarkDownEditor.vue";
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { addArticle } from "../../api/module/ybw/article";
import $message from "/src/components/MessageBox/index.js";
const router = useRouter();
const route = useRoute();
const articleId = ref(NaN);
//回到工作台
const close = () => {
  router.push({ path: "/WorkSpace" });
};

const editorHandle = computed(() => {
  let fn = (v) => {
    const formData = new FormData();
    formData.append("title", v.title);
    formData.append("description", v.description);
    formData.append("content", v.content);
    formData.append("poster", v.poster.raw);
    addArticle(formData).then((res) => {
      if (res.success) {
        $message.success("新增成功");
      }
    });
  };
  if (route.query.id) {
    fn = (v) => {
      console.log("编辑文章", v);
    };
  }
  return fn;
});
</script>
<style lang="less"></style>
