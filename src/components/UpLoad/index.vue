<template>
  <div class="upload-container">
    <el-upload
      action="#"
      list-type="picture-card"
      :auto-upload="false"
      @change="selectFile"
      :file-list="fileList"
    >
      <el-icon v-show="showIcon"><Plus /></el-icon>
      <template #file="{ file }">
        <div>
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        </div>
      </template>
    </el-upload>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ElIcon, ElUpload } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import $message from "/src/components/MessageBox/index.js";
const props = defineProps({
  file: {
    type: Object,
    default: () => {
      return null;
    },
  },
  maxSize: {
    type: Number,
    default: () => {
      return 2048;
    },
  },
});
const emit = defineEmits(["selectFile"]);
const fileList = ref([]);
const selectFile = (file, files) => {
  const ext = file.name.split(".")[1];
  if (!["png", "jpg", "jpeg", "svg", "webgp"].includes(ext)) {
    fileList.value = [];
    $message.error("只支持图片类型文件");
    return;
  }
  const size = Math.floor(file.size / 1000);
  if (size >= props.maxSize) {
    fileList.value = [];
    $message.error("图片文件最大不能超过2MB!");
    return;
  }
  fileList.value = [file];
  if (fileList.value.length) {
    showIcon.value = false;
  }
  emit("selectFile", file);
};
let showIcon = ref(true);
onMounted(() => {
  if (!!props.file) {
    fileList.value = [props.file];
  }
});
</script>
<style lang="scss" scoped>
.upload-container {
  display: inline-block;
  width: 148px;
  height: 148px;
  position: relative;
  overflow: hidden;
}
.el-upload-list {
  position: absolute;
}
:deep(.el-upload-list__item) {
  position: absolute;
  width: 148px;
  height: 148px;
  transition: none;
  z-index: 1;
}
:deep(.el-upload) {
  position: absolute;
  width: 148px;
  height: 148px;
  transition: none;
  z-index: 2;
  background: transparent;
}
</style>
