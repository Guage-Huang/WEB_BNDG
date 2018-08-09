<template>
    <div class="license-add">
        <div class="weui-cells not-border-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <div class="fb mr10"> 一、统一社会信用代码： </div>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入统一社会信用代码">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <div class="fb"> 二、技能证书 </div>
                    <div class="weui-uploader mt10 pl30">
                        <div class="weui-uploader__bd">
                            <ul class="weui-uploader__files" id="uploaderFiles">
                                <!-- <li class="weui-uploader__file" style="background-image:url(https://weui.io/images/pic_160.png)">
                                    <i class="iconfont">&#xe695;</i>
                                </li> -->
                            </ul>
                            <div class="weui-uploader__input-box">
                                <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple="">
                                <i class="iconfont">&#xe614;</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="weui-cells-primary mt50">
            <div class="weui-btn weui-btn_primary">提交</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"licenseAdd"
    }
</script>

<style lang="stylus" scoped>
    .license-add
        .weui-cell::before
            left:0;
    .weui-cells-primary
        background-color:initial;
</style>
