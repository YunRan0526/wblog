<template>
    <div class="DecorationBox">
        <div class="inner">
            <img :src="imgUrl" />
            <h4 class="title">{{ title }}</h4>
            <p class="description">{{ description }}</p>
            <div class="date">{{ date }}</div>
        </div>
    </div>
</template>
<script>
import { toRefs } from 'vue'
export default {
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
                return '/src/image/xx/yln.jpg'
            }
        }
    },
    setup(props, context) {
        let { title, description, date, imgUrl } = toRefs(props)
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
@media screen and (min-width: 761px) {
    .DecorationBox {
        width: 300px;
        margin: 40px;
        position: relative;
        border: dashed 1px #283c5f;
        padding: 8px;
        box-sizing: border-box;
        align-self: flex-start;
        transition: .3s;
        
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
            background-image: url("@/image/xx/bg.svg");
            background-size: 130px;
            padding-top: 10px;
            box-sizing: border-box;
            transition: all 0.4s ease 0s;
            cursor: pointer;
            &:hover {
                background-color: $theme-blue;
            }
            img {
                display: block;
                width: calc(100% - 20px);
                margin: 0 10px;
                border-radius: 5px;
            }
            .title {
                text-align: start;
                font-size: 20px;
                color: #283c5f;
                padding: 10px;
                box-sizing: border-box;
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
                    background-image: url("@/image/xx/dog.svg");
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
        transition: .3s;
        
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
            background-image: url("@/image/xx/bg.svg");
            background-size: 130px;
            padding-top: 10px;
            box-sizing: border-box;
            transition: all 0.4s ease 0s;
            cursor: pointer;
            &:hover {
                background-color: $theme-blue;
            }
            img {
                display: block;
                width: calc(100% - 20px);
                margin: 0 10px;
                border-radius: 5px;
            }
            .title {
                text-align: start;
                font-size: 20px;
                color: #283c5f;
                padding: 10px;
                box-sizing: border-box;
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
                    background-image: url("@/image/xx/dog.svg");
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