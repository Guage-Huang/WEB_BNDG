<template>
    <div class="bottom-navbar">
        <div class="stance"></div>
        <div class="bottom-fixed">
            <div class="applay-wrapper">
                <div class="weui-flex">
                    <div class="weui-flex__item">
                        <div>立即参加</div>
                    </div>
                    <router-link to="/" class="weui-flex__btn">
                        <i class="iconfont">&#xe643;</i>
                        <span>首页</span>
                    </router-link>
                    <div class="weui-flex__btn">
                        <i class="iconfont">&#xe6fa;</i>
                        <span>分享</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"bottomNavbar"
    }
</script>

<style lang="stylus" scoped>
    .stance
        overflow: hidden;
        position: relative;
        height: 0;
        padding-bottom: 1.2rem;
    .applay-wrapper
        padding:.1rem 0;
        height:.7rem;
        line-height:.7rem;
        text-align: center;
        background-color:#ff8712;
        font-size:.32rem;
        color:white;
        .weui-flex__btn
            width:25%;
            border-left:1px solid #fff;
            color:white;
</style>
