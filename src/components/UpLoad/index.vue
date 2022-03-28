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
import { ref } from "vue";
import { ElIcon, ElUpload } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
const emit = defineEmits(["selectFile"]);
const fileList = ref([]);
const selectFile = (file, files) => {
  fileList.value = [file];
  if (fileList.value.length) {
    showIcon.value = false;
  }
  emit("selectFile", file);
};
let showIcon = ref(true);
</script>
<style lang="scss" scoped>
.upload-container {
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
