<template>
    <div class="small-talk">
        <swipeout>
            <swipeout-item  v-for="(item) in 10" :key="item" @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" :threshold="0.1" :right-menu-width="80" :sensitivity="15" transition-mode="follow">
                <div slot="right-menu">
                <!-- <swipeout-button @click.native="onButtonClick('fav')" type="primary">{{'Yes'}}</swipeout-button> -->
                <swipeout-button @click.native="onButtonClick('delete')" type="warn">删除</swipeout-button>
                </div>
                <div slot="content" class="small-talk-content">
                    <div class="weui-flex align-center" @click="handleNavigator">
                        <div class="weui-flex__hd">
                            <div class="small-talk-ibox border">
                                <div class="small-talk-img" style="background-image:url(https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLLthla0ciaf2BkF8iaWoHbYh0ickBBywBXkwhIZZZMmichmbGmmDRsoBiaYuSPRYNWRMkOQF9WiaMqeL9g/132)"></div>
                                <div class="small-talk-img" style="background-image:url(https://wx.qlogo.cn/mmopen/vi_32/DM586VmS7sGPo4MibItK2vX1rPlLbvuIM34WxlHpibDmtJHBv7WTzp2PVNNh4QiceyQN5hrbBzYFQVUFl7IyqqARA/132)"></div>
                                <div class="small-talk-img" style="background-image:url(https://wx.qlogo.cn/mmopen/vi_32/K4bQEkXV5LFiaLU1AjCYMLOzOubNX9NHajjGI4rahMLm07Wk8QORK70mvMibUvFtEibFqohoV1EKIDfA09WNiaLl9A/132)"></div>
                                <div class="small-talk-img" style="background-image:url(https://xcs.dgzj.gzmxdl.com/ngdg_develop/public/images/title/header.jpg)"></div>
                            </div>
                        </div>
                        <div class="weui-flex__item">
                            <div class="weui-flex align-center">
                                <div class="weui-flex__item">
                                    <div>物业小区用电类项目 </div>
                                </div>
                                <div class="weui-flex__ft">
                                    <div class="cl_b9 f12 ml10">2018-08-03 16:49:47</div>
                                </div>
                            </div>
                            <div class="cl_b9 f12 tlie_1 mt5"> 地址：广州市天河区中山大道中1011-1015号</div>
                            <div class="cl_b9 f12 tlie_1 mt5"> 最新消息：欢迎 黄俊楠 加入!</div>
                        </div>
                    </div>
                </div>
            </swipeout-item>
        </swipeout>
         <common-prompt :info="promptData" v-show="false"></common-prompt>
    </div>
</template>

<script>
    import { Swipeout, SwipeoutItem,SwipeoutButton  } from 'vux'
    import CommonPrompt from '../../../common/prompt/Prompt'
    export default {
        name:"smallTalk",
        components:{
            Swipeout,
            SwipeoutItem,
            SwipeoutButton,
            CommonPrompt
        },
        data(){
            return {
                //无内容提示框数据
                promptData:{
                    title:'暂时没有聊天信息', //提示标题
                    desc:'',    //提示文本
                    src:require('@/assets/images/icon/prompt_case.png'), //提示小图标
                },
            }
        },
        methods:{
            handleNavigator(){
                
            },
            handleEvents(type){
               // console.log(type)
            }
        }
    }
    
</script>

<style lang="stylus" scoped>
    .vux-swipeout-item::after
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #e5e5e5;
        color: #e5e5e5;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        left: 0;
        z-index: 2;
    .small-talk
        background-color:white;
        margin-top: -1px;
    .small-talk-content
        padding: .2rem .3rem;
    .small-talk-ibox
        width: 1.24rem;
        height: 1.24rem;
        box-sizing: border-box;
        display:-webkit-flex;
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;
        margin-right:.2rem;
    .small-talk-img
        width: 0.57rem;
        height: 0.59rem;
        margin:.02rem .02rem 0;
        background-color: #f6f6f6;
        background-position: center;
        background-repeat: no-repeat;
        background-size:cover;

    .small-talk-img:nth-child(2n)
        margin-left:0;

</style>
