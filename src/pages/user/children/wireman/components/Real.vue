<template>
    <div class="real">
        <div class="real-container">
            <div class="weui-cells not-border-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <div class="lh20">
                            <i class="iconfont red f20" style="top:2px;">&#xe62f;</i>
                            <span> 为保障活动体验及安全性，请您先进行实名认证。 </span>
                        </div>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="mr10 weui-label">真实姓名：</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入真实姓名">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <label class="mr10 weui-label">身份证号码：</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入身份证号码">
                    </div>
                </div>
            </div>
            <div class="choose-deal">
                <div class="checkbox">
                    <i class="iconfont">&#xe635;</i>
                </div>
                <div class="test"> 我同意并遵守 <router-link to="/clause" class="blue">《邦尼电工法律条款》</router-link></div>
            </div>
        </div>
        <div class="bottom-absolute">
            <div class="bottom-form-btn">
                <div class="weui-btn weui-btn_primary">认证</div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name:"ownerReal"
    }
</script>

<style lang="stylus" scoped>
    .real
        .real-container
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
    .weui-cells-primary
        background-color:initial;
    .weui-label
        width:1.7rem !important;
    .choose-deal
        text-align:center;
        margin-top:15px;
        padding:0 15px;
        .checkbox
            display:inline-block;
            vertical-align:middle;
            width:.32rem;
            height:.32rem;
            text-align:center;
            line-height .32rem;
            border:1px solid #ededed;
            border-radius:2px;
            background-color:white;
            margin-right:5px;
            i 
                font-size:.24rem;
                color:#ff8712;
        .test
            display:inline-block;
            vertical-align:middle;
            color:#999;
</style>
