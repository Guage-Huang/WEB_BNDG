<template>
    <div class="info">
        <div class="info-container">
            <div class="weui-cells not-border-cells">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <div class="fb mr20">一、注册类型</div>
                    </div>
                    <div class="weui-cell__bd">
                        <div class="weui-flex">
                            <div class="weui-flex__item mr10" @click="handleInfoTypeChoose('unit')">
                                <i class="radio-icon" :class="{active: infoType == 'unit'}" ></i>
                                <span>单位用户</span>
                            </div>
                            <div class="weui-flex__item" @click="handleInfoTypeChoose('personal')">
                                <i class="radio-icon" :class="{active: infoType == 'personal'}"></i>
                                <span>个人用户</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-unit" v-show="infoType == 'unit'">
                <div class="weui-cells not-border-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__hd">
                            <div class="fb mr20">二、基本情况</div>
                        </div>
                    </div>
                    <div class="weui-cell pl">
                        <div class="weui-cell__hd">
                            <div class="mr10">单位名称：</div>
                        </div>
                        <div class="weui-cell__bd">
                            <input class="weui-input" type="text" placeholder="请输入单位名称">
                        </div>
                    </div>
                    <div class="weui-cell pl">
                        <div class="weui-cell__hd">
                            <div class="mr10">联系人员：</div>
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
                    <div class="weui-cell pl ">
                        <div class="weui-cell__hd">
                            <div class="mr10">验证码：</div>
                        </div>
                        <div class="weui-cell__bd">
                            <input class="weui-input" type="text" placeholder="请输入验证码">
                        </div>
                    </div>
                    <div class="weui-cell pl">
                        <div class="weui-cell__hd">
                            <div class="mr10">单位地址：</div>
                        </div>
                        <div class="weui-cell__bd">
                            <input class="weui-input" type="text" placeholder="请输入单位地址">
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-personal" v-show="infoType == 'personal'">
                <div class="weui-cells not-border-cells">
                    <div class="weui-cell">
                        <div class="weui-cell__hd">
                            <div class="fb mr20">二、基本情况</div>
                        </div>
                    </div>
                    <div class="weui-cell pl">
                        <div class="weui-cell__hd">
                            <div class="mr10">联系人员：</div>
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
                            <div class="mr10">联系地址：</div>
                        </div>
                        <div class="weui-cell__bd">
                            <input class="weui-input" type="text" placeholder="请输入联系地址">
                        </div>
                    </div>
                </div>
            </div>
            <div class="weui-cells not-border-cells" style="margin-top:10px !important;">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <div class="fb">三、实名认证</div>
                    </div>
                </div>
            </div>
            <div class="weui-cells not-border-cells" style="border-top:1px solid #ededed;">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <div class="lh20">
                            <icon type="warn" class="f16"></icon>
                            <span> 为保障活动体验及安全性，请您先进行实名认证。 </span>
                        </div>
                    </div>
                </div>
                <div class="weui-cell pl">
                    <div class="weui-cell__hd">
                        <label class="mr10 weui-label">真实姓名：</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入真实姓名">
                    </div>
                </div>
                <div class="weui-cell pl">
                    <div class="weui-cell__hd">
                        <label class="mr10 weui-label">身份证号码：</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入身份证号码">
                    </div>
                </div>
            </div>
            <div class="choose-deal">
                <div class="checkbox">
                    <i class="iconfont">&#xe635;</i>
                </div>
                <div class="test"> 我同意并遵守 <router-link to="/clause" class="blue">《邦尼电工法律条款》</router-link></div>
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
    import { Icon } from 'vux'
    export default {
        name:"info",
        components: {
            Icon
        },
        data(){
            return {
                infoType:'unit',
            }
        },
        methods:{
            handleInfoTypeChoose(type){
                if(this.infoType == type) return;
                this.infoType = type
                this.$emit('change',type)
            }
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
        .weui-cell::before
            left:0;
        .weui-cell
            &.pl
                padding-left: 40px;
            &.pl::before
                left: 40px;
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

    .info-unit,
    .info-personal
        border-top:1px solid #ededed;
    .weui-cells-primary
        background-color:initial;

    .choose-deal
        text-align:center;
        margin-top:15px;
        padding:0 15px 15px;
        .checkbox
            display:inline-block;
            vertical-align:middle;
            width:.32rem;
            height:.32rem;
            text-align:center;
            line-height .32rem;
            border:1px solid #ededed;
            border-radius:2px;
            background-color:white;
            margin-right:5px;
            i 
                font-size:.24rem;
                color:#ff8712;
        .test
            display:inline-block;
            vertical-align:middle;
            color:#999;


</style>
