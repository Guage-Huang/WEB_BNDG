<template>
    <div class="hometown">
        <div class="weui-cells-form__title">
            <span>一、寻找信息</span>
        </div>
        <div class="weui-cells not-border-cells">
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="top:.02rem; color:#333333">&#xe60a;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">寻找：</label>
                </div>
                <div class="weui-cell__input">
                    <x-address title="" :raw-value="true"  v-model="region" :list="regionData" placeholder="请选择地区" value-text-align="center"  @on-shadow-change="handleRegionChoose"></x-address>
                </div>
                <div class="weui-cell__ft">
                    <span class="cl_b3 ml10">老乡</span>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#00c633">&#xe677;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">工作地点：</label>
                </div>
                <div class="weui-cell__bd">
                    <x-address title="" :raw-value="true" v-model="wrokAddress"  :list="wrokAddressData" placeholder="请选择工作地点" value-text-align="left" @on-shadow-change="handleWrokAddressChoose"></x-address>
                </div>
            </div>
            <div class="weui-cell weui-cell__select">
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
            <span>二、自我介绍</span>
        </div>
        <div class="weui-cells not-border-cells">
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#efb247">&#xe609;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">我的姓名：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" v-model="name" placeholder="实名认证后显示" readonly>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="top:.02rem; font-size:.44rem; color:#45ea74">&#xe650;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">我的籍贯：</label>
                </div>
                <div class="weui-cell__bd">
                    <div :class="[place.length <= 0 ? 'cl_b9' : '']" v-if="place.length <= 0">实名认证后显示</div>
                    <div v-else>{{place[0]}}-{{place[1]}}-{{place[2]}}</div>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="top:.02rem; color:#f6960b">&#xe622;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">我的年龄：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" v-model="age" placeholder="实名认证后显示" readonly>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#00c633">&#xe677;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">工作地点：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" v-model="address2" placeholder="实名认证后显示" readonly>
                </div>
            </div>
            <div class="weui-cell x-textarea-none align-top">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="top:.02rem; color:#b14935">&#xe60b;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">自我介绍：</label>
                </div>
                <div class="weui-cell__bd">
                    <!-- <input class="weui-input" type="text" name="" placeholder="请输入自我介绍"> -->
                     <x-textarea title="" :rows="1" :autosize="true" v-model="explain" placeholder="请输入自我介绍"></x-textarea>
                </div>
            </div>
        </div>
        <div class="weui-cells-form__title">
            <span>三、共同约定</span><span class="f12 cl_b9 ml5">(多选)</span>
        </div>
        <div class="weui-cells not-border-cells">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <div class="skill-items skill-items_four">
                        <div class="skill-item border" :class="{active:item.checked}"  v-for="(item,index) in appoint" :key="item.id" @click="handleAppointChoose(index)"><span>{{item.message}}</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="weui-cells-primary">
            <div class="weui-btn weui-btn_primary" @click="handleSubmitFrom">发布</div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
</style>

<script>
    import { Datetime,XTextarea,XAddress,ChinaAddressV4Data } from 'vux'

    const utils = require('@/utils/utils')
    const getNewDate = utils.getNewDate
    const getAsDate = utils.getAsDate

    export default {
        name:'hometown',
        components:{
            Datetime,
            XTextarea,
            XAddress
        },
        data(){
            return {
                /**
                 * 默认显示数据
                 */
                //寻找信息
                region:['广东省', '广州市','白云区'],//寻找地区老乡
                regionData: ChinaAddressV4Data,
                regionValue:[],
                wrokAddress:[],  //工作地点
                wrokAddressData:ChinaAddressV4Data,
                wrokAddressValue:[],
                releaseDataTime:getNewDate(), //发布时间
                asDataTime:getAsDate(), //截止时间
                //自我介绍
                name:'', //我的姓名
                place:[], //我的籍贯 默认显示值
                age:'',  //我的年龄
                address2:'',  //工作地点
                explain:'', //自我介绍
                //共同约定
                appoint: [
                    { id:1, message: '不赌博' },
                    { id:2, message: '不劝酒' },
                    { id:3, message: '不偷盗' },
                    { id:4, message: '不犯法' },
                ],

                 /**
                  * 其他 
                  **/
                minReleaseDataTime:getAsDate('date'),//最少截止时间
                
                
            }
        },
        mounted() {
           // this.appoint = appointList
        },
        methods:{
            //获取截止时间
            getAsDateTimeVal(newVal){
                this.asDataTime = newVal
            },
            //处理找老乡区域选择
            handleRegionChoose(value,region){
                this.regionValue = region
            },
            //处理找老乡工作地点选择
            handleWrokAddressChoose(value,region){
                this.wrokAddressValue = region
            },
            //选择共同约定
            handleAppointChoose(index){
                let item =  this.appoint[index]
                item.checked = !item.checked
                this.$set(this.appoint,index,item)
            },
            handleSubmitFrom(){
                console.log(this.regionValue)
                console.log(this.placeValue)
            }
        }
    }
</script>