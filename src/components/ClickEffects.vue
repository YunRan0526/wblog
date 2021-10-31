<template>
    <div>
        <section>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </section>
    </div>
</template>
<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    setup() {
        const colorList = reactive(["#283c5f", "#faf7d9", "#c3ce5f", "#4aa9a4", "#c45c66"]);
        const borderColor = colorList[Math.floor(Math.random() * (colorList.length - 1) * 1.1)];

        return {
        
            borderColor,
        }
    },
})
</script>
<style lang="scss" scoped>
.ClickEffects {
    section {
        div {
            &::after {
                border-top: solid 17px;
                border-top-color: v-bind(borderColor);
            }
        }
    }
}
</style>
