<template>
    <div class="attention">
        <div class="navbar">
            <div class="top-absolute">
                <div class="weui-flex">
                    <div class="weui-flex__item" :class="[module == 'attention' ? 'active' : '']" @click="handleAttentionContentSwiper('attention')">
                        <span>我的关注(5)</span>
                    </div>
                    <div class="weui-flex__item" :class="[module == 'collection' ? 'active' : '']" @click="handleAttentionContentSwiper('collection')">
                        <span>我的收藏(7)</span>
                    </div>
                </div>
            </div>
            <div class="stance"></div>
        </div>
        <div v-if="module == 'attention'">
            <scroller lock-x height="-43" ref="scroller" >
                <div>
                    <attention-master></attention-master>
                </div>
            </scroller>
        </div>
        <div v-if="module == 'collection'">
            <scroller lock-x height="-43" ref="scroller" >
                <div>
                    <attention-list></attention-list>
                </div>
            </scroller>
        </div>

        <common-prompt :info="promptData" v-show="false"></common-prompt>
    </div>
</template>

<script>
    import CommonPrompt from '../../../../common/prompt/Prompt'
    import AttentionList from './components/List'
    import AttentionMaster from './components/Master'
    import { Scroller } from 'vux'
    export default {
        name:"userAttention",
        components:{
            CommonPrompt, //无内容提示组件
            AttentionList,
            AttentionMaster,
            Scroller
        },
        data(){
            return {
                //无内容提示框数据
                promptData:{
                    title:'暂时没有我的关注', //提示标题
                    desc:'',    //提示文本
                    src:require('@/assets/images/icon/prompt_case.png'), //提示小图标
                },
                module:'attention',
            }
        },
        methods:{
            handleAttentionContentSwiper(module){
                if(this.module == module) return;
                this.module = module
                if(module == "attention"){
                    this.promptData.title = "暂时没有我的关注"
                }else{
                    this.promptData.title = "暂时没有我的收藏"
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .navbar
        .weui-flex
            background-color:#ff8712;
            color:white;

        .weui-flex__item
            padding:10px;
            text-align:center;
            span
                display:inline-block;
                vertical-align:middle;
                padding:.1rem .3rem;
                border-radius:.5rem;
                color:white;
        .weui-flex__item.active
                span 
                    background-color:white;
                    color:#ff8712;
    .stance
        overflow: hidden;
        height: 0;
        padding-top: .86rem;

</style>