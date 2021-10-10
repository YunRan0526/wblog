<template>
    <PageDecoration @close="close">
        <h1>Collections</h1>
    </PageDecoration>
</template>
<script>
import { defineComponent } from "vue"
import PageDecoration from "@/components/PageDecoration.vue"
import { useRouter } from 'vue-router'
export default defineComponent({
    components: {
        PageDecoration
    },
    name: "Collections",
    setup() {
        const router = useRouter();
        const close = () => {
            router.push({ path: "/" })
        }
        return {
            close,
            router
        }
    }
})
</script>
<style lang="scss" scoped>
$theme-black: #283c5f;
$theme-white: #faf7d9;
$theme-green: #c3ce5f;
$theme-blue: #4aa9a4;
$theme-red: #c45c66;
@media screen and (min-width: 761px) {
}
@media screen and (max-width: 760px) {
}
</style>