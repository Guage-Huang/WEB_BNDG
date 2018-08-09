<template>
    <div class="project">
        <div class="weui-cells-form__title">
            <span>三、选填信息</span><span class="cl_b9 f12 ml5">(选填)</span>
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
                    <i class="iconfont" style="font-size:.5rem; top:.06rem; left:-.07rem; color:#f69676">&#xe67f;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">工作年限：</label>
                </div>
                <div class="weui-cell__bd">
                    <popup-picker :data="limitList" placeholder="请选择工作年限" popup-title="请选择工作年限" value-text-align="left" v-model="limit" @on-change="handleLimitChoose" ></popup-picker>
                </div>
            </div>
            <div class="weui-cell" :class="[valuation[0] == '默认面议' ? 'shield' : '']">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="font-size:.36rem; top:.04rem; color:#f196a6">&#xe66a;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">计价方式：</label>
                </div>
                <div class="weui-cell__bd">
                    <popup-picker :data="valuationList" placeholder="请输入计价方式" popup-title="请输入计价方式" value-text-align="left" v-model="valuation" @on-change="handleValuationChoose" ></popup-picker>
                </div>
            </div>
            <div class="weui-cell" :class="[settlement[0] == '默认面议' ? 'shield' : '']">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="top:.02rem; color:#ea96e5">&#xe62d;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">结算方式：</label>
                </div>
                <div class="weui-cell__bd">
                    <popup-picker :data="settlementList" placeholder="请输入结算方式" popup-title="请输入结算方式" value-text-align="left" v-model="settlement" @on-change="handleSettlementChoose" ></popup-picker>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="font-size:.36rem; top:.02rem; color:#6ab9c7">&#xe60c;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">施工周期：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="默认面议" v-model="cycle">
                </div>
                <div class="weui-cell__ft">
                    <span class="cl_b3 ml10">天</span>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__icon">
                    <i class="iconfont" style="top:.02rem; color:#f9ce90">&#xe62a;</i>
                </div>
                <div class="weui-cell__hd">
                    <label class="weui-label">预算金额：</label>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text"  placeholder="默认面议" v-model="money">
                </div>
                <div class="weui-cell__ft">
                    <span class="cl_b3 ml10">元</span>
                </div>
            </div>
        </div>
        <div class="weui-cells-form__title">
            <span>四、项目说明</span><span class="cl_b9 f12 ml5">(必填)</span>
        </div>
        <div class="weui-cells not-border-cells">
            <x-textarea placeholder="请输入项目说明" :autosize="true" :rows="5"></x-textarea>
        </div>
        <div class="weui-cells-form__title">
            <span>五、上传图片</span><span class="cl_b9 f12 ml5">(最少一张)</span>
        </div>
        <div class="weui-cells weui-cells_form not-border-cells">
            <div class="weui-cell" style="padding-bottom:5px;">
                <div class="weui-cell__bd">
                    <div class="weui-uploader">
                        <div class="weui-uploader__bd">
                            <ul class="weui-uploader__files" id="uploaderFiles">
                                <li class="weui-uploader__file" style="background-image:url(https://weui.io/images/pic_160.png)">
                                    <i class="iconfont">&#xe695;</i>
                                </li>
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
        <div class="weui-cells-primary" style="padding:.4rem 10%;">
            <div class="weui-flex">
                <div class="weui-flex__item">
                    <div class="weui-btn weui-btn_primary" style="margin-right:10px;" @click="handleGoBackPage">上一步</div>
                </div>
                <div class="weui-flex__item">
                    <div class="weui-btn weui-btn_primary">发布</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>

</style>

<script>
    import { XTextarea,PopupPicker } from 'vux'
    //初始化数据
    const ageList = [['默认不限','80后', '90后', '95后', '00后']] //要求年龄
    const limitList = [['默认不限','1年', '2年', '3年', '4年','5年以上','10以上']] //工作年限
    const valuationList = [['默认面议']] //计价方式
    const settlementList = [['默认面议','日结','月结','项目进度']] //结算方式
    export default {
        name:'nextProject',
        components: {
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
                valuationList,//计价方式列表
                settlementList,//结算方式列表

                /**
                 * 默认显示数据
                 */
                age:[ageList[0][0]], //要求年龄值
                limit:[limitList[0][0]],//工作年限值
                valuation:[valuationList[0][0]],//计价方式值
                settlement:[settlementList[0][0]],//结算方式值
                cycle:'',//施工周期
                money:'',//预算金额
            }
        },
        methods:{
            //处理要求年龄选择
            handleAgeChoose(val){
                this.age = val
            },
            //处理工作年限选择
            handleLimitChoose(val){
                this.limit = val
            },
            //处理计价方式选择
            handleValuationChoose(val){
                this.valuation = val
            },
            //处理结算方式选择
            handleSettlementChoose(val){
                this.settlement = val
            },
            //返上一页
            handleGoBackPage(){
                this.$router.go(-1)
            }
        }
    }
</script>