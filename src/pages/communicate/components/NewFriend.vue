<template>
    <div class="new-friend">
        <swipeout>
            <swipeout-item  v-for="(item,index) in 15" :key="item" @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" :threshold="0.1" :right-menu-width="80" :sensitivity="15" transition-mode="follow">
                <div slot="right-menu">
                <!-- <swipeout-button @click.native="onButtonClick('fav')" type="primary">{{'Yes'}}</swipeout-button> -->
                <swipeout-button @click.native="handleDelete('delete')" type="warn">删除</swipeout-button>
                </div>
                <div slot="content" class="new-friend-content">
                    <div class="weui-flex align-center" @click="handleNavigator">
                        <div class="weui-flex__hd">
                            <div class="weui-cell__img">
                                <img class="avatar" src="https://wx.qlogo.cn/mmopen/vi_32/DM586VmS7sGPo4MibItK2vX1rPlLbvuIM34WxlHpibDmtJHBv7WTzp2PVNNh4QiceyQN5hrbBzYFQVUFl7IyqqARA/132">
                            </div>
                        </div>
                        <div class="weui-flex__item">
                            <div class="name">郭师傅</div>
                            <div class="desc">请求添加你为朋友</div>
                        </div>
                        <div class="weui-flex__ft">
                            <div class="btn success border" v-show="index % 2 !== 0" @click.stop.prevent="handleNewFriendAdd">添加</div>
                            <div class="error cl_b9" v-show="index % 2 === 0">已添加</div>
                        </div>
                    </div>
                </div>
            </swipeout-item>
        </swipeout>
        <!-- <div class="weui-cells not-border-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <div class="weui-cell__img">
                        <img class="avatar" src="https://wx.qlogo.cn/mmopen/vi_32/DM586VmS7sGPo4MibItK2vX1rPlLbvuIM34WxlHpibDmtJHBv7WTzp2PVNNh4QiceyQN5hrbBzYFQVUFl7IyqqARA/132">
                    </div>
                </div>
                <div class="weui-cell__bd">
                    <div class="name">郭师傅</div>
                    <div class="desc">请求添加你为朋友</div>
                </div>
                <div class="weui-cell__ft">
                    <div class="btn success border">添加</div>
                    <div class="error" v-show="false">已添加</div>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <div class="weui-cell__img">
                        <img class="avatar" src="https://wx.qlogo.cn/mmopen/vi_32/oGPLicuQtyhkkhdI7Za41oC28ecdqaWcG8c6cibx9WJvchBbgia0saBNricnfnbob3CnyzAHVfjeev3oytNib74to1w/132">
                    </div>
                </div>
                <div class="weui-cell__bd">
                    <div class="name">李师傅</div>
                    <div class="desc">请求添加你为朋友</div>
                </div>
                <div class="weui-cell__ft">
                    <div class="btn success border" v-show="false">添加</div>
                    <div class="error" v-show="true">已添加</div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
    import { Swipeout, SwipeoutItem,SwipeoutButton  } from 'vux'
    import CommonPrompt from '../../../common/prompt/Prompt'

    export default {
        name: "newFriend",
        components: {
            Swipeout,
            SwipeoutItem,
            SwipeoutButton,
            CommonPrompt
        },
        data(){
            return {
                //无内容提示框数据
                promptData:{
                    title:'暂时没有新的朋友信息', //提示标题
                    desc:'',    //提示文本
                    src:require('@/assets/images/icon/prompt_case.png'), //提示小图标
                },
            }
        },
        methods:{
            handleNavigator(){
                this.$router.push({ path:`/communicate/detail`})
            },
            handleNewFriendAdd(){
                console.log(123);
            },
            handleDelete(){
                console.log('删除')
            },
            handleEvents(type){
               // console.log(type)
            },

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
    .new-friend
        background-color:white;
        margin-top: -1px;
    .new-friend-content
         padding: .2rem .3rem;
    .avatar
        width: 0.8rem;
        height: 0.8rem;
        display: block;
        margin-right: 0.2rem;
    
    .desc
        margin-top:.06rem;
        color: #999;
    
    .btn
        padding:0 .16rem;
        height:.54rem;
        line-height .54rem;
        border-radius: .1rem;
        background-color: #f6f6f6;
        &.success
            background-color: #29b414;
            color: white;
        &.border::before
            border-radius: .2rem;
            border-color: #29b414;

</style>
