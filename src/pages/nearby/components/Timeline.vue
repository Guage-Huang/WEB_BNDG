<template>
    <div class="timeline">
        <div class="stance"></div>
        <div class="bottom-absolute">
            <div class="timeline-con weui-flex align-center">
                <div class="timeline-icon"></div>
                <div class="weui-flex__bd ml5">
                    <div class="timeline-text tlie_1 white"> 正在进行的活动48个，平台在线电工5人 </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .stance
        overflow: hidden;
        position: relative;
        height:0;
        padding-bottom:.8rem;
    .bottom-absolute
        bottom:0;
    
    .timeline-con
        height:.8rem;
        background-color:#ff8712;
        color:white;
        padding:0 10px;
        box-sizing:border-box;
        justify-content:center;

    .timeline-icon
        width:.46rem;
        height .46rem;
        background-image: url(../../../assets/images/icon/guangbo.gif)
        background-size:cover;
        margin-top:-5px;
        margin-right:5px;

</style>

<script>
    export default {
        name:'timeline'
    }
</script>

