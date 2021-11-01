<template>
    <transition name="yb-message-fade" @after-leave="$emit('destroy')" @before-leave="onClose">
        <div class="yb-message-error yb-message" v-show="visible" :style="customStyle">
            <img
                :src="getSrc('/src/assets/MessageBox/error.svg')"
                class="yb-icon-error"
                v-if="type === 'error'"
            />
            <div class="yb-message-content">{{ message }}</div>
            <CircleCloseButton class="yb-mesage-close" @click.stop="close" v-if="showClose" :smallSize="'50px'" :normalSize="'60px'"/>
        </div>
    </transition>
</template>
<script>
import { defineComponent, reactive, onMounted, computed, ref, onBeforeUnmount } from 'vue'
import CircleCloseButton from "/src/components/CircleCloseButton.vue"
export default defineComponent({
    name: "MessageBox",
     components:{
       CircleCloseButton
    },
    props: {
        id: {
            type: String
        },
        type: {
            type: String
        },
        offset: {
            type: Number
        },
        delay: {
            type: Number
        },
        message: {
            type: String
        },
        zIndex: {
            type: Number,
            default: () => {
                return 1
            }
        },
        onDestroy: {
            type: Function
        },
        onClose: {
            type: Function
        },
        showClose: {
            type: Boolean,
            default: () => {
                return true
            }
        }
    },
    emits: {
        destroy: () => true,
    },
    setup(props, ctx) {
        let { type, offset, delay, message, onDestroy } = reactive(props);
        const customStyle = computed(() => ({
            top: `${props.offset}px`,
            zIndex: props.zIndex,
        }))
        let visible = ref(true);
        let timer = ref(null)
        const close = () => {
            visible.value = false;
        }
        const getSrc = (path) => {
            if (process.env.NODE_ENV === 'development') {
                return path
            }
            const modules = import.meta.globEager("/src/assets/MessageBox/*.*");
            return modules[path].default;
        };
        onMounted(() => {
            timer.value = setTimeout(() => {
                close()
            }, delay);
        })
        return {
            getSrc,
            visible,
            close,
            type,
            offset,
            delay,
            message,
            customStyle,
            onDestroy,
            timer
        }
    },
})
</script>
