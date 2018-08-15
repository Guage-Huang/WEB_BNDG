<template>
    <div class="recommend">
        <div class="recommen-hd">
            <div class="weui-flex">
                <div class="weui-flex__item">
                    <div class="recommen-title">
                        <span>为您推荐泥瓦工</span>
                    </div>
                </div>
                <div class="weui-flex__ft">
                    <router-link to="/nearby/category" class="recommen-more">
                        更多 <i class="iconfont">&#xe638;</i>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="recommen-bd">
            <div class="recommen-wrapper weui-flex">
                <router-link to="/nearby/detail" class="recommen-item">
                    <div class="recommen-img">
                        <img src="https://wx.qlogo.cn/mmopen/vi_32/icS6lntkXSQrLTrFvcPyfeeftPFLcmh5QwDrsoYCAgs2hicmCSI6aoLBCW4bicWTSBcMiafZRhAib79lQFr8jZr9vNw/132" alt="" >
                    </div>
                    <div class="weui-flex recommen-info">
                        <div class="weui-flex__item">
                            <div class="recommen-name">彭师傅</div>
                        </div>
                        <div class="weui-flex__ft">
                            <div class="recommen-distance ml10">0m</div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/nearby/detail" class="recommen-item">
                    <div class="recommen-img">
                        <img src="https://wx.qlogo.cn/mmopen/vi_32/icS6lntkXSQrLTrFvcPyfeeftPFLcmh5QwDrsoYCAgs2hicmCSI6aoLBCW4bicWTSBcMiafZRhAib79lQFr8jZr9vNw/132" alt="" >
                    </div>
                    <div class="weui-flex recommen-info">
                        <div class="weui-flex__item">
                            <div class="recommen-name">彭师傅</div>
                        </div>
                        <div class="weui-flex__ft">
                            <div class="recommen-distance ml10">0m</div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/nearby/detail" class="recommen-item">
                    <div class="recommen-img">
                        <img src="https://wx.qlogo.cn/mmopen/vi_32/icS6lntkXSQrLTrFvcPyfeeftPFLcmh5QwDrsoYCAgs2hicmCSI6aoLBCW4bicWTSBcMiafZRhAib79lQFr8jZr9vNw/132" alt="" >
                    </div>
                    <div class="weui-flex recommen-info">
                        <div class="weui-flex__item">
                            <div class="recommen-name">彭师傅</div>
                        </div>
                        <div class="weui-flex__ft">
                            <div class="recommen-distance ml10">0m</div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/nearby/detail" class="recommen-item">
                    <div class="recommen-img">
                        <img src="https://wx.qlogo.cn/mmopen/vi_32/icS6lntkXSQrLTrFvcPyfeeftPFLcmh5QwDrsoYCAgs2hicmCSI6aoLBCW4bicWTSBcMiafZRhAib79lQFr8jZr9vNw/132" alt="" >
                    </div>
                    <div class="weui-flex recommen-info">
                        <div class="weui-flex__item">
                            <div class="recommen-name">彭师傅</div>
                        </div>
                        <div class="weui-flex__ft">
                            <div class="recommen-distance ml10">0m</div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/nearby/detail" class="recommen-item">
                    <div class="recommen-img">
                        <img src="https://wx.qlogo.cn/mmopen/vi_32/icS6lntkXSQrLTrFvcPyfeeftPFLcmh5QwDrsoYCAgs2hicmCSI6aoLBCW4bicWTSBcMiafZRhAib79lQFr8jZr9vNw/132" alt="" >
                    </div>
                    <div class="weui-flex recommen-info">
                        <div class="weui-flex__item">
                            <div class="recommen-name">彭师傅</div>
                        </div>
                        <div class="weui-flex__ft">
                            <div class="recommen-distance ml10">0m</div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/nearby/detail" class="recommen-item">
                    <div class="recommen-img">
                        <img src="https://wx.qlogo.cn/mmopen/vi_32/icS6lntkXSQrLTrFvcPyfeeftPFLcmh5QwDrsoYCAgs2hicmCSI6aoLBCW4bicWTSBcMiafZRhAib79lQFr8jZr9vNw/132" alt="" >
                    </div>
                    <div class="weui-flex recommen-info">
                        <div class="weui-flex__item">
                            <div class="recommen-name">彭师傅</div>
                        </div>
                        <div class="weui-flex__ft">
                            <div class="recommen-distance ml10">0m</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="stylus" scoped>
    .recommen-hd
        padding:0 .3rem;
        margin: .24rem 0 ;
        font-size: .3rem;
        text-align: center;
        .recommen-title
            span
                position: relative;
                &::before,
                &::after
                    content:'';
                    position: absolute;
                    top: 50%;
                    width: .16rem;
                    height: .16rem;
                    background-color: #ffcc00;
                    border-radius: 50%;
                    margin-top: -4px;
                &::before
                    left: -.3rem;
                &::after
                    right: -.3rem;
        .recommen-more
            font-size: .24rem;
            color:#999;
            i
                font-size: .24rem;

    .recommen-wrapper
        padding: 0 0 .3rem .32rem;
        background-color: white;
        flex-wrap: wrap;

    .recommen-item
        width: 28%;
        padding-top:.3rem;
        margin-right:5.333%;

    .recommen-img
        overflow: hidden;
        position: relative;
        height: calc(100%-19);
        background-color: #f6f6f6;
        border-radius: .1rem;
        img
            border-radius: .1rem;
    .recommen-info
        margin-top: .1rem;
        font-size: .24rem;
        color: #999;

</style>

