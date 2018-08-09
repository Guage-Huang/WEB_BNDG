<template>
    <div class="master">
        <div class="weui-cells-form__title">
            <span>一、基本信息</span>
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
                    <input class="weui-input" type="number" pattern="[0-9]*" v-model="age" placeholder="实名认证后显示" readonly>
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
                    <input class="weui-input" type="text" v-model="address" placeholder="实名认证后显示" readonly>
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
            <span>二、自我介绍</span>
        </div>
        <div class="weui-cells not-border-cells">
            <x-textarea placeholder="请输入自我介绍" :autosize="true" :rows="5" v-model="explain"></x-textarea>
        </div>
        <div class="weui-cells-form__title">
            <span>三、我想学习</span>
        </div>
        <div class="learn-items">
            <div class="learn-item">
                <div class="learn-title">1、电压等级：<span class="f12 cl_b9 ml5">(单选)</span></div>
                <div class="weui-cells not-border" style="padding:0 0 0 40px;">
                    <div class="weui-cell" style="padding:0 0 15px 20px; border-bottom:1px solid #ededed;">
                        <div class="weui-cell__bd">
                            <div class="skill-items skill-items_two">
                                <div class="skill-item border active"><span>低压电工</span></div>
                                <div class="skill-item border"><span>高压电工</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="learn-item">
                <div class="learn-title">2、应用行业：<span class="f12 cl_b9 ml5">(多选)</span></div>
                <div class="weui-cells not-border" style="padding:0 0 0 40px;">
                    <div class="weui-cell" style="padding:0 0 15px 20px; border-bottom:1px solid #ededed;">
                        <div class="weui-cell__bd">
                            <div class="skill-items skill-double_election">
                                <div class="skill-item">
                                    <div class="weui-flex align-center">
                                        <div class="weui-flex__hd">
                                            <div class="radio-icon active"></div>
                                        </div>
                                        <div class="weui-flex__bd">
                                            <div class="tlie_1 box skill-active border">装修行业</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="skill-item">
                                    <div class="weui-flex align-center">
                                        <div class="weui-flex__hd">
                                            <div class="radio-icon"></div>
                                        </div>
                                        <div class="weui-flex__bd">
                                            <div class="tlie_1 box border">物业酒店</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="skill-item">
                                    <div class="weui-flex align-center">
                                        <div class="weui-flex__hd">
                                            <div class="radio-icon"></div>
                                        </div>
                                        <div class="weui-flex__bd">
                                            <div class="tlie_1 box border">住宅小区</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="skill-item">
                                    <div class="weui-flex align-center">
                                        <div class="weui-flex__hd">
                                            <div class="radio-icon"></div>
                                        </div>
                                        <div class="weui-flex__bd">
                                            <div class="tlie_1 box border">工矿企业</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="skill-item">
                                    <div class="weui-flex align-center">
                                        <div class="weui-flex__hd">
                                            <div class="radio-icon"></div>
                                        </div>
                                        <div class="weui-flex__bd">
                                            <div class="tlie_1 box border">配电安装工程</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="skill-item">
                                    <div class="weui-flex align-center">
                                        <div class="weui-flex__hd">
                                            <div class="radio-icon"></div>
                                        </div>
                                        <div class="weui-flex__bd">
                                            <div class="tlie_1 box border">国家电力系统</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="learn-item">
                <div class="learn-title">3、学习技能：<span class="f12 cl_b9 ml5">(多选)</span></div>
                <div class="weui-cells not-border" style="padding:0 0 0 40px;">
                    <div class="weui-cell" style="padding:0 0 15px 20px; border-bottom:1px solid #ededed;">
                        <div class="weui-cell__bd">
                            <div class="skill-items">
                                <div class="skill-item border active"><span>安装调试</span></div>
                                <div class="skill-item border"><span>维护保养</span></div>
                                <div class="skill-item border"><span>检修试验</span></div>
                                <div class="skill-item border"><span>升级改造</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="learn-item">
                <div class="learn-title">4、学习内容：<span class="f12 cl_b9 ml5">(多选)</span></div>
                <div class="weui-cells not-border" style="padding:0 0 0 40px;">
                    <div class="weui-cell" style="padding:0 0 15px 20px; border-bottom:1px solid #ededed;">
                        <div class="weui-cell__bd">
                            <div class="work-items">
                                <div class="work-item weui-flex align-center active">
                                    <div class="weui-flex__hd">
                                        <div class="radio-icon"></div>
                                    </div>
                                    <div class="weui-flex__item">
                                        <div>入户电箱</div>
                                    </div>
                                </div>
                                <div class="work-item weui-flex align-center">
                                    <div class="weui-flex__hd">
                                        <div class="radio-icon"></div>
                                    </div>
                                    <div class="weui-flex__item">
                                        <div>室内电路布线</div>
                                    </div>
                                </div>
                                <div class="work-item weui-flex align-center">
                                    <div class="weui-flex__hd">
                                        <div class="radio-icon"></div>
                                    </div>
                                    <div class="weui-flex__item">
                                        <div>室内开关、插座</div>
                                    </div>
                                </div>
                                <div class="work-item weui-flex align-center">
                                    <div class="weui-flex__hd">
                                        <div class="radio-icon"></div>
                                    </div>
                                    <div class="weui-flex__item">
                                        <div>灯具</div>
                                    </div>
                                </div>
                                <div class="work-item weui-flex align-center">
                                    <div class="weui-flex__hd">
                                        <div class="radio-icon"></div>
                                    </div>
                                    <div class="weui-flex__item">
                                        <div>家用电器</div>
                                    </div>
                                </div>
                                <div class="work-item weui-flex align-center">
                                    <div class="weui-flex__hd">
                                        <div class="radio-icon"></div>
                                    </div>
                                    <div class="weui-flex__item">
                                        <input class="weui-input" type="text" placeholder="自定义">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
    import { Datetime,XTextarea,XAddress,ChinaAddressV4Data } from 'vux'
    const utils = require('@/utils/utils')
    const getNewDate = utils.getNewDate
    const getAsDate = utils.getAsDate

    export default {
        name:'master',
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
                name:'', //我的姓名
                place:[], //我的籍贯
                age:'',  //我的年龄
                address:'',  //工作地点
                releaseDataTime:getNewDate(), //发布时间
                asDataTime:getAsDate(), //截止时间
                explain:'', //自我介绍

                 /**其他 */
                minReleaseDataTime:getAsDate('date'),//最少截止时间
                
            }
        },
        mounted() {
            
        },
        methods:{
            //获取截止时间
            getAsDateTimeVal(newVal){
                this.asDataTime = newVal
            },
        }
    }
</script>