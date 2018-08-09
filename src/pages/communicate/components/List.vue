<template>
    <div class="list" ref="wrapper">
        <div>
            <ul v-show="Object.keys(cities).length > 0">
                <li v-for="(group,key) in cities" 
                class="list-group" 
                :key="key" 
                :ref="key">
                    <h2 class="list-group-title">{{ key }}</h2>
                    <ul>
                        <li v-for="item in group"  class="list-group-item weui-flex align-center" :key="item.id" @click="handleNavigator">
                            <div class="weui-flex__img">
                                <img :src="item.img" class="avatar">
                            </div>
                            <div class="weui-flex__item">
                                <span class="name">{{ item.name }}</span>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
            <common-prompt :info="promptData" v-show="Object.keys(cities).length <= 0"></common-prompt>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import CommonPrompt from '../../../common/prompt/Prompt'
    export default {
        name:"List",
        props: {
            cities: Object,
            letter: String
        },
        components:{
            CommonPrompt, //无内容提示组件
        },
        data(){
            return {
                //无内容提示框数据
                promptData:{
                    title:'暂时没有我的朋友', //提示标题
                    desc:'',    //提示文本
                    src:require('@/assets/images/icon/prompt_case.png'), //提示小图标
                },
                scrollY: null,
                currentIndex: null,
            }
        },
        methods: {
           _calculateHeight () {
                this.listHeight = []
                const list = Object.values(this.$refs)
                let height = 0
                this.listHeight.push(height)
                for (let i = 0; i < list.length - 1; i++) {
                    let item = list[i][0]
                    height += item.clientHeight
                    this.listHeight.push(height)
                }
            },
            handleNavigator(){
                this.$router.push({ path:`/communicate/detail`})
            },

        },
        mounted () {
            this._calculateHeight()
            this.scroll = new Bscroll(this.$refs.wrapper,{
                probeType: 3,
                click:true,
            })
             // 监听Y轴偏移的值
            this.scroll.on('scroll', (pos) => {
                this.scrollY = pos.y
            })

        },
        watch: {
            letter () {
                if (this.letter) {
                    const element = this.$refs[this.letter][0]
                    this.scroll.scrollToElement(element)
                }
            },
            scrollY (newVal) {
                // 向下滑动的时候 newVal 是一个负数，所以当 newVal > 0 时，currentIndex 直接为 0
                if (newVal > 0) {
                    this.currentIndex = 0
                    return
                }
                // 计算 currentIndex 的值
                for (let i = 0; i < this.listHeight.length - 1; i++) {
                    let height1 = this.listHeight[i]
                    let height2 = this.listHeight[i + 1]
                    if (-newVal >= height1 && -newVal < height2) {
                        this.currentIndex = i
                        this.$emit('change',this.currentIndex)
                        return
                    }
                }

                // 当超 -newVal > 最后一个高度的时候
                // 因为 this.listHeight 有头尾，所以需要 - 2
                this.currentIndex = this.listHeight.length - 2
            }

        },
    }
</script>

<style lang="stylus" scoped>
    .list
        position:absolute;
        top:93px;
        left:0;
        right:0
        bottom:0;
        // height:calc(100% - 143px);
        overflow: hidden;
    .list-group-title
        padding:.2rem .3rem;
    .list-group-item
        position:relative;
        padding:.2rem .3rem;
        background-color:white;
        &:before
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            height: 1px;
            border-top: 1px solid #e5e5e5;
            color: #e5e5e5;
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
            left: 15px;
            z-index: 2;
    .list-group-item:first-child
        &:before
            border:none;
    .avatar
        width:.8rem;
        height:.8rem;
        display:block;
        margin-right:.2rem;
</style>
