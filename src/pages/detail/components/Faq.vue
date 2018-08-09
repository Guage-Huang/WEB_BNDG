<template>
    <div class="faq">
        <div class="detail-title">
            <span>{{chineNum}}、常见问题</span>
        </div>
        <div class="weui-cells not-border detail-cells__pl">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <div class="problem-wrapper">
                        <div class="problem-slide">
                            <div class="weui-flex problem-title">
                                <div class="weui-flex__icon">
                                    <i class="iconfont red">&#xe7a1;</i>
                                </div>
                                <div class="weui-flex__item">
                                    <div>对发布信息的条数有限制吗？</div>
                                </div>
                            </div>
                            <div class="weui-flex problem-answer">
                                <div class="weui-flex__icon">
                                    <i class="iconfont blue">&#xe65a;</i>
                                </div>
                                <div class="weui-flex__item">
                                    <div class="cl_b9">有的，平台只能同时发布在最大截止日期内的两条信息。</div>
                                </div>
                            </div>
                        </div>
                        <div class="problem-slide">
                            <div class="weui-flex problem-title">
                                <div class="weui-flex__icon">
                                    <i class="iconfont red">&#xe7a1;</i>
                                </div>
                                <div class="weui-flex__item">
                                    <div>我注册的是业主，可以发布那些内容？</div>
                                </div>
                            </div>
                            <div class="weui-flex problem-answer">
                                <div class="weui-flex__icon">
                                    <i class="iconfont blue">&#xe65a;</i>
                                </div>
                                <div class="weui-flex__item">
                                    <div class="cl_b9">如果主为业主用户，可以发布工程项目、联谊聚会、和招聘电工，其他类弄的信息。</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="weui-cells-primary" style="padding:.2rem 5% 0;">
                        <div class="weui-btn weui-btn_primary" style="line-height:.8rem;">
                            <i class="iconfont f24">&#xe61c;</i>
                            <span>联系客服</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="generalize">
            <img src="https://xcs.dgzj.gzmxdl.com/ngdg_develop/public/images/banner/20180731/d98b5ee75b372ba096e9409fa9d6db0e.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name:"faq",
        props:{
            chineNum:String,
        }
    }
</script>

<style lang="stylus" scoped>
    .detail-title
        padding:0 15px;
        margin:10px 0;
        color:#ff8915;
        font-size:.3rem;
    .detail-cells__pl
        padding-top:10px;
        .weui-cell
            padding-top:0;
            padding-bottom:0;
            padding-left:40px; 
            margin-bottom:.2rem;
        .weui-cell::before
            left:40px;

    .generalize
            margin-top:10px;
    .problem-slide
        margin-bottom:10px;
        i  
            top:-1px;
            font-size:.4rem;
            margin-right:10px;
        .weui-flex__icon
            width:.58rem;
            height:.58rem;
        .problem-title
            line-height:.58rem
        .problem-answer
            .weui-flex__item
                padding-top:.06rem;



</style>
