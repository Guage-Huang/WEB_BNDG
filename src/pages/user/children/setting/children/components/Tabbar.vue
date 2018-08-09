<template>
    <div class="footer">
        <div class="stance"></div>
        <div class="weui-tabbar">
            <div class="weui-tabbar__item" :class="[tabbarActive == 0? 'weui-bar__item_on' : '']" @click="handleTabBarChange(0)">
                <div class="weui-tabbar__icon">
                    <i class="iconfont">&#xe766;</i>
                </div>
                <p class="weui-tabbar__label">全部</p>
            </div>
            <div class="weui-tabbar__item" :class="[tabbarActive == 1? 'weui-bar__item_on' : '']" @click="handleTabBarChange(1)">
                <div class="weui-tabbar__icon">
                    <i class="iconfont">&#xe630;</i>
                </div>
                <p class="weui-tabbar__label">未审核</p>
            </div>
            <div class="weui-tabbar__item" :class="[tabbarActive == 2? 'weui-bar__item_on' : '']" @click="handleTabBarChange(2)">
                <div class="weui-tabbar__icon">
                    <i class="iconfont">&#xe632;</i>
                </div>
                <p class="weui-tabbar__label">已审核</p>
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
        data(){
            return {
                tabbarActive: sessionStorage.eaduditId || 0,
            }
        },
        methods:{
           handleTabBarChange(index){
               if(this.tabbarActive == index) return;
               this.tabbarActive = index
               sessionStorage.eaduditId = index
               this.$emit('change',index)
           } 
        }
    }
</script>
