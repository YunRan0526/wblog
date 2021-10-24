<template>
    <div class="DecorationBox">
        <div class="inner">
            <YBIMG  class="img" :src="imgUrl"/>
            <ElPopover placement="top" :width="180" trigger="hover" :content="title">
                <template #reference>
                    <div class="title">{{ title }}</div>
                </template>
            </ElPopover>
            <p class="description">{{ description }}</p>

            <div class="date">{{ date }}</div>
        </div>
    </div>
</template>
<script>
import { toRefs,ref,onMounted} from 'vue'
import { ElPopover, ElImage } from 'element-plus'
import YBIMG from '@/components/YBIMG.vue'
export default {
    components: {
        ElPopover,
        ElImage,
        YBIMG
    },
    props: {
        title: {
            type: String,
            default: () => {
                return "请输入标题"
            }
        },
        description: {
            type: String,
            default: () => {
                return "请输入描述"
            }
        },
        date: {
            type: String,
            default: () => {
                return "yyyy-mm-dd"
            }
        },
        imgUrl: {
            type: String,
            default: () => {
                return '/yln2.png'
            }
        }
    },
    setup(props, context) {
        let { title, description, date, imgUrl } = toRefs(props);

        return {
            title, description, date, imgUrl
        }
    },
};
</script>
<style lang="scss">
$theme-black: #283c5f;
$theme-white: #faf7d9;
$theme-green: #c3ce5f;
$theme-blue: #4aa9a4;
$theme-red: #c45c66;
.el-popper__arrow {
    display: none !important;
}
.el-popover {
    background: $theme-white !important;
    border-color: $theme-white !important;
    font-size: 17px !important;
}
@media screen and (min-width: 761px) {
    .DecorationBox {
        width: 300px;
        margin: 40px;
        position: relative;
        border: dashed 1px #283c5f;
        padding: 8px;
        box-sizing: border-box;
        align-self: flex-start;
        transition: 0.3s;

        &::before {
            content: "";
            display: block;
            position: absolute;
            width: 40px;
            height: 40px;
            top: -20px;
            left: -20px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url("@/image/page/star.svg");
        }
        &::after {
            content: "";
            display: block;
            position: absolute;
            width: 40px;
            height: 40px;
            bottom: -20px;
            right: -20px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url("@/image/page/moon.svg");
            transform: rotateY(180deg);
        }
        .inner {
            background-color: $theme-white;
            background-image: url("@/assets/xx/bg.svg");
            background-size: 130px;
            padding-top: 10px;
            box-sizing: border-box;
            transition: all 0.4s ease 0s;
            cursor: pointer;
            &:hover {
                background-color: $theme-blue;
            }
            .img {
                display: flex;
                justify-content: center;
                align-items: center;
                width: calc(100% - 20px);
                height: auto;
                aspect-ratio: 3/2;
                margin: 0 10px;
                overflow: hidden;
                .el-image__inner {
                    height: auto !important;
                }
            }
            .title {
                text-align: start;
                font-size: 20px;
                color: #283c5f;
                padding: 10px;
                box-sizing: border-box;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .description {
                text-align: start;
                font-size: 14px;
                font-weight: bold;
                color: #283c5f;
                width: 100%;
                height: 100px;
                padding: 0 20px;
                box-sizing: border-box;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .date {
                width: 100%;
                display: block;
                font-size: 14px;
                font-weight: bold;
                text-align: right;
                padding: 5px 30px;
                box-sizing: border-box;
                color: #283c5f;
                &::before {
                    content: "";
                    display: inline-block;
                    width: 18px;
                    height: 18px;
                    background-image: url("@/assets/xx/dog.svg");
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin-right: 10px;
                }
            }
        }
    }
}
@media screen and (max-width: 760px) {
    .DecorationBox {
        width: 85%;
        margin: 30px 0;
        position: relative;
        border: dashed 1px #283c5f;
        padding: 8px;
        box-sizing: border-box;
        align-self: flex-start;
        transition: 0.3s;

        &::before {
            content: "";
            display: block;
            position: absolute;
            width: 40px;
            height: 40px;
            top: -20px;
            left: -20px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url("@/image/page/star.svg");
        }
        &::after {
            content: "";
            display: block;
            position: absolute;
            width: 40px;
            height: 40px;
            bottom: -20px;
            right: -20px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url("@/image/page/moon.svg");
            transform: rotateY(180deg);
        }
        .inner {
            background-color: $theme-white;
            background-image: url("@/assets/xx/bg.svg");
            background-size: 130px;
            padding-top: 10px;
            box-sizing: border-box;
            transition: all 0.4s ease 0s;
            cursor: pointer;
            &:hover {
                background-color: $theme-blue;
            }
            .img {
                display: flex;
                justify-content: center;
                align-items: center;
                width: calc(100% - 20px);
                height: auto;
                aspect-ratio: 3/2;
                margin: 0 10px;
                overflow: hidden;
                .el-image__inner {
                    height: auto !important;
                }
            }
            .title {
                text-align: start;
                font-size: 20px;
                color: #283c5f;
                padding: 10px;
                box-sizing: border-box;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .description {
                text-align: start;
                font-size: 14px;
                font-weight: bold;
                color: #283c5f;
                width: 100%;
                height: 100px;
                padding: 0 20px;
                box-sizing: border-box;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .date {
                width: 100%;
                display: block;
                font-size: 14px;
                font-weight: bold;
                text-align: right;
                padding: 5px 30px;
                box-sizing: border-box;
                color: #283c5f;
                &::before {
                    content: "";
                    display: inline-block;
                    width: 18px;
                    height: 18px;
                    background-image: url("@/assets/xx/dog.svg");
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin-right: 10px;
                }
            }
        }
    }
}
</style>