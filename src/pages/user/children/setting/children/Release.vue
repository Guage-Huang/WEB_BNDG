<template>
    <div class="release">
        <div class="weui-cells__title">商务联谊</div>
        <div class="weui-cells not-border-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <div class="weui-label">需求人数：</div>
                </div>
                <div class="weui-cell__bd">
                    <input type="number" pattern="[0-9]*" placeholder="最多5人" value="5" readonly="readonly">
                </div>
                <div class="weui-cell__ft">
                    <div class="setting-input-btn">修改</div>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <div class="weui-label">发布金额：</div>
                </div>
                <div class="weui-cell__bd">
                    <input type="text" placeholder="请输入参加金额" value="0.1" readonly="readonly">
                </div>
                <div class="weui-cell__ft">
                    <div class="setting-input-btn">修改</div>
                </div>
            </div>
        </div>
        <div class="weui-cells__title">招聘电工</div>
        <div class="weui-cells not-border-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <div class="weui-label">需求人数：</div>
                </div>
                <div class="weui-cell__bd">
                    <input type="number" pattern="[0-9]*" placeholder="最多5人" value="5" readonly="readonly">
                </div>
                <div class="weui-cell__ft">
                    <div class="setting-input-btn">修改</div>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <div class="weui-label">发布金额：</div>
                </div>
                <div class="weui-cell__bd">
                    <input type="text" placeholder="请输入参加金额" value="0.1" readonly="readonly">
                </div>
                <div class="weui-cell__ft">
                    <div class="setting-input-btn">修改</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"release"
    }
</script>

<style lang="stylus" scoped>
    .setting-input-btn
        height: 24px;
        line-height: 24px;
        padding: 0 .16rem;
        background-color: #ff8712;
        border-radius: 3px;
        color: white;
        cursor: pointer;
    .weui-cells__title
        color:#ff8915;
        margin-bottom: .5em;


</style>
