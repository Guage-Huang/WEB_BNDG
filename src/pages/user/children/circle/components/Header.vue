<template>
    <div class="circle-height">
        <div class="circle-info">
            <div class="circle-info__bd"></div>
            <div class="circle-upload_icon" @click="handlePopupOpen">
                <i class="iconfont">&#xe614;</i>
            </div>
            <div class="circle-info__position">
                <div class="circle-info__name">彭柳林</div>
                <div class="circle-info__img">
                    <img src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLLthla0ciaf2BkF8iaWoHbYh0ickBBywBXkwhIZZZMmichmbGmmDRsoBiaYuSPRYNWRMkOQF9WiaMqeL9g/132" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
        name:"circleHeight",
        components:{
        },
        methods:{
            handlePopupOpen(){
                this.$emit('change',true)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .circle-info
        position:relative;

    .circle-info__bd
        width:100%;
        height:3rem;
        background-color:#ff8712;
        background-repeat:no-repeat;
        background-position:center;
        background-size:cover;
    .circle-upload_icon 
        position:absolute;
        right:.3rem;
        top:.4rem;
        width:.8rem;
        height:.8rem;
        text-align:center;
        line-height:.8rem;
        i 
            font-size:.48rem;
            color:white;
    .circle-info__position
        position:absolute;
        right:.6rem;
        bottom:-.8rem;
        height:1.8rem;
        display:flex;

    .circle-info__name
        color:white;
        font-size:.32rem;
        margin-right:.4rem;
        text-shadow:0px 0px 2px #999;
        line-height:1rem;

    .circle-info__img
        width:1.6rem;
        height:1.6rem;
        background-color:white;
        padding:2px;
        box-sizing:border-box;
        img 
            width:100%;
            height:100%;
            display:block;


</style>
