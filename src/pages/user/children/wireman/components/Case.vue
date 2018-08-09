<template>
    <div class="case">
        <div class="case-container">
            <div class="weui-cells not-border-cells">
                <div class="weui-cell align-top">
                    <div class="weui-cell__hd">
                        <div class="case-img">
                            <img src="https://wx.qlogo.cn/mmopen/vi_32/K4bQEkXV5LFiaLU1AjCYMLOzOubNX9NHajjGI4rahMLm07Wk8QORK70mvMibUvFtEibFqohoV1EKIDfA09WNiaLl9A/132">
                        </div>
                    </div>
                    <div class="weui-cell__bd">
                        <div class="case-content">
                            <div class="case-title">拜低压电工师傅</div>
                            <div class="case-info cl_b9 mt5">项目地址：广东省广州市白云区广园中路238号区政府大院 </div>
                            <div class="case-info cl_b9 mt5">发布时间：2018-07-27 </div>
                            <div class="case-info cl_b9 mt5">案例介绍</div>
                            <div class="case-imgs mt5">
                                <div class="case-imgs-i">
                                    <img src="https://xcs.dgzj.gzmxdl.com/ngdg_develop/public/images/project/20180719/4c3a219f34c3959df0ae20e45f02e16a.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="weui-cell align-top">
                    <div class="weui-cell__hd">
                        <div class="case-img">
                            <img src="https://wx.qlogo.cn/mmopen/vi_32/K4bQEkXV5LFiaLU1AjCYMLOzOubNX9NHajjGI4rahMLm07Wk8QORK70mvMibUvFtEibFqohoV1EKIDfA09WNiaLl9A/132">
                        </div>
                    </div>
                    <div class="weui-cell__bd">
                        <div class="case-content">
                            <div class="case-title">拜低压电工师傅</div>
                            <div class="case-info cl_b9 mt5">项目地址：广东省广州市白云区广园中路238号区政府大院 </div>
                            <div class="case-info cl_b9 mt5">发布时间：2018-07-27 </div>
                            <div class="case-info cl_b9 mt5">案例介绍</div>
                            <div class="case-imgs mt5">
                                <div class="case-imgs-i">
                                    <img src="https://xcs.dgzj.gzmxdl.com/ngdg_develop/public/images/project/20180719/4c3a219f34c3959df0ae20e45f02e16a.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <common-prompt :info="promptData" v-show="false"></common-prompt>
        </div>
        <div class="bottom-absolute">
            <router-link to="/user/wireman/caseadd" class="introduce-add">
                <span>新增案例</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    import CommonPrompt from '../../../../../common/prompt/Prompt'
    export default {
        name:"ownerIntroduce",
        components:{
            CommonPrompt
        },
        data(){
            return {
                promptData:{
                    title:'暂时没有经典案例', //提示标题
                    desc:'',    //提示文本
                    src:require('@/assets/images/icon/prompt_case.png'), //提示小图标
                },
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .case-container
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        position:absolute;
        left:0;
        right:0;
        top:44px;
        bottom:45px;
    .introduce
        .weui-cell::before
            left:0;
    .introduce-add
        display:block;
        height:.9rem;
        line-height:.9rem;
        text-align:center;
        background-color:#ff8712;
        color:white;
        font-size:.36rem;
    .case .weui-cell::before
        left:1.4rem;
        border-top-style:dashed;
    .case-img
        overflow:hidden;
        width:.9rem;
        height:.9rem;
        border-radius:50%;
        background-color:#f6f6f6;
        margin-right:.2rem;
        img
            width:100%;
            height:100%;
            border-radius: 50%;
            display:block;
    .case-info
        font-size:.26rem;
    .case-imgs-i
        width:1.6rem;
        height:1.6rem;
        background-color:#f6f6f6;
        img
            width:100%;
            height:100%;
            display:block;

        
</style>
