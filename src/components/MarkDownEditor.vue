<template>
    <div class="editor">
        <div class="item">
            <span class="label">标题：</span>
            <div class="content">
                <el-input v-model="article.title"></el-input>
            </div>
        </div>
        <div class="item">
            <span class="label">简介：</span>
            <div class="content">
                <el-input v-model="article.description" type="textarea"></el-input>
            </div>
        </div>
        <MdEditor v-model="article.content" @save="save" />
        <div class="operation">
            <el-button @click="submit">提交</el-button>
        </div>
    </div>
</template>

<script setup>
import MdEditor from 'md-editor-v3';
import { ElInput, ElButton } from 'element-plus'
import 'md-editor-v3/lib/style.css';
import { onMounted, reactive, defineProps } from 'vue';

const props = defineProps({
    id: {
        type: [String, Number],
        default: () => {
            return NaN
        }
    },
    editorHandle: {
        type: Function
    }
})

const article = reactive({
    id: props.id,
    title: '',
    poster:'',
    description: '',
    content: ''
})

//编辑器内容部保存
const save = (value) => {

}
//提交文章
const submit = () => {
    props.editorHandle(article)
}
// 修改文章  则需要请求文章内容然后初始化
const initArticle = () => {
    article.id = props.id

}
onMounted(() => {
    props.id ? initArticle() : '';
})
</script>
<style lang="scss" scoped>
.editor {
    text-align: start;
    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        .label {
            width: 120px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            font-weight: 900;
        }
        .content {
            flex: 1;
        }
    }
}
</style>
