import {
    createRouter,
    createWebHashHistory
} from "vue-router";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('/src/views/Home.vue')
        },
        {
            path: '/AboutMe',
            component: () => import('/src/views/AboutMe.vue')
        },
        {
            path: '/Articles',
            component: () => import('/src/views/Articles.vue')
        },
        {
            path: '/Collections',
            component: () => import('/src/views/Collections.vue')
        },
        {
            path: '/Memories',
            component: () => import('/src/views/Memories.vue')
        },

    ]
});
export default router