<template>
    <div class="detail">
        <detail-swiper></detail-swiper>
        <div class="release-container">
            <div class="weui-flex">
                <div class="weui-flex__hd">
                    <div class="release-img">
                        <img src="/static/img/project.a872548.jpg">
                    </div>
                </div>
                <div class="weui-flex__item">
                    <div class="weui-flex">
                        <div class="weui-flex__item">
                            <div class="release-title tlie_1">工程项目标题</div>
                        </div>
                        <div class="weui-flex">
                            <span class="cl_b9">已截止</span>
                        </div>
                    </div>
                    <div class="weui-flex mt10">
                        <div class="weui-flex__item">
                            <span class="release-span">07-13 周五</span>
                        </div>
                        <div class="weui-flex__rt tc">
                            <span class="release-span">0km</span>
                        </div>
                        <div class="weui-flex__rt tr">
                            <span class="release-span" style="color:#ff8712">0/11</span>
                        </div>
                    </div>
                    <div class="weui-flex align-center mt10">
                        <div class="weui-flex__item">
                            <div class="release-address blue">
                                <i class="iconfont">&#xe602;</i>
                                <span class="tlie_1">广东省广州市白云区广园中路238号</span>
                            </div>
                        </div>
                        <div class="weui-flex__ft">
                            <div class="see-map">查看地图</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="weui-flex release-talk align-center">
                <div class="release-talk-icon"></div>
                <div class="release-talk-span">
                    <span>微聊互动</span>
                </div>
            </div>
            <div class="collection">
                <i class="iconfont">&#xe627;</i>
                <span>收藏</span>
            </div>
        </div>
        <detail-project v-if="componentType === 'project'"></detail-project>
        <detail-activity v-else-if="componentType === 'activity'"></detail-activity>
        <detail-master v-else-if="componentType === 'master'"></detail-master>
        <detail-relative v-else-if="componentType === 'relative'"></detail-relative>
        <detail-job v-else-if="componentType === 'job'"></detail-job>
        <detail-apply v-else-if="componentType === 'apply'"></detail-apply>
        <detail-other v-else-if="componentType === 'other'"></detail-other>
        <div class="tc pt10 pb10" v-else>没有此组件</div>
        <detail-bottom-navbar></detail-bottom-navbar>
    </div>
</template>

<script>
    import DetailSwiper from './components/Swiper'
    import DetailProject from './components/Project'
    import DetailActivity from './components/Activity'
    import DetailMaster from './components/Master'
    import DetailRelative from './components/Relative'
    import DetailJob from './components/Job'
    import DetailApply from './components/Apply'
    import DetailOther from './components/Other'
    import DetailBottomNavbar from './components/BottomNavbar'
    export default {
        name:"detail",
        data(){
            return {
                componentType:'',
                componentId:'',
            }
        },
        components:{
            DetailSwiper,//轮播图组件
            DetailProject,//工程项目内容组件
            DetailActivity,//联谊活动内容组件
            DetailMaster,//拜师傅内容组件
            DetailRelative,//找老乡内容组件
            DetailJob,//招聘电工内容组件
            DetailApply,//求职应聘内容组件
            DetailOther,//其他类型内容组件
            DetailBottomNavbar, //底部按钮
        },
        methods:{
            
        },
        mounted(){
            this.componentType = this.$route.params.type
            this.componentId = this.$route.params.id
        }
        
    }
</script>

<style lang="stylus" scoped>
    .release-container
        position:relative;
        margin:.2rem .3rem;
        background-color:white;
        padding:.2rem .3rem;
        border-radius:5px;
        -webkit-box-shadow: 0 0 3px #ddd;
        box-shadow: 0 0 3px #ddd;
    .release-img
        width: 1.3rem;
        height: 1.3rem;
        background-color:#f6f6f6;
        margin-right:10px;
        img
            width:100%;
            height:100%;
            display:block;

    .release-title
        font-size:.32rem;
        color:#333;

    .weui-flex__rt
        width:25%;

    .release-span
        position:relative;
        padding-left:15px;
        color:#7c7c7c;

    .release-span::before
        content:'';
        width: 5px;
        height: 5px;
        background:#dddddd;
        border-radius: 50%;
        position: absolute; 
        left: 0;
        top: 50%;
        -webkit-transform: translate(0,-50%);
        transform: translate(0,-50%);
    .release-address
        padding-right:0;
        color:#478ac1;
    .release-talk
        width:3.2rem;
        height:.6rem;
        justify-content:center;
        line-height .6rem;
        background-color:#ff8712;
        color:white;
        border-radius:5px;
        margin:.2rem auto 0;
    .release-talk-icon
        width:.46rem;
        height .46rem;
        background-image: url(../../assets/images/icon/guangbo.gif)
        background-size:cover;
        margin-top:-5px;
        margin-right:5px;
    .release-talk-span
        position:relative;
    .release-talk-span::after   
        content: " ";
        display: inline-block;
        height: 5px;
        width: 5px;
        border-width: 1px 1px 0 0;
        border-color: #ffffff;
        border-style: solid;
        -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: relative;
        top: -2px;
        position: absolute;
        top: 50%;
        margin-top: -3px;
        right: -15px;
    .see-map
        color:#478ac1;
    .collection
        position: absolute;
        right:5%;
        bottom:.2rem;
        height:.6rem;
        line-height:.6rem;
        color:#999;
        i 
            top:-1px;
            font-size:.36rem;
    .collection.active
        color:#ff8712;

</style>
