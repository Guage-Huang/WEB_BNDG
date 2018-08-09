<template>
    <div class="user-message">
        <div class="user-items">
            <div class="user-item">
                <div class="weui-flex user-view">
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
                                <span class="f12 cl_b9 mr10">项目：3单</span>
                                <span class="f12 cl_b9 mr10">粉丝：10</span>
                                <span class="f12 cl_b9 mr10">活动：0次</span>
                            </div>
                            <div class="weui-flex mt5">
                                <div class="weui-flex__hd">
                                    <span class="f12 cl_b9">擅长项目：</span>
                                </div>
                                <div class="weui-flex__item">
                                    <div>
                                        <span class="f12 cl_b9 mr5">家庭用电</span>
                                        <span class="f12 cl_b9 mr5">装修行业</span>
                                    </div>
                                </div>
                                <div class="weui-flex__ft">
                                    <span class="more-project" @click="handleCellContentToggle">
                                        {{!toggle.basicInfoToggle || !toggle.industrySkillsToggle ?'全部展开':'全部合上'}}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="user-btns">
                    <div class="weui-flex">
                        <div class="btn apply-friends">
                            <span>+为好友</span>
                        </div>
                        <div class="btn apply-focus">
                            <span class="success">关注Ta</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .user-item
        position: relative;
        border-bottom: 1px solid #ededed;
        .user-view
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

    .more-project
        color:#1AAD19; 
        font-size: .24rem;


</style>


<script>
    export default {
        name:'userMessage',
        props:{
            toggle:Object
        },
        data(){
            return {
            }
        },
        methods:{
            handleCellContentToggle(){

                if(this.toggle.basicInfoToggle && this.toggle.industrySkillsToggle){
                    this.toggle.basicInfoToggle = false
                    this.toggle.industrySkillsToggle = false
                }else{
                   this.toggle.basicInfoToggle = true
                   this.toggle.industrySkillsToggle = true
                }

                this.$emit('change',{
                        basicInfoToggle:this.toggle.basicInfoToggle,
                        industrySkillsToggle:this.toggle.industrySkillsToggle
                    }
                );
            }
        }
    }
</script>