<template>
    <div class="info">
        <div class="info-container">
            <div class="weui-cells not-border-cells">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <div class="fb mr20">一、基本情况</div>
                    </div>
                </div>
                <div class="weui-cell pl">
                    <div class="weui-cell__hd">
                        <div class="mr10">电工姓名：</div>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="实名认证后显示" readonly>
                    </div>
                </div>
                <div class="weui-cell pl weui-cell_vcode">
                    <div class="weui-cell__hd">
                        <div class="mr10">联系电话：</div>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入联系电话">
                    </div>
                    <div class="weui-cell__ft">
                        <button class="weui-vcode-btn">获取验证码</button>
                    </div>
                </div>
                <div class="weui-cell pl">
                    <div class="weui-cell__hd">
                        <div class="mr10">验证码：</div>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入验证码">
                    </div>
                </div>
                <div class="weui-cell pl">
                    <div class="weui-cell__hd">
                        <div class="mr10">性别：</div>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="实名认证后显示" readonly>
                    </div>
                </div>
                <div class="weui-cell pl">
                    <div class="weui-cell__hd">
                        <div class="mr10">年龄：</div>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="实名认证后显示" readonly>
                    </div>
                </div>
                <div class="weui-cell pl">
                    <div class="weui-cell__hd">
                        <div class="mr10">籍贯：</div>
                    </div>
                    <div class="weui-cell__bd">
                        <x-address title="" :raw-value="true" v-model="place" :list="placeData" placeholder="请选择籍贯" value-text-align="left" @on-shadow-change="handlePlaceChoose"></x-address>
                    </div>
                </div>
                <div class="weui-cell pl">
                    <div class="weui-cell__hd">
                        <div class="mr10">工龄：</div>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入工龄">
                    </div>
                </div>
                <div class="weui-cell pl">
                    <div class="weui-cell__hd">
                        <div class="mr10">常住地址：</div>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入常住地址">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <div class="fb mr20">二、自我介绍</div>
                    </div>
                </div>
                <x-textarea placeholder="请输入自我介绍" :autosize="true" :rows="5" ></x-textarea>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <div class="fb mr20">二、技能证书</div>
                    </div>
                </div>
                <div class="weui-cell pl uploader">
                    <div class="weui-cell__bd">
                        <div class="weui-uploader mt5">
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
        </div>
        <div class="bottom-absolute">
            <div class="bottom-form-btn">
                <div class="weui-btn weui-btn_primary">下一步</div>
            </div>
        </div>
    </div>

</template>

<script>
    import {XTextarea,XAddress,ChinaAddressV4Data} from 'vux'
    export default {
        name:"",
        data(){
            return {
                infoType:'unit',
                place:[], //我的籍贯 默认显示值
                placeData: ChinaAddressV4Data,
                placeValue:[], //我的籍贯
            }
        },
        components:{
            XTextarea,
            XAddress,
        },
        methods:{
            //处理籍贯选择
            handlePlaceChoose(value,region){
                this.placeValue = region
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .info
        .info-container
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            position:absolute;
            left:0;
            right:0;
            top:44px;
            bottom:45px;
        .weui-cell
            &::before
                left: 0;
        .weui-cell
            &.pl,
            &.vux-x-textarea
            &.uploader
                padding-left: 40px;
                &::before
                    left: 40px;
            &.uploader,
            &.vux-x-textarea
                padding-top:0;
                &::before
                    border:none;

        .vux-x-textarea>>>.weui-textarea
            background-color: #f6f6f6;
            padding: 10px;
            box-sizing: border-box;

    .radio-icon
        width: .34rem;
        height: .34rem;
        border-color:#999;
        display:inline-block;
        vertical-align:middle;
        margin-right:2px;
        margin-top:-3px;
    .radio-icon.active
        background-color:#E62129;
        border-color:#E62129;
    .wrapper
        position:absolute;
        top:44px;
        left:0;
        right:0
        bottom:0;
        height:calc(100% - 89px);
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;


</style>
