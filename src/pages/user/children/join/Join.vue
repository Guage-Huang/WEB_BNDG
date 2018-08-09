<template>
    <div class="join">
        <div class="navbar">
            <div class="top-absolute">
                <div class="weui-flex">
                    <div class="weui-flex__item" :class="[module == 'join' ? 'active' : '']" @click="handleJoinContentSwiper('join')">
                        <span>参与的活动</span>
                    </div>
                    <div class="weui-flex__item" :class="[module == 'release' ? 'active' : '']" @click="handleJoinContentSwiper('release')">
                        <span>发布的活动</span>
                    </div>
                </div>
            </div>
            <div class="stance"></div>
        </div>
        <scroller lock-x height="-43" ref="scroller" >
            <div>
                <join-list></join-list>
                <common-prompt :info="promptData" v-show="false"></common-prompt>
            </div>
        </scroller>
    </div>
</template>

<script>
    import CommonPrompt from '../../../../common/prompt/Prompt'
    import JoinList from './components/List'
    import { Scroller } from 'vux'
    export default {
        name:"userJoin",
        components:{
            Scroller,
            CommonPrompt, //无内容提示组件
            JoinList,
        },
        data(){
            return {
                //无内容提示框数据
                promptData:{
                    title:'暂时没有参与的活动', //提示标题
                    desc:'',    //提示文本
                    src:require('@/assets/images/icon/prompt_case.png'), //提示小图标
                },
                module:'join',
            }
        },
        methods:{
            handleJoinContentSwiper(module){
                this.module = module
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