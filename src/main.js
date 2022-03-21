import { createApp } from 'vue'
import App from './App.vue'
import router from "/src/router/index"
import { createPinia } from 'pinia'


import './index.css'
import 'element-plus/dist/index.css';
//$message全局提示
import $message from "/src/components/MessageBox/index.js"
import "/src/components/MessageBox/index.scss"
//$confirm 
import $confirm from "/src/components/Confirm/index.js"
import "/src/components/Confirm/index.scss"
//
import "/src/components/Button/index.scss"
const app = createApp(App);
// 注册自定义指令
import directives from '/src/directive/index.js'
directives.forEach(directive => {
    app.directive(directive.name, directive)
});
app.provide('$message', $message)
app.provide('$confirm', $confirm)
app.config.globalProperties.$message = $message
app.config.globalProperties.$confirm = $confirm
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)
app.use(createPinia())
app.mount('#app')

