<template>
    <div class="project-list">
        <ul class="release-list">
            <li v-for="item of release" :key="item.id">
                <router-link to="/detail">
                    <div class="release-container">
                        <div class="weui-flex">
                            <div class="weui-flex__hd">
                                <div class="release-img">
                                    <img :src="item.img">
                                </div>
                            </div>
                            <div class="weui-flex__item">
                                <div class="release-title tlie_1">{{item.title}}</div>
                                <div class="weui-flex mt10">
                                    <div class="weui-flex__item">
                                        <span class="release-span">{{item.date}}</span>
                                    </div>
                                    <div class="weui-flex__rt tc">
                                        <span class="release-span">{{item.distance}}</span>
                                    </div>
                                    <div class="weui-flex__rt tr">
                                        <span class="release-span" style="color:#ff8712">{{item.num}}</span>
                                    </div>
                                </div>
                                <div class="release-address mt10">
                                    <i class="iconfont">&#xe602;</i>
                                    <span class="tlie_1">{{item.address}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </li>    
        </ul> 
    </div>
</template>


<style lang="stylus" scoped>
    .release-list
        padding-top: 10px;
        li
            margin-bottom:10px;
            a
                position: relative;
                display: block;
                margin:0 10px;
                padding: 10px 15px;
                background-color: white;
                border-radius: 5px;
                box-shadow: 0 0 3px #dddddd;
                
    .release-label{
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color:#dddddd;
        color:white;
        font-size: .28rem;
        box-shadow: 5px 5px 5px #dddddd;
        position: absolute;
        left: 25px;
        top: -15px;
        padding: 0 5px;
        box-sizing: border-box;
    } 
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
    
    .release-user
        position:absolute;
        right:0;
        bottom:0;
        z-index:9;
        background-color:#f6f6f6;
        height:30px;
        line-height:30px;
        padding:0;
        border-radius:30px 0 10px 30px;
        padding-right:5px;
    .release-user-img
        width:30px;
        height:30px;
        border-radius:50%;
        background-color:#f6f6f6;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    .release-user-weixin
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        margin-left:5px;
        i 
            color:#1AAD19;
            font-size:.4rem;


    .release-bg_red 
        .release-label
            background-color:#f08f70;
    
    .release-bg_blue 
        .release-label
            background-color:#55acef;

    .release-bg_green 
        .release-label
            background-color:#1AAD19;

    .release-bg_yellow
        .release-label
            background-color:#ff8712;
    
    .release-bg_orange 
        .release-label
            background-color:#ff5e14;
    
    .release-bg_dred
        .release-label
            background-color:#e80000;
    
    .release-bg_qblue
        .release-label
            background-color:#00dcd4;

</style>


<script>
    export default {
        name:'projectList',
        data(){
            return {
                release:[
                    { id:0, color:'blue', type:'工程项目', img:require('@/assets/images/release/project.jpg') ,title:'工程项目标题', date:'07-13 周五', distance:'0km', num:'2/11', address:'广东省广州市白云区广园中路238号', user:'',},
                    { id:1, color:'green', type:'联谊聚会', img:require('@/assets/images/release/activity.jpg') ,title:'联谊聚会标题', date:'07-13 周五', distance:'0km', num:'0/11', address:'广东省广州市白云区广园中路238号', user:'',},
                    { id:2, color:'red', type:'拜师傅', img:require('@/assets/images/release/master.jpg') ,title:'拜师傅标题', date:'07-13 周五', distance:'0km', num:'0/11', address:'广东省广州市白云区广园中路238号', user:'',},
                    { id:3, color:'orange', type:'找老乡', img:require('@/assets/images/release/relative.jpg') ,title:'找老乡标题', date:'07-13 周五', distance:'0km', num:'0/11', address:'广东省广州市白云区广园中路238号', user:'',},
                    { id:4, color:'yellow', type:'招聘电工', img:require('@/assets/images/release/job.jpg') ,title:'招聘电工标题', date:'07-13 周五', distance:'0km', num:'2/11', address:'广东省广州市白云区广园中路238号', user:'',},
                    { id:5, color:'qblue', type:'求职应聘', img:require('@/assets/images/release/job.jpg') ,title:'求职应聘标题', date:'07-13 周五', distance:'0km', num:'2/11', address:'广东省广州市白云区广园中路238号', user:'',},
                    { id:6, color:'dred', type:'其他类型', img:require('@/assets/images/release/other.jpg') ,title:'其他类型标题', date:'07-13 周五', distance:'0km', num:'2/11', address:'广东省广州市白云区广园中路238号', user:'',}
                ]
            }
        }
    }
</script>