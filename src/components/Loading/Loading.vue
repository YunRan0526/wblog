<template>
    <div class="windmill-loading">
        <WindMill
            v-for="mill in WindMillQueue"
            :scale="mill.scale"
            :x="mill.x"
            :y="mill.y"
            :key="mill.key"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import WindMill from './WindMill.vue'

const WindMillQueue = ref([
    {
        key: `mill1`,
        scale: 1,
        speed: 1,
        x: 225,
        y: 225
    }
])
</script>

<style lang='scss' scoped>
.windmill-loading {
    width: 100%;
    height: 100vh;
}
</style>