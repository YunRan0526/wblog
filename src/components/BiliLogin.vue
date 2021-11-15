<template>
    <div class="login">
        <div class="codeContainer">
            <qrcode-vue
                :value="loginUrl"
                v-if="showCode"
                class="qrcode"
                :margin="5"
                :level="'H'"
                :size="300"
            ></qrcode-vue>
            <div class="btnContainer">
                <button @click="getQRCode" class="btn">刷新二维码</button>
                <button @click="confirmLogin" class="btn">我已扫码成功</button>
                <button @click="getUser">获取用户信息</button>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { getLoginUrl, getLoginInfo,getUserInfo } from '/src/api/module/bilibili.js'
import QrcodeVue from 'qrcode.vue'
import $message from '/src/components/MessageBox/index.js';
export default defineComponent({
    components: {
        QrcodeVue
    },
    setup() {
        let showCode = ref(false);
        let myoauthKey = ref('');
        let loginUrl = ref('');
        const getQRCode = () => {
            getLoginUrl().then(res => {
                let { oauthKey, url } = res.data.data;
                loginUrl.value = url;
                myoauthKey.value = oauthKey;
            })
        }
        const confirmLogin = () => {
            getLoginInfo({
                oauthKey:myoauthKey.value,
                gourl:'https://www.bilibili.com/'
            }).then(res => {
                if (res?.data && !res?.data.status) {
                    switch (res.data.data) {
                        case -1:
                            $message.error('秘钥错误')
                            break;
                        case -2:
                            $message.error('秘钥超时')
                            break;
                        case -4:
                            $message.error('未扫描')
                            break;
                        case -5:
                            $message.error('未确认')
                            break;
                    }
                }
            })
        }
        const getUser=()=>{
            getUserInfo().then(res=>{
                console.log("用户信息：",res.data);
            })
        }
        onMounted(() => {
            getLoginUrl().then(res => {
                console.log(res.data.data);
                let { oauthKey, url } = res.data.data;
                loginUrl.value = url;
                myoauthKey.value = oauthKey;
                showCode.value = true;
            })
        })

        return {
            getQRCode,
            loginUrl,
            showCode,
            confirmLogin,getUser
        }
    }
})
</script>
<style scoped lang="scss">
.login {
    width: 100%;
    height: 100vh;
    background-color: #fcfcf3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .codeContainer {
        width: calc(100% - 48px);
        height: calc(100% - 48px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .btnContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        .btn {
            margin: 0 10px;
        }
    }
}
</style>
