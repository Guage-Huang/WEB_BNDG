<template>
    <div class="items">
        <div class="user-items" v-show="true">
            <div class="user-item" v-for="(item) in 10" :key="item">
                <router-link to="/nearby/detail" class="weui-flex" >
                    <div class="weui-flex__hd">
                        <div class="user-img">
                            <img src="https://wx.qlogo.cn/mmopen/vi_32/oGPLicuQtyhkkhdI7Za41oC28ecdqaWcG8c6cibx9WJvchBbgia0saBNricnfnbob3CnyzAHVfjeev3oytNib74to1w/132" alt="">
                        </div>
                    </div>
                    <div class="weui-flex__item">
                        <div class="user-con">
                            <div class="weui-flex align-center">
                                <div class="weui-flex__item">
                                    <div class="user-name">
                                        李师傅
                                        <span class="cl_b9 f12">电工</span>
                                        <span class="label ml10">实名</span>
                                    </div>
                                </div>
                            </div>
                            <div class="weui-flex align-center mt5">
                                <div class="weui-flex__hd">
                                    <span class="label">19岁</span>
                                </div>
                                <div class="weui-flex__bd">
                                    <div class="star-items weui-flex">
                                        <div class="star-item active">
                                            <i class="iconfont">&#xe627;</i>
                                        </div>
                                        <div class="star-item active">
                                            <i class="iconfont">&#xe627;</i>
                                        </div>
                                        <div class="star-item active">
                                            <i class="iconfont">&#xe627;</i>
                                        </div>
                                        <div class="star-item active">
                                            <i class="iconfont">&#xe627;</i>
                                        </div>
                                        <div class="star-item active">
                                            <i class="iconfont">&#xe627;</i>
                                        </div>
                                    </div>
                                </div>
                                <div class="weui-flex__text">
                                    <span class="star-text">5星</span>
                                </div>
                                <div class="weui-flex__item">
                                    <div class="tr">
                                        <span class="cl_b9 f12">160m</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt5">
                                <span class="f12 cl_b9 mr10">现居：广州市白云</span>
                                <span class="f12 cl_b9 mr10">项目：3单</span>
                                <span class="f12 cl_b9 mr10">活动：0次</span>
                            </div>
                        </div>
                    </div>
                </router-link>
                <div class="user-btns">
                    <div class="weui-flex">
                        <div class="btn apply-friends">
                            <span>+邀请</span>
                        </div>
                        <div class="btn apply-focus">
                            <span class="success">关注Ta</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <common-prompt :info="promptData" v-show="false"></common-prompt>
    </div>
</template>


<script>
     import CommonPrompt from '../../../common/prompt/Prompt'
    export default {
        name:'items',
        components:{
            CommonPrompt, //无内容提示组件
        },
        data(){
            return {
                //无内容提示框数据
                promptData:{
                    title:'暂时没有找到附近的师傅', //提示标题
                    desc:'',    //提示文本
                    src:require('@/assets/images/icon/prompt_case.png'), //提示小图标
                },
            }
        }
    }
</script>


<style lang="stylus" scoped>

    .user-items{
        padding-bottom: 20px;
    }
    .user-item
        position: relative;
        border-bottom: 1px solid #ededed;
        a
            padding:.2rem .3rem;
            background-color:white;

    .user-item:last-child
        border-bottom: none;

    .user-img
        overflow: hidden;
        width:1.2rem;
        height:1.2rem;
        border-radius:50%;
        margin-right:.2rem;
        background-color:#dddddd;

        img 
            width:100%;
            height 100%;
            border-radius:50%;

    .user-name
        font-size:.3rem;
        color:#333;
        padding-right:2.4rem;

    span.label
        display:inline-block;
        vertical-align middle; 
        font-size:12px;
        border:1px solid #ededed; 
        padding:2px 3px;
        color:#999;

    .star-items
        margin-left:10px;

    .star-items .star-item
        color:#cccccc;
        margin-top:-3px;

    .star-items .star-item.active
        color:rgb(255, 153, 0);

    .star-text
        color:#999;
        font-size: .24rem;
        margin-left:.2rem;
    .user-btns
        position:absolute;
        top:9px;
        right:15px;
        
        .btn
            padding:3px 5px;
            margin-left:5px;
            border:1px solid #ddd;
            color:#999;
            border-radius:3px;
            font-size:.24rem;

    .apply-friends span 
        color:#29b414;

    .apply-focus span.success
        color:#f90;
    .apply-focus span.error
        color:#999;

</style>