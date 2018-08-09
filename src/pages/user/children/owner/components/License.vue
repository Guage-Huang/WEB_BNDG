<template>
    <div class="license">
        <div class="license-container">
            <common-prompt :info="promptData" v-show="false"></common-prompt>
            <div class="weui-cells not-border-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <ul class="show-list">
                            <li>
                                <div class="show-img" style="background-image:url(https://xcs.dgzj.gzmxdl.com/ngdg_develop/public/images/yzreg/20180728/f2fbf60926353c1cf921f0d1a53ba728.png)">
                                    <div class="success examine" v-show="true">
                                        <i class="iconfont green">&#xe607;</i>
                                    </div>
                                    <div class="error examine" v-show="false">
                                        <i class="iconfont red">&#xe608;</i>
                                    </div>
                                </div>
                                <div class="show-name">
                                    <span> 统一社会信用代码：12356456456asds </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-absolute">
            <router-link to="/user/owner/licenseadd" class="license-add">
                <span>证照新增</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    import CommonPrompt from '../../../../../common/prompt/Prompt'
    export default {
        name:"ownerLicense",
        components:{
            CommonPrompt
        },
        data(){
            return {
                //无内容提示框数据
                promptData:{
                    title:'暂时没有上传证照', //提示标题
                    desc:'',    //提示文本
                    src:require('@/assets/images/icon/prompt_case.png'), //提示小图标
                },

            }
        },
    }
</script>

<style lang="stylus" scoped>
    .license
        .license-container
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            position:absolute;
            left:0;
            right:0;
            top:44px;
            bottom:45px;
    .license-add
        display:block;
        height:.9rem;
        line-height:.9rem;
        text-align:center;
        background-color:#ff8712;
        color:white;
        font-size:.36rem;
    .show-img
        position:relative;
        height:5rem;
        background-color:#ffffff;
        background-size:auto 100%;
        background-position :center;
        background-repeat: no-repeat;
    .show-name
        margin-top:5px;
    .show-info
        font-size:.24rem;
        color:#999;
    .examine
        position:absolute;
        right:0;
        bottom:15%;
        z-index:99;
        i 
            font-size:1.6rem;

</style>
