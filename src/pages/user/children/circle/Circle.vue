<template>
    <div class="circles">
        <scroller lock-x height="100%" ref="scroller" >
            <div>
                <circle-header @change="getPopupOpenVal"></circle-header>
                <circle-content></circle-content>
            </div>
        </scroller>
        <div v-transfer-dom>
            <popup v-model="show" height="100%" :popup-style="{background:'#ffffff'}">
                <div class="popup-container">
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
                    <div class="weui-cells-primary">
                        <div class="weui-flex">
                            <div class="weui-flex__item mr10">
                                <div class="weui-btn weui-btn_primary" @click="handlePopupHide">取消</div>
                            </div>
                            <div class="weui-flex__item">
                                <div class="weui-btn weui-btn_primary weui-btn_disabled">发表</div>
                            </div>
                        </div>
                    </div>
                </div>
            </popup>
        </div>
    </div>
</template>

<script>
    import CircleHeader from './components/Header'
    import CircleContent from './components/Content'
    import { TransferDom,Popup,XTextarea,Scroller } from 'vux'
    export default {
        name:"circles",
        directives: {
            TransferDom
        },
        components:{
            CircleHeader,
            CircleContent,
            Popup,
            XTextarea,
            Scroller
        },
        data(){
            return {
                show:false,
            }
        },
        methods:{
            getPopupOpenVal(boolean){
                this.show = boolean
            },
            handlePopupHide(){
                this.show = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .circles
        min-height:100vh;
        background-color:white !important;

    .popup-container>>>.vux-x-textarea .weui-textarea
        background-color:#f6f6f6;
        padding:10px;
        -webkit-box-sizing:border-box;
        -moz-box-sizing:border-box;
        box-sizing:border-box;

    .weui-cells-primary
        padding: .4rem 15px;



</style>
