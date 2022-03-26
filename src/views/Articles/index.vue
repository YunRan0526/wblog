<template>
    <PageDecoration @close="close">
        <div style="width:100%;display: flex;justify-content: center;">
            <div class="page_title">我的文章</div>
        </div>
        <div style="width:100%;display: flex;justify-content: center;">
            <div class="page_project">
                <span class="project_text">My Articles</span>
            </div>
        </div>
        <div style="width:100%;display: flex;justify-content: center;">
            <div class="flower_border_bottom section_title">
                <h1>@YBW</h1>
            </div>
        </div>
        <div class="content">
            <DecorationBox
                @contextmenu="showContextMenu($event, v)"
                style="z-index:30"
                v-for="v in articles"
                :key="v.id"
                :title="v.title"
                :description="v.description"
                :date="v.create_time"
                :imgUrl="getSrc('/src/assets/yln.jpg')"
                @click="getDeatil(v)"
            />
        </div>
    </PageDecoration>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import PageDecoration from "@/components/PageDecoration.vue"
import DecorationBox from "@/components/DecorationBox.vue"
import { useRouter } from 'vue-router'
import { getAllArticle } from '../../api/module/ybw/article';
import $contextMenu from '/src/components/ContextMenu/index.js'
import { clear } from '/src/components/ContextMenu/index.js'
const router = useRouter();
let articles = ref(0);
const getDeatil = (v) => {
    let { content } = v
    router.push({ path: '/MarkDownViewer', query: { content } })
}
const getSrc = (path) => {
    if (process.env.NODE_ENV === 'development') {
        return path
    }
    const modules = import.meta.globEager("/src/assets/*.*");
    return modules[path].default;
}
const close = () => {
    router.push({ path: "/" })
}
const showContextMenu = (e, v) => {
    e.preventDefault();
    $contextMenu(e.x, e.y)
}
const removeContextMenu = () => {
    clear()
}
onBeforeUnmount(() => {
    removeContextMenu()
    document.body.removeEventListener('click', removeContextMenu)
})
onMounted(() => {
    document.body.addEventListener('click', removeContextMenu)
    getAllArticle().then(res => {
        if (res.success) {
            articles.value = res.results
        }
    })
})
</script>
<style lang="scss" scoped>
$theme-black: #283c5f;
$theme-white: #faf7d9;
$theme-green: #c3ce5f;
$theme-blue: #4aa9a4;
$theme-red: #c45c66;
@keyframes page__show-title {
    from {
        transform: translateX(-5%);
        opacity: 0;
    }
    to {
        transform: translateX(0%);
        opacity: 1;
    }
}
@keyframes page__show-project {
    from {
        transform: translateX(5%);
        opacity: 0;
    }
    to {
        transform: translateX(0%);
        opacity: 1;
    }
}
@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@keyframes page__show-section-title {
    from {
        transform: translateY(30%);
        opacity: 0;
    }
    to {
        transform: translateY(0%);
        opacity: 1;
    }
}

.content {
    opacity: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 15px;
    flex-wrap: wrap;
    animation: fadein 1s ease 0.7s forwards;
    :deep(.md2vue-wrapper) {
        width: 100% !important;
        margin: 0 20px;
    }
}
.page_title {
    opacity: 0;
    transition: 0.3s;
    animation: page__show-title 1s ease 0.4s forwards;
}
.section_title {
    transform: translateY(30%);
    opacity: 0;
    animation: page__show-section-title 1s ease 0.6s forwards;
}
.page_project {
    opacity: 0;
    transition: 0.3s;
    white-space: nowrap;
    animation: page__show-project 1s ease 0.5s forwards;
}
@media screen and (min-width: 761px) {
    .section_title {
        width: 550px;
        padding: 5px 0;
        font-size: 16px;
        margin-top: 140px;
        transition: 0.3s;
    }
    .page_title {
        width: 450px;
        height: 65px;
        margin-top: 50px;
        font-size: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        color: white;
        border: solid 3px #283c5f;
        transform: translateX(-5%);

        &::before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 450px;
            height: 65px;
            box-sizing: border-box;
            background-color: #283c5f;
            opacity: 0.5;
            transform: translate(8px, -8px);
            z-index: 31;
        }
        &::after {
            content: "我的文章";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            z-index: 32;
        }
    }
    .page_project {
        width: 450px;
        height: 15px;
        margin-top: 5px;
        position: relative;
        &::before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            width: 100%;
            height: 1px;
            top: calc(50% - 0.5px);
            background-color: #283c5f;
        }
        .project_text {
            padding: 0 10px;
            background-color: #fff;
            font-size: 20px;
            font-weight: 700;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
@media screen and (max-width: 760px) {
    .section_title {
        width: 85%;
        padding: 5px 0;
        font-size: 12px;
        margin-top: 50px;
        transition: 0.3s;
    }
    .page_title {
        width: 70%;
        height: 40px;
        margin-top: 80px;
        margin-top: 50px;
        font-size: 21px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        align-items: center;
        position: relative;
        color: white;
        border: solid 3px #283c5f;
        transition: 0.3s;
        &::before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: calc(100% + 6px);
            height: 40px;
            box-sizing: border-box;
            background-color: #283c5f;
            opacity: 0.5;
            transform: translate(4px, -9px);
            z-index: 31;
        }
        &::after {
            content: "我的收藏";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            z-index: 32;
        }
    }
    .page_project {
        width: 70%;
        height: 10px;
        margin-top: 8px;
        position: relative;
        &::before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            width: 100%;
            height: 1px;
            top: calc(50% - 0.5px);
            background-color: #283c5f;
        }
        .project_text {
            padding: 0 10px;
            font-size: 16px;
            font-weight: 700;
            background-color: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
</style>