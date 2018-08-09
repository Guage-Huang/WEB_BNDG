<template>
    <div class="introduce-add">
        <div class="weui-cells not-border-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <div class="fb mr10"> 一、展示类型： </div>
                </div>
                <div class="weui-cell__bd">
                    <popup-picker :data="showTypeList" placeholder="请选择展示类型" popup-title="请选择展示类型" value-text-align="left" v-model="showType" @on-change="handleShowTypeChoose" ></popup-picker>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <div class="fb"> 二、图片类型 </div>
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
    import { PopupPicker } from 'vux'
     //模拟初始化数据
    const showTypeList = [['企业形象','办公环境', '生产环境', '其他']] //展示类型
    export default {
        name:"introduceAdd",
        components:{
            PopupPicker
        },
        data(){
            return {
                showTypeList,
                showType:[]
            }
        },
        methods:{
            handleShowTypeChoose(val){
                this.showType = val
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .introduce-add
        .weui-cell::before
            left:0;
    .weui-cells-primary
        background-color:initial;
</style>
