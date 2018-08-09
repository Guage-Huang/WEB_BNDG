<template>
    <div class="setting">
        <div class="weui-grids">
            <router-link to="/user/setting/eaudit" class="weui-grid">
                <div class="weui-grid__icon">
                    <img src="../../../../assets/images/user/electrician_sh.png" alt="">
                </div>
                <p class="weui-grid__label">电工审核</p>
            </router-link>
            <router-link to="/user/setting/ostatistics" class="weui-grid">
                <div class="weui-grid__icon">
                    <img src="../../../../assets/images/user/owner_tj.png" alt="">
                </div>
                <p class="weui-grid__label">业主统计</p>
            </router-link>
            <router-link to="/user/setting/estatistics" class="weui-grid">
                <div class="weui-grid__icon">
                    <img src="../../../../assets/images/user/electrician_tj.png" alt="">
                </div>
                <p class="weui-grid__label">电工统计</p>
            </router-link>
            <router-link to="/user/setting/system" class="weui-grid">
                <div class="weui-grid__icon">
                    <img src="../../../../assets/images/user/setting.png" alt="">
                </div>
                <p class="weui-grid__label">系统设置</p>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:"setting"
    }
</script>

<style lang="stylus" scoped>
    .setting
        position:relative;
        min-height: 100vh;
        background-color: white;

    .weui-grids
        &:before
            border: none;
        &:after
            border-left: none;
            width: 200%;
            height: 0;
            top:auto;
            border-bottom: 1px solid #ededed;
    .weui-grid__label
        line-height: 22px;


            
</style>
