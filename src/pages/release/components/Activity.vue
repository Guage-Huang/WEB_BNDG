<template>
    <div class="activity">
        <div class="weui-cells-form__title">
            <span>一、活动信息</span><span class="cl_b9 f12 ml5">(必填)</span>
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
                    <i class="iconfont" style="color:#1acac8">&#xed31;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">单位名称：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" v-model="unitname" placeholder="请输入单位名称">
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
        </div>
        <div class="weui-cells-form__title">
            <span>二、活动要求</span><span class="cl_b9 f12 ml5">(选填)</span>
        </div>
        <div class="weui-cells not-border-cells">
            <div class="weui-cell" :class="[age[0] == '默认不限' ? 'shield' : '']">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="top:.02rem; color:#f6960b">&#xe622;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">要求年龄：</label>
                </div>
                <div class="weui-cell__bd">
                    <popup-picker :data="ageList" placeholder="请选择要求年龄" popup-title="请选择要求年龄" value-text-align="left" v-model="age" @on-change="handleAgeChoose" ></popup-picker>
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
                    <popup-picker :data="limitList" placeholder="请选择工作年限" popup-title="请选择工作年限" value-text-align="left" v-model="limit" @on-change="handleLimitChoose" ></popup-picker>
                </div>
            </div>
            <div class="weui-cell" :class="[skills[0] == '默认不限' ? 'shield' : '']">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="top:.02rem; color:#ec4690">&#xe67a;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">要求技能：</label>
                </div>
                <div class="weui-cell__bd">
                    <popup-picker :data="skillsList" placeholder="请选择要求技能" popup-title="请选择要求技能" value-text-align="left" v-model="skills" @on-change="handleSkillsChoose" ></popup-picker>
                </div>
            </div>
        </div>
        <div class="weui-cells-form__title">
            <span>三、其他说明</span><span class="cl_b9 f12 ml5">(必填)</span>
        </div>
        <div class="weui-cells not-border-cells">
            <x-textarea placeholder="请输入其他说明" :autosize="true" :rows="5" v-model="explain"></x-textarea>
        </div>
        <div class="weui-cells-primary">
            <div class="weui-btn weui-btn_primary" @click="handleFormNext">下一步</div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
</style>

<script>
    import { Datetime,XTextarea,PopupPicker } from 'vux'
    const utils = require('@/utils/utils')
    const getNewDate = utils.getNewDate
    //模拟初始化数据
    const ageList = [['默认不限','80后', '90后', '95后', '00后']] //要求年龄
    const limitList = [['默认不限','1年', '2年', '3年', '4年','5年以上','10以上']] //工作年限
    const skillsList = [['默认不限','中低压电工']] //要求技能
    export default {
        name:'activity',
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
                ageList,//要求年龄列表
                limitList,//工作年限列表
                skillsList,//要求技能列表
                /**
                 * 默认显示数据
                 */
                name:'', //活动名称
                dataTime:'', //活动时间
                address:'',  //活动地点
                unitname:'',  //单位名称
                number:'',  //邀请人数
                releaseDataTime:getNewDate(), //发布时间

                age:[ageList[0][0]], //要求年龄值
                limit:[limitList[0][0]],//工作年限值
                skills:[skillsList[0][0]],//要求技能值

                explain:'', //其他说明
            }
        },
        methods:{
            //获取活动时间
            getDateTimeVal(newVal){
                this.dataTime = newVal
            },
            //处理要求年龄选择
            handleAgeChoose(val){
                this.age = val
            },
            //处理工作年限选择
            handleLimitChoose(val){
                this.limit = val
            },
            handleSkillsChoose(val){
                this.skills = val
            },
            //处理下一步内容
            handleFormNext(){
                 this.$router.push({ path:`/release/activity`})
            }
        }
    }
</script>