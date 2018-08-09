<template>
    <div class="comment">
        <scroller lock-x scrollbarY height="100%" ref="scroller" >
            <div>
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
                                <div class="weui-flex align-center comment-star star-items">
                                    <div class="label cl_b9">服务态度：</div>
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
                                    <div class="label ml10 cl_b9">5分</div>
                                </div>
                                <div class="weui-flex align-center comment-star star-items">
                                    <div class="label cl_b9">描述相符：</div>
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
                                    <div class="label ml10 cl_b9">5分</div>
                                </div>
                                <div class="case-info cl_b9 mt5">测试评价 </div>
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
        </scroller>
    </div>
</template>

<script>

    import CommonPrompt from '../../../common/prompt/Prompt'
    import { Scroller } from 'vux'
    export default {
        name:"nearbyDetailComment",
        components:{
            CommonPrompt, //无内容提示组件
            Scroller,
        },
        data(){
            return {
                //无内容提示框数据
                promptData:{
                    title:'暂时没有业主评论', //提示标题
                    desc:'',    //提示文本
                    src:require('@/assets/images/icon/prompt_case.png'), //提示小图标
                },
            }
        }
    }
</script>

<style lang="stylus" scoped>
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
    .star-items .star-item
        color:#ccc;
    .star-items .star-item.active
        color: #f90;


</style>