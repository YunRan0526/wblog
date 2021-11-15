import {
    createRouter,
    createWebHashHistory
} from "vue-router";
import $message from "/src/components/MessageBox/index.js";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [

    ]
});
const routes =
    [
        {
            path: '/',
            meta: {
                requireAuth: false
            },
            component: () => import('/src/views/Home.vue')
        },
        {
            path: '/AboutMe',
            meta: {
                requireAuth: true
            },
            component: () => import('/src/views/AboutMe.vue')
        },
        {
            path: '/Articles',
            meta: {
                requireAuth: false
            },
            component: () => import('/src/views/Articles.vue')
        },
        {
            path: '/Collections',
            meta: {
                requireAuth: false
            },
            component: () => import('/src/views/Collections.vue')
        },
        {
            path: '/Memories',
            meta: {
                requireAuth: true
            },
            component: () => import('/src/views/Memories.vue')
        }];
//根据权限 动态解析路由
routes.forEach(route => {
    router.addRoute(route)
})


//全局前置守卫 鉴权
router.beforeEach((to, from) => {
    if (to.meta.requireAuth) {
        $message.error('没有权限')
        return false
    }
});
export default router