<template>
    <div>
        <qrcode-vue :value="'http://www.yebaoc.com/#/'" :size="size" level="H" />
    </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'
export default {
    components:{
        QrcodeVue
    },
    data() {
        return {

        }
    },
    mounted() {
        
    }
}
</script>