<template>
    <div class="info">
        <div class="info-img">
            <img src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLLthla0ciaf2BkF8iaWoHbYh0ickBBywBXkwhIZZZMmichmbGmmDRsoBiaY0FjgRrXFJ55tfqDtFW27zQ/132" alt="">
        </div>
        <div class="info-company">
            <b class="fb f15">业主 <span class='f12 ml10'>待审核</span></b>
        </div>
        <div class="info-message mt10">
            <span>浏览：100</span>
            <span>粉丝：10</span>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .info
        min-height:auto;
        padding:15px 15px 10px;
        background-color:#ff8712;
        box-sizing: border-box;
        color:white;
        text-align: center;
    .info-img
        overflow:hidden;
        width:1.4rem;
        height:1.4rem;
        background-color:#f6f6f6;
        border-radius:50%;
        margin:0 auto .2rem;
        img 
            width:100%;
            height:100%;
            border-radius:50%;
    .info-message
        font-size:.26rem;
        span
            margin:0 5px;
    .info-company
        font-size:.3rem;
        line-height:.36rem;
        b
            position:relative;
    .info-company
        span
            position:absolute;
            right:-.9rem;







</style>


<script>
    export default {
        name:"userInfo"
    }
</script>
