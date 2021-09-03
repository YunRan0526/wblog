import {
    createRouter,
    createWebHashHistory
} from "vue-router";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            component: () => import('/src/views/Home.vue')
        }
    ]
});
export default router