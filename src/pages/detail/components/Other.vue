<template>
    <div class="apply">
        <div class="detail-title">
            <span>一、基本信息</span>
        </div>
        <div class="weui-cells not-border detail-cells__pl">
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="font-size:.54rem; top:-.06rem; left:-.07rem; color:#1271ff">&#xe616;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">活动名称：</label>
                </div>
                <div class="weui-cell__bd">
                    <div>周六聚餐</div>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#1acac8">&#xe612;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">活动时间：</label>
                </div>
                <div class="weui-cell__bd">
                    <div>2018-08-01 12:12</div>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#00c633">&#xe677;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">活动地点：</label>
                </div>
                <div class="weui-cell__bd">
                    <div>广州白云区嘉大城2楼</div>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#fbc00e">&#xe8c3;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">邀请人数：</label>
                </div>
                <div class="weui-cell__bd">
                    <div>10人</div>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#1acac8">&#xe612;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">发布时间：</label>
                </div>
                <div class="weui-cell__bd">
                    <div>2018-07-25 10:00</div>
                </div>
            </div>
            <div class="weui-cell weui-cell__select">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#1acac8">&#xe612;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">截止时间：</label>
                </div>
                <div class="weui-cell__bd">
                    <div>2018-07-12 12:30</div>
                </div>
            </div>
        </div>
        <div class="detail-title">
            <span>二、自我介绍</span>
        </div>
        <div class="weui-cells not-border detail-cells__pl">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <div>测试自我介绍说明</div>
                </div>
            </div>
        </div>
        <div class="detail-title">
            <span>三、报名人数：0<span class="cl_b3"> / 5</span></span>
        </div>
        <div class="weui-cells not-border detail-cells__pl">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <div>发布者</div>
                    <div class="weui-flex mt10 align-center">
                        <div class="weui-flex__hd">
                            <router-link to="" class="publisher-img">
                                <img src="https://wx.qlogo.cn/mmopen/vi_32/K4bQEkXV5LFiaLU1AjCYMLOzOubNX9NHajjGI4rahMLm07Wk8QORK70mvMibUvFtEibFqohoV1EKIDfA09WNiaLl9A/132">
                            </router-link>
                        </div>
                        <div class="weui-flex__item">
                            <div class="cl_b9 f12">单位用户</div>
                            <div class="cl_b9 f12 mt5">彭先生</div>
                        </div>
                    </div>
                    <div class="mt10">参与人员</div>
                    <div class="mt10 actor weui-flex">
                        <div class="actor-user">
                            <img src="https://wx.qlogo.cn/mmopen/vi_32/oGPLicuQtyhkkhdI7Za41oC28ecdqaWcG8c6cibx9WJvchBbgia0saBNricnfnbob3CnyzAHVfjeev3oytNib74to1w/132">
                            <div class="f12 cl_b9 mt5">李先生</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <detail-message-prompt></detail-message-prompt>
        <div class="detail-title">
            <span>四、留言( 2 )</span>
        </div>
        <div class="weui-cells not-border-cells leave-message">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <input class="leave-message-input" placeholder="添加留言">
                </div>
            </div>
            <div class="weui-cell align-top">
                <div class="weui-cell__hd">
                    <div class="leave-message-img">
                        <img src="https://wx.qlogo.cn/mmopen/vi_32/K4bQEkXV5LFiaLU1AjCYMLOzOubNX9NHajjGI4rahMLm07Wk8QORK70mvMibUvFtEibFqohoV1EKIDfA09WNiaLl9A/132">
                    </div>
                </div>
                <div class="weui-cell__bd">
                    <div class="leave-message-content">
                        <div class="weui-flex align-center">
                            <div class="weui-flex__item">
                                <div class="leave-message-title">拜低压电工师傅</div>
                            </div>
                        </div>
                        <div class="leave-message-info cl_b9 mt5">案例介绍</div>
                        <div class="leave-message-info cl_b9 mt5">2018-07-29 12:30</div>
                    </div>
                </div>
            </div>
        </div>
        <detail-faq chineNum='五'></detail-faq>
    </div>
</template>

<script>
    import DetailMessagePrompt from './MessagePrompt'
    import DetailFaq from './Faq'
    export default {
        name:"apply",
        components: {
            DetailMessagePrompt,//'温馨提示组件',
            DetailFaq,//常见问题组件
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

    .leave-message
        .weui-cell
            padding-left:40px;
    .publisher-img
        width:.8rem;
        height:.8rem;
        border-radius:50%;
        margin-right:.2rem;
        background-color:#f6f6f6;
        display:block;
        border-radius: 50%;
        img
            border-radius: 50%;
    .actor
        flex-wrap:wrap;
        .actor-user
            text-align:center;
            margin-right:10px;
            img
                width:.7rem;
                height:.7rem;
                border-radius:50%;
                margin:auto;

    .leave-message .weui-cell::before
        left:1.9rem;
        border-top-style:dashed;
    .leave-message-img
        overflow:hidden;
        width:.9rem;
        height:.9rem;
        border-radius:50%;
        background-color:#f6f6f6;
        margin-right:.2rem;
        img
            width:100%;
            height:100%;
            border-radius: 50%;
            display:block;
    .leave-message-info
        font-size:.26rem;
    .leave-message-imgs-i
        width:1.2rem;
        height:1.2rem;
        background-color:#f6f6f6;
        img
            width:100%;
            height:100%;
            display:block;
    .leave-message-btn
        height:.5rem;
        line-height:.5rem;
        color:#999;
        margin-left:10px;
        font-size:.26rem;
        i 
            top:2px;
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
    // .problem-slide:last-child
    //     margin-bottom:0;

        .generalize
            margin-top:10px;
    
    .leave-message-input
        display:block; 
        width:100%;
        height:.7rem;
        line-height:.7rem;
        border-radius:5px;
        padding:0 .2rem;
        color:#333;
        background-color:#f6f6f6;
        box-sizing:border-box;
        border:1px solid #ededed;
        
        
</style>
