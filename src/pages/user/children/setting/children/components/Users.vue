<template>
    <div class="users" ref="wrapper">
        <div class="weui-cells not-border-cells">
            <div class="weui-cell" v-for="(item) in 20" :key="item">
                <div class="weui-cell__hd">
                    <img class="user-img" src="https://wx.qlogo.cn/mmopen/vi_32/I5gMnG2jiaibzia7EuOMI9U8kjNS5rjyDpNlHXS1bkOUyqtgMcLicI1sibjmic9N7n4FxOmlhtbm2U3mWm3R3JYKGibsA/132" alt="">
                </div>
                <div class="weui-cell__bd">
                    <div>彭柳林</div>
                </div>
                <div class="weui-cell__ft">
                    <x-switch title="" ></x-switch>
                </div>
            </div>
        </div>
        <common-prompt :info="promptData" v-show="false"></common-prompt>
    </div>
</template>

<script>
    import CommonPrompt from '../../../../../../common/prompt/Prompt'
    import Bscroll from 'better-scroll'
    import { XSwitch } from 'vux'
    export default {
        name:"users",
        components:{
            CommonPrompt,
            Bscroll,
            XSwitch
        },
        data(){
            return {
                //无内容提示框数据
                promptData:{
                    title:'暂时还没有用户', //提示标题
                    desc:'',    //提示文本
                    src:require('@/assets/images/icon/prompt_case.png'), //提示小图标
                },
            }
        },
        mounted () {
            this.scroll = new Bscroll(this.$refs.wrapper,{
                probeType: 3,
                click:true,
            })
             // 监听Y轴偏移的值
            this.scroll.on('scroll', (pos) => {
                
            })
        },
    }
</script>

<style lang="stylus" scoped>
    .users
        position:absolute;
        top:49px;
        left:0;
        right:0
        bottom:0;
        // height:calc(100% - 49px);
        overflow: hidden;
    .user-img
        width: .8rem;
        height: .8rem;
        background-color: #f6f6f6;
        margin-right: .2rem
        
    .weui-cell 
        .vux-x-switch 
            &.weui-cell
                padding: 0;

    .users>>>.weui-switch
        &:checked
            border-color: #ff8712 !important;
            background-color: #ff8712 !important;


</style>
