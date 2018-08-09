<template>
    <div class="apply">
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
                    <input class="weui-input" type="text" v-model="age" placeholder="实名认证后显示" readonly>
                </div>
            </div>
            <div class="weui-cell" :class="[limit[0] == '默认不限' ? 'shield' : '']">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="font-size:.5rem; top:.06rem; left:-.06rem; color:#f69676">&#xe67f;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">工作年限：</label>
                </div>
                <div class="weui-cell__bd">
                    <popup-picker :data="limitList" placeholder="请选择工作年限" popup-title="请选择工作年限" value-text-align="left" v-model="limit" @on-change="handleLimitChoose"></popup-picker>
                </div>
            </div>
            <div class="weui-cell" :class="[record[0] == '默认不限' ? 'shield' : '']">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="font-size:.36rem; top:.02rem; color:#3563cb">&#xe629;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">目前学历：</label>
                </div>
                <div class="weui-cell__bd">
                     <popup-picker :data="recordList" placeholder="请选择目前学历" popup-title="请选择目前学历" value-text-align="left" v-model="record" @on-change="handleRecordChoose"></popup-picker>
                </div>
            </div>
            <div class="weui-cell" :class="[salary[0] == '默认面谈' ? 'shield' : '']">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="top:.02rem; color:#ef8d55">&#xe668;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">期望薪资：</label>
                </div>
                <div class="weui-cell__bd">
                    <popup-picker :data="salaryList" placeholder="请选择目前学历" popup-title="请选择目前学历" value-text-align="left" v-model="salary" @on-change="handleSalaryChoose"></popup-picker>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#00c633">&#xe677;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">居住地点：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="" placeholder="实名认证后显示" readonly>
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
            <span>二、自我介绍</span><span class="cl_b9 f12 ml5">(必填)</span>
        </div>
        <div class="weui-cells not-border-cells">
            <x-textarea placeholder="请输入自我介绍" :autosize="true" :rows="5" v-model="explain"></x-textarea>
        </div>
        <div class="weui-cells-form__title">
            <span>三、工作简历</span><span class="cl_b9 f12 ml5">(必填)</span>
        </div>
        <div class="weui-cells not-border-cells">
            <x-textarea placeholder="请输入工作简历" :autosize="true" :rows="5" v-model="resume"></x-textarea>
        </div>
        <div class="weui-cells-form__title">
            <span>四、我的技能</span><span class="cl_b9 f12 ml5">(必选)</span>
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
                <div class="learn-title">2、擅长行业：<span class="f12 cl_b9 ml5">(单选)</span></div>
                <div class="weui-cells not-border" style="padding:0 0 0 40px;">
                    <div class="weui-cell" style="padding:0 0 15px 20px; border-bottom:1px solid #ededed;">
                        <div class="weui-cell__bd">
                            <div class="skill-items">
                                <div class="skill-item border active"><span>装修行业</span></div>
                                <div class="skill-item border"><span>物业酒店</span></div>
                                <div class="skill-item border"><span>住宅小区</span></div>
                                <div class="skill-item border"><span>工矿企业</span></div>
                                <div class="skill-item border"><span>配电安装工程</span></div>
                                <div class="skill-item border"><span>国家电力系统</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="learn-item">
                <div class="learn-title">3、技能分类：<span class="f12 cl_b9 ml5">(多选)</span></div>
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
                <div class="learn-title">4、擅长内容：<span class="f12 cl_b9 ml5">(多选)</span></div>
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
    import { Datetime,PopupPicker,XTextarea,XAddress,ChinaAddressV4Data } from 'vux'

    const utils = require('@/utils/utils')
    const getNewDate = utils.getNewDate
    const getAsDate = utils.getAsDate

    //模拟初始化数据
    const limitList = [['默认不限','1年', '2年', '3年', '4年','5年以上','10以上']] //工作年限
    const recordList =  [['默认不限','初中','高中', '中专', '大专', '本科','研究生','硕士','博士']] //学历要求
    const salaryList =  [['默认面谈','1k-5k','5k-10k', '10k以上', '20k以上']] //期望薪资
    export default {
        name:'apply',
        components:{
            Datetime,
            PopupPicker,
            XTextarea,
            XAddress
        },
         data(){
            return {
                /**
                 * 初始化数据
                 */
                placeData: ChinaAddressV4Data,//籍贯列表
                limitList,//工作年限列表
                recordList,//学历要求列表
                salaryList,//期望薪资列表
                /**
                 * 默认显示数据
                 */
                //基本信息
                name:'', //我的姓名
                place:[], //我的籍贯
                age:'',  //我的年龄
                limit:[limitList[0][0]],//工作年限值
                record:[recordList[0][0]],//学历要求值
                salary:[salaryList[0][0]],//期望薪资值
                address:'',//居住地点
                releaseDataTime:getNewDate(), //发布时间
                asDataTime:getAsDate(), //截止时间

                explain:'', //自我介绍

                resume:'', //工作简历

                 /**
                  * 其他 
                  **/
                minReleaseDataTime:getAsDate('date'),//最少截止时间
                
            }
        },
        methods:{
            //获取截止时间
            getAsDateTimeVal(newVal){
                this.asDataTime = newVal
            },
            //处理工作年限选择
            handleLimitChoose(val){
                this.limit = val
            },
            //处理目前学历选择
            handleRecordChoose(val){
                this.record = val
            },
            //处理期望薪资选择
            handleSalaryChoose(val){
                this.salary = val
            },
        }
    }
</script>