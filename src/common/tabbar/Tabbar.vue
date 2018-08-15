<template>
    <div class="footer">
        <div class="stance"></div>
        <div class="weui-tabbar">
            <div class="weui-tabbar__item" :class="[tabbarActive == 0? 'weui-bar__item_on' : '']" @click="handleTabBarRouter(0)">
                <img src="~@/assets/images/tabbar/t3.png" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">首页</p>
            </div>
            <div class="weui-tabbar__item" :class="[tabbarActive == 1? 'weui-bar__item_on' : '']" @click="handleTabBarRouter(1)">
                <img src="~@/assets/images/tabbar/t1.png" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">接单</p>
            </div>
            <div class="weui-tabbar__item" :class="[tabbarActive == 2? 'weui-bar__item_on' : '']" @click="handleTabBarRouter(2)">
                <img src="~@/assets/images/tabbar/t2.png" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">发布</p>
            </div>
            <div  class="weui-tabbar__item" :class="[tabbarActive == 3? 'weui-bar__item_on' : '']" @click="handleTabBarRouter(3)">
                <span style="display: inline-block;position: relative;">
                    <img src="~@/assets/images/tabbar/t4.png" alt="" class="weui-tabbar__icon">
                    <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
                </span>
                <p class="weui-tabbar__label">消息</p>
            </div>
            <div class="weui-tabbar__item" :class="[tabbarActive == 4? 'weui-bar__item_on' : '']" @click="handleTabBarRouter(4)">
                <img src="~@/assets/images/tabbar/t5.png" alt="" class="weui-tabbar__icon">
                <p class="weui-tabbar__label">我的</p>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
    .stance
        overflow: hidden;
        height:0;
        padding-bottom:53px;
    .weui-tabbar
        position:fixed;
        width:100%;
        background-color:white;
    .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, 
    .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon>i, 
    .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label
        color:#ff8712;

</style>

<script>
    export default {
        name:'tabbar',
        props:{
            tabbarActive:Number,
        },
        data(){
            return {
               // tabbarActive:null,
            }
        },
        mounted(){
             //console.log(this.$route.meta.index);
             //this.tabbarActive = this.$route.meta.index
        },
        methods:{
           handleTabBarRouter(index){
               if(this.tabbarActive == index) return;
               switch(index){
                    case 0:
                        this.$router.push({ path:`/`})
                        break;
                    case 1:
                        this.$router.push({ path:`/order`})
                        break;
                    case 2:
                        this.$router.push({ path:`/release`})
                        break;
                    case 3:
                        this.$router.push({ path:`/communicate`})
                        break;
                    default:
                        this.$router.push({ path:`/user`})
               }
               //this.$emit('change', index)
           } 
        }
    }
</script>
