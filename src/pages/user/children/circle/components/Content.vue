<template>
    <div class="circles-content">
        <!--show-comment__box-->
        <ul class="circle-list" :class="{'show-comment__box' : commentToggle}" v-show="true">
            <li class="circle-item" v-for="(item,index) in 2" :key="item">
                <div class="weui-cells not-border">
                    <div class="weui-cell align-top">
                        <div class="weui-cell__hd">
                            <router-link to="" class="circle-item__img">
                                <img src="https://wx.qlogo.cn/mmopen/vi_32/oGPLicuQtyhkkhdI7Za41oC28ecdqaWcG8c6cibx9WJvchBbgia0saBNricnfnbob3CnyzAHVfjeev3oytNib74to1w/132" alt="" >
                            </router-link>
                        </div>
                        <div class="weui-cell__bd">
                            <div class="circle-item__name">李英闯</div>
                            <div class="circle-item__desc">666666666666</div>
                            <div class="circle-atlas weui-flex mt5">
                                <div class="circle-atlas__item" :style="{backgroundImage:'url(https://xcs.dgzj.gzmxdl.com/ngdg_develop/public/images/comment/20180724/2466453bae3f2f6bdcbbeb6ac786157b.png)'}"  @click="handlePreviewImage(0)"></div>
                                <div class="circle-atlas__item" :style="{backgroundImage:'url(https://xcs.dgzj.gzmxdl.com/ngdg_develop/public/images/circle/20180723/0c626bddc68fab295a5ae45d5e13dc6c.jpg)'}"  @click="handlePreviewImage(1)"></div>
                                <div class="circle-atlas__item" :style="{backgroundImage:'url(https://xcs.dgzj.gzmxdl.com/ngdg_develop/public/images/circle/20180718/ca40827a8e6d8117fac69209353958b0.jpg)'}"  @click="handlePreviewImage(2)"></div>
                            </div>
                            <div class="circle-share mt10">
                                <div class="weui-flex align-center">
                                    <div class="weui-flex__hd">
                                        <div class="circle-share__img">
                                            <img src="https://xcs.dgzj.gzmxdl.com/ngdg_develop/public/images/title/project.jpg" alt="">
                                        </div>
                                    </div>
                                    <div class="weui-flex__bd">
                                        <div class="circle-share__title tlie_1">项目类型：其他类型</div>
                                        <div class="cl_b9 tlie_1 f12 mt5">活动名称：cxeshih</div>
                                        <div class="cl_b9 tlie_1 f12 mt5">发布时间：2018-07-18 11:12:00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="circle-matter weui-flex align-center mt10">
                                <div class="circle-time weui-flex__item"><span>9天前</span></div>
                                <div class="circle-operation">
                                    <div class="circle-operation__icon" @click="handleOperationShow(index)">
                                        <i class="iconfont">&#xe652;</i>
                                    </div>
                                    <div class="circle-operation__btns" :class="[operationIndex === index ? 'slideShow' : 'slideHide']">
                                        <div class="weui-flex align-center">
                                            <div class="weui-flex__item">
                                                <div>
                                                    <i class="iconfont" style="top:1px;">&#xe603;</i>
                                                    <span>赞</span>
                                                </div>
                                            </div>
                                            <div class="weui-flex__item" @click="handleCommentShow(index)">
                                                <div>
                                                    <i class="iconfont" style="top:1px;">&#xe65c;</i>
                                                    <span>评论</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="circle-wrapper mt10">
                                <div class="circle-fabulous weui-flex">
                                    <div>
                                        <i class="iconfont" style="top:1px;">&#xe603;</i>
                                        <span>李英闯</span>
                                    </div>
                                </div>
                                <div class="circle-comment">
                                    <div class="circle-comment__item">
                                        <div class="weui-flex">
                                            <div class="weui-flex__hd">
                                                <div class="name">李英闯<span>：</span></div>
                                            </div>
                                            <div class="weui-flex__bd">
                                                <div class="text">不错哦</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="circle-comment__item">
                                        <div class="weui-flex">
                                            <div class="weui-flex__hd">
                                                <div class="name">李英闯<span>回复</span>彭柳林<span>：</span></div>
                                            </div>
                                            <div class="weui-flex__bd">
                                                <div class="text">嗯嗯呃</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <common-prompt :info="promptData" v-show="false"></common-prompt>
        <div class="circle-mask" v-show="commentMask" @click="handleOperationHide"></div>
        <div v-transfer-dom>
            <div class="bottom-fixed" v-show="commentToggle">
                <div class="circle-comment__box">
                    <div class="weui-flex">
                        <div class="weui-flex__item">
                            <input id="circleCommentInput" class="weui-input" type="text" placeholder="请输入评论" v-model="commentInput">
                        </div>
                        <div class="weui-flex__ft">
                            <div class="circle-comment__btn">发送</div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-transfer-dom>
            <previewer :list="urls" ref="previewer" :options="options"></previewer>
        </div>

    </div>
</template>

<script>
    import CommonPrompt from '../../../../../common/prompt/Prompt'
    import { Previewer,TransferDom  } from 'vux'

    export default {
        name:"circlesContent",
        directives: {
            TransferDom
        },
        components:{
            CommonPrompt,
            Previewer
        },
        data(){
            return {
                promptData:{
                    title:'暂时没有电工圈内容', //提示标题
                    desc:'',    //提示文本
                    src:require('@/assets/images/icon/prompt_case.png'), //提示小图标
                },

                operationIndex:null,//监听某个点赞评论触发按钮
                commentMask:false,//遮罩层是否显示
                commentToggle:false, //评论框是否显示
                commentInput:'', //评论框的input内容

                //预览的图片
                urls:[],
                options:{

                },
            }
        },
        methods:{
            //处理图片预览
            handlePreviewImage(index){
                this.urls = [
                    {
                        src:'https://xcs.dgzj.gzmxdl.com/ngdg_develop/public/images/comment/20180724/2466453bae3f2f6bdcbbeb6ac786157b.png',
                    },
                    {
                        src:'https://xcs.dgzj.gzmxdl.com/ngdg_develop/public/images/circle/20180723/0c626bddc68fab295a5ae45d5e13dc6c.jpg',
                    },
                    {
                        src:'https://xcs.dgzj.gzmxdl.com/ngdg_develop/public/images/circle/20180718/ca40827a8e6d8117fac69209353958b0.jpg',
                    }
                ]
                this.$nextTick(()=>{
                    this.$refs.previewer.show(index)
                })
            },
            //处理点赞评论按钮显示
            handleOperationShow(index){
                if(this.operationIndex === index) return
                this.operationIndex = index
                this.commentMask = true
            },
            //处理点赞评论按钮隐藏
            handleOperationHide(){
                this.operationIndex = null
                this.commentMask = false
                this.commentToggle = false
                this.commentInput = ''
            },
            //处理评论输入框显示
            handleCommentShow(index){
                this.operationIndex = null
                this.commentMask = true
                this.commentToggle = true
                this.$nextTick(()=>{
                    document.getElementById('circleCommentInput').focus()
                })
            }
        },
        mounted(){
            
        }
    }
</script>

<style lang="stylus" scoped>
    
    .prompt
        position:relative !important;
        height:auto !important;
        padding:20px;
        box-sizing:border-box;

    .circle-height~.circles-content
        padding-top:1rem;
        background-color:white;

    .circle-list.show-comment__box
        padding-bottom:55px;
    .circle-item
        border-bottom: 1px solid #e8e8e8;
    .circle-item:last-child
        border-bottom: none;
    .circle-item__img
        width: .9rem;
        height: .9rem;
        display:block;
        margin-right:.2rem;
    .circle-item__name
        font-size:.32rem;
        font-weight:bold;
        color:#4e639b;
    .circle-item__desc
        margin-top:.1rem;
        font-size:.28rem;
        white-space:normal; 
        word-break:break-all;
    .circle-atlas
        flex-wrap:wrap;
        .circle-atlas__item
            width:1.86rem;
            height:1.86rem;
            margin-right:.1rem;
            margin-top:.1rem;
            background-color:#f6f6f6;
            background-size:cover;
            background-position:center;
        .circle-atlas__item:nth-child(3n)
            margin-right:0;
    .circle-time
        font-size:.24rem;
        color:#999;
        line-height: .46rem;

    .circle-operation
        position:relative;
        margin-left:10px;
        .circle-operation__icon
            height:.46rem;
            line-height: .46rem;
            i 
                font-size:.48rem;
                color:#4e639b;
        
        .circle-operation__btns
            overflow:hidden;
            white-space:nowrap;
            position:absolute;
            right:.6rem;
            top:-.1rem;
            z-index:99;
            width:2.6rem;
            height:.6rem;
            background-color:#2c2d2d;
            border-radius:.1rem;
            box-sizing:border-box;
            /*visibility:hidden;*/
            -webkit-transition:width .4s;
            -moz-transition: width .4s
            transition:width .4s;
           .weui-flex__item
                position:relative;
                height:.4rem;
                padding:.1rem;
                line-height .4rem;
                text-align:center;
                color:white;
            .weui-flex__item>div::after
                content:'';
                position:absolute;
                top:0;
                right:0;
                width:0;
                height:.4rem;
                border-right:1px solid #000;
                top:.1rem;
        .circle-operation__btns.slideShow
                width:2.6rem;
                /*visibility:visible;*/
        .circle-operation__btns.slideHide
                width:0;
                /*visibility:hidden;*/
    .circle-share
        .weui-flex
            padding:.2rem;
            background-color:#f6f6f6;
    .circle-share__title 
        color:#4e639b;
        font-weight:bold;
    .circle-share__img
        width:1.2rem;
        height:1.2rem;
        margin-right:.2rem;

    .circle-wrapper
        position:relative;
        min-height:.6rem;
        background-color:#f6f6f6;

    .circle-wrapper::before
        content: ''; 
        position: absolute;
        left: .2rem; 
        top: -.12rem;
        width: 0; 
        height: 0; 
        border-left: .12rem solid transparent; 
        border-right: .12rem solid transparent; 
        border-bottom: .12rem solid #f6f6f6; 

    .circle-fabulous
        padding:.1rem .2rem;
        flex-wrap:wrap;

    .circle-fabulous>div
        height:.5rem;
        line-height .5rem;
        color:#4e639b;
        font-weight:bold;
        margin-right:.1rem;

    .circle-fabulous~.circle-comment
        border-top:1px solid #ededed;

    .circle-comment
        position:relative;
        padding:.1rem .2rem;

    .circle-comment__item
        .name
            margin-right:.1rem;
            color:#4e639b;
            font-weight:bold;
            span 
                color:#333;
                font-weight:normal;

    .circle-mask
        width:100%;
        height:100%;
        position:fixed;
        left:0;
        top:0;
        opacity:0;
        z-index:9;
        background-color:white;
    .circle-comment__box
        padding:.2rem;
        background:white;
        position:relative;
    .circle-comment__box::before
        content: ''; 
        width: 100%; 
        height: 0; 
        border-top: 1px solid #e8e8e8;  
        position: absolute; 
        left: 0; 
        top: 0;
    .circle-comment__box .weui-input
        width:100%;
        height:100%;
        background-color:#f6f6f6;
        padding:0 .2rem;
        box-sizing:border-box;
        border-radius:3px;
        line-height:normal;
    .circle-comment__btn
        margin-left:.2rem;
        height:.7rem;
        line-height:.7rem;
        background:#29b414;
        color:white;
        padding:0 .4rem;
        border-radius:3px;


</style>
