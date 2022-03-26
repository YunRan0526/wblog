<template>
    <MarkDownEditor :id="articleId" :editorHandle="editorHandle" />
</template>

<script setup>
import MarkDownEditor from '/src/components/MarkDownEditor.vue';
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { addArticle } from '../../api/module/ybw/article';
import $message from "/src/components/MessageBox/index.js";
const router = useRouter()
const route = useRoute()
const articleId = ref(NaN)
//回到工作台
const close = () => {
    router.push({ path: '/WorkSpace' })
}

const editorHandle = computed(() => {
    let fn = (v) => {
        addArticle(v).then(res => {
            if (res.success) {
                $message.success('新增成功')
            }
        })

    }
    if (route.query.id) {
        fn = (v) => { console.log('编辑文章', v) }
    }
    return fn
})

</script>
<style lang="less">
</style>