<template>
    <div class="leave-message">
        <div class="weui-cells not-border">
            <x-textarea placeholder="这一刻的想法..." :autosize="true" :rows="7"></x-textarea>
            <div class="weui-cell" style="padding-top:0;">
                <div class="weui-cell__bd">
                    <div class="weui-uploader">
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
        <div class="weui-cells-primary bg-none">
            <div class="weui-flex">
                <div class="weui-flex__item">
                    <div class="weui-btn weui-btn_primary weui-btn_disabled">提交</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { XTextarea } from 'vux'
    export default {
        name:"leaveMessage",
        components:{
            XTextarea
        },
    }
</script>

<style lang="stylus" scoped>

</style>
