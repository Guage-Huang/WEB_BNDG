<template>
    <div class="system">
        <div class='weui-cells not-border-cells'>
            <router-link to="/user/setting/system/certification" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <img class="cell-icon" src="../../../../../assets/images/user/certified.png">
                </div>
                <div class="weui-cell__bd">
                    <div>实名认证</div>
                </div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link to="/user/setting/system/release" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <img class="cell-icon" src="../../../../../assets/images/user/release.png">
                </div>
                <div class="weui-cell__bd">
                    <div>发布设置</div>
                </div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link to="/user/setting/system/join" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <img class="cell-icon" src="../../../../../assets/images/user/project.png">
                </div>
                <div class="weui-cell__bd">
                    <div>参加设置</div>
                </div>
                <div class="weui-cell__ft"></div>
            </router-link>
            <router-link to="/user/setting/system/blacklist" class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <img class="cell-icon" src="../../../../../assets/images/user/blacklist.png">
                </div>
                <div class="weui-cell__bd">
                    <div>黑名单设置</div>
                </div>
                <div class="weui-cell__ft"></div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:"system"
    }
</script>

<style lang="stylus" scoped>
    .cell-icon
        width:.5rem;
        height:.5rem;
        display:block;
        margin-right:.2rem;
</style>
