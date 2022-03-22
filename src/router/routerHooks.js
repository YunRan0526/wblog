import router from './createRouter.js'
import $message from "/src/components/MessageBox/index.js";
import $confirm from "/src/components/Confirm/index.js";
import { login } from '../api/module/ybw/user.js'
//全局前置守卫 鉴权
router.beforeEach(async (to, from, next) => {
    if (to.path == '/WorkSpace') {
        if (sessionStorage.getItem('yebaoc_password')) {
            await login({ account: '136518847@qq.com', password: sessionStorage.getItem('yebaoc_password') }).then(e => {
                if (e.success) {
                    $message.success('验证成功')
                    next()
                } else {
                    $message.error('验证失败')
                    next('/Home')
                }
            })
        } else {
            await $confirm().then(async res => {
                await login({ account: '136518847@qq.com', password: res }).then(e => {
                    if (e.success) {
                        $message.success('验证成功')
                        sessionStorage.setItem('yebaoc_password', res)
                        next()
                    } else {
                        $message.error('验证失败')
                        next('/Home')
                    }
                })
            })
        }


    } else if (to.meta.requireAuth) {
        $message.error('没有权限')
        return next(false)
    } else {
        next()
    }

});

export default router