<template>
    <div class="other">
        <div class="weui-cells-form__title">
            <span>一、基本信息</span><span class="cl_b9 f12 ml5">(必填)</span>
        </div>
        <div class="weui-cells not-border-cells">
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="font-size:.54rem; top:-.06rem; left:-.07rem; color:#1271ff">&#xe616;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">活动名称：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" v-model="name" placeholder="请输入活动名称">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#1acac8">&#xe612;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">活动时间：</label>
                </div>
                <div class="weui-cell__bd">
                    <datetime format="YYYY-MM-DD HH:mm" placeholder="请选择活动时间" v-model="dataTime" @on-change="getDateTimeVal"></datetime>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#00c633">&#xe677;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">活动地点：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" v-model="address" placeholder="请输入活动地点">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#fbc00e">&#xe8c3;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">邀请人数：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" v-model="number" placeholder="请输入邀请人数">
                </div>
                <div class="weui-cell__ft">
                    <span class="cl_b3 ml10">人</span>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#1acac8">&#xe612;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">发布时间：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" v-model="releaseDataTime" placeholder="请输入发布时间" readonly>
                </div>
            </div>
            <div class="weui-cell weui-cell__select">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#1acac8">&#xe612;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">截止时间：</label>
                </div>
                <div class="weui-cell__bd">
                    <datetime format="YYYY-MM-DD HH:mm" placeholder="请选择截止时间" :start-date="minReleaseDataTime" v-model="asDataTime" @on-change="getAsDateTimeVal"></datetime>
                </div>
            </div>
        </div>
        <div class="weui-cells-form__title">
            <span>二、活动内容</span><span class="cl_b9 f12 ml5">(必填)</span>
        </div>
        <div class="weui-cells not-border-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <x-textarea placeholder="请输入活动内容" :autosize="true" :rows="5" v-model="explain"></x-textarea>
                </div>
            </div>
        </div>
        <div class="weui-cells-primary">
            <div class="weui-btn weui-btn_primary">发布</div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
</style>

<script>
    import { Datetime,XTextarea} from 'vux'
    const utils = require('@/utils/utils')
    const getNewDate = utils.getNewDate
    const getAsDate = utils.getAsDate

    export default {
        name:'other',
        components:{
            Datetime,
            XTextarea
        },
        data(){
            return {
                /**
                 * 默认显示数据
                 */
                name:'',//活动名称
                dataTime:'', //活动时间
                address:'',//活动地点
                number:'',//邀请人数

                releaseDataTime:getNewDate(), //发布时间
                asDataTime:getAsDate(), //截止时间

                explain:'', //活动内容

                 /**其他 */
                minReleaseDataTime:getAsDate('date'),//最少截止时间
                
            }
        },
        mounted() {
            
        },
        methods:{
             //获取活动时间
            getDateTimeVal(newVal){
                this.dataTime = newVal
            },
            //获取截止时间
            getAsDateTimeVal(newVal){
                this.asDataTime = newVal
            },
        }
    }
</script>