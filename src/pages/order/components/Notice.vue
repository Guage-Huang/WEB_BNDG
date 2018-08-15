<template>
    <div class="notice">
        <div class="notice-con">
            <div class="weui-flex">
                <div class="weui-flex__hd">
                    <div class="notice-icon"></div>
                </div>
                <div class="weui-flex__item">
                    <div class="notice-text">
                        <swiper :options="swiperOption">
                            <swiper-slide>
                                <div class="tlie_1">chu已成功参加"彭柳林"的求职招聘</div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="tlie_1">chu已成功参加测一下其他的活动</div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="tlie_1">null已成功参加一个好的项目项目</div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
                <div class="weui-flex__ft">
                    <div class="notice-close" @click="handleNoticeClose">
                        <i class="iconfont">&#xe66c;</i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .notice
        margin: 10px;
        .notice-con
            overflow: hidden;
            height:30px;
            //line-height: 30px;
            border-radius: 5px;
            background-color:#ff8712
            color:#fff;
            .notice-icon,
            .notice-close
                width:30px;
                height:30px;
            .notice-icon
                background-image: url('../../../assets/images/icon/guangbo.gif');
                background-size: 70%;
                background-position: 10px 3px;
                background-repeat : no-repeat;
            .notice-close
                text-align: center;
                line-height: 30px;
            .notice-text
                
                line-height: 30px;
                padding-left:10px;
                font-size: .24rem;



</style>


<script>
    export default {
        name:'notice',
        data(){
            return {
                swiperOption:{
                    direction : 'vertical',
                    height: 30,
                    loop:true,
                    autoplay: {
                        delay: 5000,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    },
                },
                noticeToggle:false,
            }
        },
        methods:{
            handleNoticeClose(){
                this.noticeToggle = false;
                this.$emit('change',this.noticeToggle)
            }
        }
    }
</script>
