<template>
    <div class="cells">
        <div class='weui-cells not-border-cells'>
            <router-link to="/user/owner" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <img class="cell-icon" src="../../../assets/images/user/owner.png">
                </div>
                <div class="weui-cell__bd">
                    <div>业主注册</div>
                </div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link to="/user/wireman" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <img class="cell-icon" src="../../../assets/images/user/electrician.png">
                </div>
                <div class="weui-cell__bd">
                    <div>电工注册</div>
                </div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link to="/user/attention" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <img class="cell-icon" src="../../../assets/images/user/attention.png">
                </div>
                <div class="weui-cell__bd">
                    <div>我的关注</div>
                </div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link to="/user/circle" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <img class="cell-icon" src="../../../assets/images/user/circle.png">
                </div>
                <div class="weui-cell__bd">
                    <div>电工圈子</div>
                </div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link to="/user/service" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <img class="cell-icon" src="../../../assets/images/user/service.png">
                </div>
                <div class="weui-cell__bd">
                    <div>联系客服</div>
                </div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link to="/user/setting" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <img class="cell-icon" src="../../../assets/images/user/about.png">
                </div>
                <div class="weui-cell__bd">
                    <div>系统管理</div>
                </div>
                <div class="weui-cell__ft"></div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:"cells"
    }
</script>

<style lang="stylus" scoped>
    .cell-icon
        width:.5rem;
        height:.5rem;
        display:block;
        margin-right:.2rem;

</style>