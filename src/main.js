import { createApp } from 'vue'
import App from './App.vue'
import router from "/src/router/index"
import store from "/src/vuex/index"
import './index.css'
import 'element-plus/dist/index.css';
import '@/assets/font.css'
import $message from "/src/components/MessageBox/index.js"
import "/src/components/MessageBox/index.scss"
const app = createApp(App);
app.config.globalProperties.$message =$message
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)
app.use(store)
app.mount('#app')

