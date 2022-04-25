import {
    createRouter,
    createWebHashHistory
} from "vue-router";


// import { defineAsyncComponent } from 'vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [

    ]
});

// // 获取views文件夹下 所有文件夹下 的所有.vue文件
// const modules = import.meta.glob('/src/views/**/*.vue');
// const originKeys = Object.keys(modules).filter(path => path.includes('index.vue'))
// const AuthRoute = ['/AboutMe', '/Memories']
// let userRoutes = originKeys.map(path => {
//     let reg = /(?<=views\/).*(?=\/)/g
//     path = path.match(reg)[0]
//     // let componentPath = '/src/views/' + path + '/index.vue'
//     // const modules = import.meta.globEager("/src/views/*/*.vue")
//     return {
//         path: '/' + path,
//         meta: {
//             requireAuth: AuthRoute.includes(path)
//         },
// component: () => import(`../views/dy-${path}/index.vue`)
//     }
// })
// console.log('约定路由', userRoutes)
const routes =
    [
        {
            path: '/',
            meta: {
                requireAuth: false
            },
            redirect: "/Home"
        },
        {
            path: '/AboutMe',
            component: () => import('/src/views/AboutMe/index.vue'),
            meta: {
                requireAuth: false
            }
        },
        {
            path: '/Articles',
            component: () => import('/src/views/Articles/index.vue'),
            meta: {
                requireAuth: false
            }
        },
        {
            path: '/WorkSpace',
            component: () => import('/src/views/WorkSpace/index.vue'),
            meta: {
                requireAuth: false
            }
        },
        {
            path: '/Collections',
            component: () => import('/src/views/Collections/index.vue'),
            meta: {
                requireAuth: false
            }
        },
        {
            path: '/Home',
            component: () => import('/src/views/Home/index.vue'),
            meta: {
                requireAuth: false
            }
        },
        {
            path: '/Login',
            component: () => import('/src/views/Login/index.vue'),
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/MarkDownEditor',
            component: () => import('/src/views/MarkDownEditor/index.vue'),
            meta: {
                requireAuth: false
            }
        }, {
            path: '/MarkDownViewer',
            component: () => import('/src/views/MarkDownViewer/index.vue'),
            meta: {
                requireAuth: false
            }
        },
        {
            path: '/Test',
            component: () => import('/src/views/Test/index.vue'),
            meta: {
                requireAuth: false
            }
        }
    ];

console.log('组装后的路由', routes)
//根据权限 动态解析路由
routes.forEach(route => {
    router.addRoute(route)
})



export default router