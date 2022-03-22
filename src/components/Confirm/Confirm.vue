<template>
    <div class="yb-confirm-overlay" @click="layClick()">
        <transition name="yb-confirm-fade">
            <div class="yb-confirm" @click.stop="contentClick" v-show="visible">
                <div class="yb-confirm-header">

                </div>
                <div class="yb-confirm-content">
                    <div style="box-sizing:border-box;:100%;padding:0 20px;display:flex;align-items:center">
                        <label style="font-size: 20px;font-weight: 900;margin-right: 15px;">Password:</label><ElInput v-model="password" @keydown.enter="confirm()"></ElInput>
                    </div>
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
import { defineComponent, onMounted ,ref,onUnmounted} from 'vue'
import YbButton from "/src/components/Button/Button.vue"
import { ElInput } from 'element-plus'
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
        YbButton,
        ElInput
    },
    setup(props, { emit: emits }) {
        let visible=ref(false)
        let password = ref('')
        const cancel = () => {
            emits('cancel')
        }
        const confirm = () => {
            emits('confirm',password.value)
        }
        const layClick = () => {
            emits('cancel')
        }
        const contentClick = () => {

        }
        onMounted(()=>{
            visible.value=true;
        })
        onUnmounted(()=>{
            
        })
        return {
            cancel,
            confirm,
            layClick,
            contentClick,
            visible,
            password
        }
    },
})
</script>
