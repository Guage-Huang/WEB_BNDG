<template>
    <div class="blacklist">
        <search placeholder="搜素名字、拼音、手机号" :auto-fixed="false"></search>
        <blacklist-users></blacklist-users>
    </div>
</template>

<script>
    import { Search } from 'vux'
    import BlacklistUsers from './components/Users'
    export default {
        name:"blacklist",
        components: {
           Search,
           BlacklistUsers
        },
    }
</script>

<style lang="stylus" scoped>
    .blacklist>>>.weui-search-bar:before
        border-top:none;
    
    .blacklist>>>.weui-search-bar.weui-search-bar_focusing .weui-search-bar__cancel-btn
        display: none;
    
    .blacklist>>>.prompt
        top: 49px;


</style>
