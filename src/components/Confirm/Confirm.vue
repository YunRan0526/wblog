<template>
    <div class="yb-confirm-overlay" @click="layClick()">
        <transition name="yb-confirm-fade">
            <div class="yb-confirm" @click.stop="contentClick">
                <div class="yb-confirm-header">{{ title }}</div>
                <div class="yb-confirm-content">{{ content }}</div>
                <div class="yb-confirm-footer">
                    <yb-button type="danger" @click.stop="cancel()">取消</yb-button>
                    <yb-button type="success" @click.stop="confirm()">确定</yb-button>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import YbButton from "/src/components/Button/Button.vue"
export default defineComponent({
    props: {
        title: {
            type: String,
            default: () => {
                return "提示"
            }
        },
        content: {
            type: String,
            default: () => {
                return ""
            }
        }
    },
    emits: ["cancel", "confirm"],
    components: {
        YbButton
    },
    setup(props, { emit: emits }) {
        const cancel = () => {
            emits('cancel')
        }
        const confirm = () => {
            emits('confirm')
        }
        const layClick = () => {
            emits('cancel')
        }
        const contentClick = () => {

        }
        return {
            cancel,
            confirm,
            layClick,
            contentClick
        }
    },
})
</script>
