<template>
    <div class="message-prompt">
        <div class="weui-cells not-border">
            <div class="weui-cell align-top">
                <div class="weui-cell__hd">
                    <i class="iconfont">&#xe63d;</i>
                </div>
                <div class="weui-cell__bd">
                    <div>
                        成功报名后将以短信方式发送致双方手机，如发布虚假信息或参与后爽约，第1次将收到警告，第2次为将停止本平台使用权，每用户同时只能发布最大截止时间内的两条需求，参与者同时最多只能参与最大截止时间内的两个项目。
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"messagePrompt"
    }
</script>

<style lang="stylus" scoped>
    .message-prompt
        .weui-cells
            background-color:#fff3d7;
        i
            font-size: .4rem;
            margin-right: .2rem;
            top: -3px;


</style>
