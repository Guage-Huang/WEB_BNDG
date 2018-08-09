<template>
    <div class="case-add">
        <div class="weui-cells not-border-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <div class="fb"> 一、案例信息</div>
                </div>
            </div>
            <div class="weui-cell pl">
                <div class="weui-cell__hd">
                    <div class="mr10">项目名称：</div>
                </div>
                <div class="weui-cell__bd">
                    <input  class="weui-input" type="text" placeholder="请输入项目名称">
                </div>
            </div>
            <div class="weui-cell pl">
                <div class="weui-cell__hd">
                    <div class="mr10">项目地址：</div>
                </div>
                <div class="weui-cell__bd">
                    <input  class="weui-input" type="text" placeholder="请输入项目地址">
                </div>
            </div>
            <div class="weui-cell pl">
                <div class="weui-cell__hd">
                    <div class="mr10">发布时间：</div>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" v-model="releaseDataTime" placeholder="请输入发布时间" readonly>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <div class="fb"> 二、案例内容</div>
                </div>
            </div>
            <x-textarea placeholder="请输入案例内容" :autosize="true" :rows="5" v-model="content" class="pl"></x-textarea>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <div class="fb"> 三、图片类型</div>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <div class="weui-uploader pl30">
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
    import { XTextarea } from 'vux'
    const utils = require('@/utils/utils')
    const getNewDate = utils.getNewDate
    export default {
        name:"caseAdd",
        components:{
            XTextarea,
        },
        data(){
            return {
                releaseDataTime:getNewDate(), //发布时间
                content:'',//案例内容
            }
        },
        methods:{
           
        }
    }
</script>

<style lang="stylus" scoped>
    .case-add
        .weui-cell::before
            left:0;
        .pl
            padding-left:40px;
    .weui-cells-primary
        background-color:initial;
</style>
