<template>
    <div class="yb-confirm-overlay" @click="layClick()">
        <transition name="yb-confirm-fade">
            <div class="yb-confirm" @click.stop="contentClick" v-show="visible">
                <div class="yb-confirm-header">

                </div>
                <div class="yb-confirm-content">
                    {{ content }}
                </div>
                <div class="yb-confirm-footer">
                    <div class="cancel-box" @click.stop="cancel()">
                        <div class="button cancel-button">
                            <div class="cross">
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="success-box" @click.stop="confirm()">
                        <div class="button success-button">
                            <div class="check">
                                <div class="line"></div>
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import { defineComponent, onMounted ,ref} from 'vue'
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
        let visible=ref(false)
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
        onMounted(()=>{
            visible.value=true
        })
        return {
            cancel,
            confirm,
            layClick,
            contentClick,
            visible
        }
    },
})
</script>
