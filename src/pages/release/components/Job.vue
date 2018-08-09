<template>
    <div class="job">
        <div class="weui-cells-form__title">
            <span>一、基本信息</span><span class="cl_b9 f12 ml5">(选填)</span>
        </div>
        <div class="weui-cells not-border-cells">
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#1acac8">&#xed31;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">招聘单位：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="" placeholder="(必填)招聘单位">
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#fbc00e">&#xe8c3;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">招聘人数：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="" placeholder="请输入招聘人数">
                </div>
                <div class="weui-cell__ft">
                    <span class="cl_b3 ml10">人</span>
                </div>
            </div>
            <div class="weui-cell" :class="[record[0] == '默认不限' ? 'shield' : '']">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="font-size:.36rem; top:.02rem; color:#3563cb">&#xe629;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">学历要求：</label>
                </div>
                <div class="weui-cell__bd">
                    <popup-picker :data="recordList" placeholder="请选择学历要求" popup-title="请选择学历要求" value-text-align="left" v-model="record" @on-change="handleRecordChoose"></popup-picker>
                </div>
            </div>
            <div class="weui-cell" :class="[age[0] == '默认不限' ? 'shield' : '']">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="top:.02rem; color:#f6960b">&#xe622;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">年龄要求：</label>
                </div>
                <div class="weui-cell__bd">
                    <popup-picker :data="ageList" placeholder="请选择年龄要求" popup-title="请选择年龄要求" value-text-align="left" v-model="age" @on-change="handleAgeChoose"></popup-picker>
                </div>
            </div>
            <div class="weui-cell" :class="[salary[0] == '默认面谈' ? 'shield' : '']">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="top:.02rem; color:#ef8d55">&#xe668;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">薪资待遇：</label>
                </div>
                <div class="weui-cell__bd">
                    <popup-picker :data="salaryList" placeholder="请选择薪资待遇" popup-title="请选择薪资待遇" value-text-align="left" v-model="salary" @on-change="handleSalaryChoose"></popup-picker>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="color:#00c633">&#xe677;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">上班地点：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="" placeholder="(必填)上班地点">
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
            <span>二、职位描述</span><span class="cl_b9 f12 ml5">(必填)</span>
        </div>
        <div class="weui-cells not-border-cells">
            <x-textarea placeholder="请输入职位描述" :autosize="true" :rows="5" v-model="explain"></x-textarea>
        </div>
        <div class="weui-cells-form__title">
            <span>三、技能要求</span><span class="cl_b9 f12 ml5">(必选)</span>
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
    import { Datetime,XTextarea,PopupPicker} from 'vux'

    const utils = require('@/utils/utils')
    const getNewDate = utils.getNewDate
    const getAsDate = utils.getAsDate

    const recordList =  [['默认不限','初中','高中', '中专', '大专', '本科','研究生','硕士','博士']] //学历要求
    const ageList = [['默认不限','80后', '90后', '95后', '00后']] //要求年龄
    const salaryList =  [['默认面谈','1k-5k','5k-10k', '10k以上', '20k以上']] //薪资待遇


    export default {
        name:'job',
        components:{
            Datetime,
            XTextarea,
            PopupPicker
        },
        data(){
            return {
                /**
                 * 初始化数据
                 */
                recordList,//学历要求
                ageList,//年龄要求列表
                salaryList,//期望薪资列表
                /**
                 * 默认显示数据
                 */
                //基本信息
                unitname:'', //单位名称
                number:'', //招聘人数
                record:[recordList[0][0]],//学历要求
                age:[ageList[0][0]],  //年龄要求
                salary:[salaryList[0][0]],//薪资待遇
                address:'',//上班地点
                releaseDataTime:getNewDate(), //发布时间
                asDataTime:getAsDate(), //截止时间

                explain:'', //职位要求

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
            //处理目前学历选择
            handleRecordChoose(val){
                this.record = val
            },
            //处理年龄要求选择
            handleAgeChoose(val){
                this.age = val
            },
            //处理期望薪资选择
            handleSalaryChoose(val){
                this.salary = val
            },
        }
    }
</script>