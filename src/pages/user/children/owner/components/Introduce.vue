<template>
    <div class="introduce">
        <div class="introduce-container">
            <div class="weui-cells not-border-cells">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <div class="fb">一、企业简介</div>
                    </div>
                    <div class="weui-cell__bd"></div>
                    <div class="weui-cell__ft">
                        <router-link to="/user/owner/introduceedit" class="introduce-edit-btn">修改</router-link>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <div class="">
                            <span class="cl_b9">广州速码网络技术有限公司</span>
                        </div>
                        <common-prompt :info="promptData" v-show="false"></common-prompt>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <div class="fb">二、企业展示</div>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <ul class="show-list">
                            <li>
                                <div class="show-img">
                                    <img src="https://xcs.dgzj.gzmxdl.com/ngdg_develop/public/images/yzreg/20180728/f2fbf60926353c1cf921f0d1a53ba728.png" alt="">
                                </div>
                                <div class="show-name">
                                    <span>企业形象</span>
                                </div>
                                <div class="show-info">
                                    <div class="weui-flex align-center">
                                        <div class="weui-flex__item">
                                            <div class="weui-info-date">上传时间：2018-07-28 15:00</div>
                                        </div>
                                        <div class="weui-flex__ft">
                                            <div class="weui-info-btns weui-flex">
                                                <div class="mr10"><i class="iconfont" style="top:2px;">&#xe61d;</i> <span>浏览：0</span></div>
                                                <div><i class="iconfont">&#xe61a;</i> <span>删除</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <common-prompt :info="promptDataShow" v-show="false"></common-prompt>
                    </div>
                </div>
            </div>
        </div>



        <div class="bottom-absolute">
            <router-link to="/user/owner/introduceadd" class="introduce-add">
                <span>企业展示新增</span>
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
                //无内容提示框数据
                promptData:{
                    title:'暂时没有企业简介', //提示标题
                    desc:'',    //提示文本
                    src:require('@/assets/images/icon/prompt_case.png'), //提示小图标
                },
                promptDataShow:{
                    title:'暂时没有企业展示', //提示标题
                    desc:'',    //提示文本
                    src:require('@/assets/images/icon/prompt_case.png'), //提示小图标
                },
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .prompt
        position:relative;
        width:auto;
        height:auto;
    .introduce
        .introduce-container
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            position:absolute;
            left:0;
            right:0;
            top:44px;
            bottom:45px;
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

    .introduce-edit-btn
        color:#4c91ca;
        padding:1px 5px;
        border:1px solid #478ac1;
        border-radius: 3px;
    .show-img
        position:relative;
        height:5rem;
        background-color:#ffffff;
        img
            position:absolute;
            left:50%;
            top:50%;
            -webkit-transform:translate(-50%,-50%);
            transform:translate(-50%,-50%);
            max-width:100%;
            max-height:100%;
            display:block;
    .show-name
        margin-top:5px;
    .show-info
        font-size:.24rem;
        color:#999;
</style>
