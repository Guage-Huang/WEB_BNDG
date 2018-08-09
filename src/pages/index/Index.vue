<template>
    <div>
        <common-screen :toggle="srceenToggle" @change="monitorSrceenClose">
            <template slot="container">
                <div class="screen_slide" v-for="(item,index) in screenClassifyData" :key="item.id">
                    <div class="screen-title weui-flex align-center" @click="handleScreenConToggle(index)">
                        <div class="title">{{item.title}}</div>
                        <div class="weui-flex__item"></div>
                        <div class="gt">
                            <i :class="{down:item.toggle}"></i>
                        </div>
                    </div>
                    <div class="btns" v-show="item.toggle">
                        <div class="first">
                            <div v-for="(child,cindex) in item.child" :key="child.id" @click="handleScreenBtnChoose(index,cindex)">
                                <span :class='[item.childActive == cindex ? "active" : ""]'>{{child.name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="screen_slide" >
                    <div class="screen-title weui-flex align-center" >
                        <div class="title">选择区域</div>
                        <div class="weui-flex__item">
                            <x-address title="" :raw-value="true" v-model="region" :list="regionData" placeholder="" value-text-align="right" :popup-style="{zIndex:5003}" @on-shadow-change="handleScreenRegionChoose"></x-address>
                        </div>
                    </div>
                </div>
                <div class="screen_slide" >
                    <div class="screen-title weui-flex align-center" >
                        <div class="title">类型状态</div>
                        <div class="weui-flex__item"></div>
                    </div>
                    <div class="btns">
                        <div class="first">
                            <div style="width:25%;" v-for="(item,index) in screenState" :key="item" @click="handleScreenStateChoose(index)">
                                <span :class="[screenStateIndex === index ? 'active' : '']">{{item}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template slot="footer">
                <div class="weui-dialog__ft">
                    <div class="weui-dialog__btn weui-dialog__btn_default" id="screenReset" @click="handleScreenReset">重置</div>
                    <div class="weui-dialog__btn weui-dialog__btn_primary" id="screenSubmission">确认</div>
                </div>
            </template>
        </common-screen>
        <scroller lock-x scrollbarY height="100%" ref="scroller">
            <div>
                <index-swiper></index-swiper>
                <index-condition @change="monitorConditionChange"></index-condition>
                <index-notice v-if='noticeToggle' @change="moitorNoticeClose"></index-notice>
                <index-release></index-release>
            </div>
        </scroller>
    </div>
</template>


<script>
    import { Scroller } from 'vux'
    import CommonScreen from '../../common/screen/Screen'
    
    import IndexSwiper from './components/Swiper'
    import IndexCondition from './components/Condition'
    import IndexNotice from './components/Notice'
    import IndexRelease from './components/Release'

    import {Group,XAddress,ChinaAddressV4Data } from 'vux'

    //筛选选择数据
    let screenClassifyData =  [{
        id: 0,
        title: '活动类型',
        child: [
            { id: 0,name: '全部', },
            { id: 1, name: '找帮手',},
            { id: 2, name: '商务联谊',},
            { id: 3,name: '拜师傅',},
            { id: 4,name: '找老乡',},
            { id: 5,name: '招聘电工',},
            { id: 6,name: '求职应聘',},
            { id: 7,name: '电工聚会',}
        ],
        childActive: null,
        toggle: true,
    }, 
    {
      id: 1,
      title: '行业类型',
      child: [
        { id: 0, name: '全部',},
        { id: 1, name: '家庭用电',},
        { id: 2, name: '商场酒店用电',},
        { id: 3, name: '物业小区用电',},
        { id: 4, name: '工矿企业用电',},
        { id: 5, name: '配电工程', },
        { id: 6, name: '输变电工程',}
      ],
      childActive: null,
      toggle: true,
    }]

    let screenState = ['全部','进行中','已满员','已参加','已截止']

    export default {
        name:'index',
        components:{
            Scroller,
            CommonScreen, //筛选弹窗组件
            //CommonTabbar,//底部导航
            IndexSwiper, //轮播图组件
            IndexCondition, //条件筛选组件
            IndexNotice, //广告通知组件
            IndexRelease, //发布列表
            Group,
            XAddress,//选择区域组件
        },
        data(){
            return {
                srceenToggle:false, //初始化将筛选弹窗关闭
                screenClassifyData, //筛选数据
                region:['广东省','广州市','白云区'], //选择区域
                regionData: ChinaAddressV4Data,
                regionValue: [], //选择区域初始值
                screenState, //筛选状态类型选择
                screenStateIndex:null, //筛选状态类型选中值

                noticeToggle:true, //初始化广告通知组件开启
            }
        },
        mounted(){
            
        },
        methods: {
            //监听条件返回的某个条件
            monitorConditionChange(_type){
                let _index;
                if(_type == 'newest'){
                    _index = 1
                }else if(_type == 'lately'){
                    _index = 2
                }else if(_type == 'classify'){
                    _index = 3
                }else if(_type == 'screen'){
                    _index = 4
                }else{
                    _index = 0
                }
                if(_index === 4){
                    this.srceenToggle = true;
                }
            },
            //监听筛选框关闭
            monitorSrceenClose(toggle){
                this.srceenToggle = toggle;
            },
            //监听公告关闭
            moitorNoticeClose(toggle){
                this.noticeToggle = toggle;
            },
             //处理筛选内容显示隐藏
            handleScreenConToggle(index){
                let item = this.screenClassifyData[index]
                item.toggle = !item.toggle
                console.log(this.screenClassifyData)
                //this.$set(this.screenClassifyData,index,item)
            },
            //处理筛选内容选择
            handleScreenBtnChoose(pindex,cindex){
                let item = this.screenClassifyData[pindex]
                if(item.childActive !== cindex){
                    item.childActive = cindex
                }else{
                    item.childActive = null
                }
               //this.$set(this.screenClassifyData,pindex,item)
            },
            //处理筛选区域选择
            handleScreenRegionChoose(value,region){
               this.regionValue = region
            },
            //处理筛选状态类型选择
            handleScreenStateChoose(index){
                if(this.screenStateIndex === index){
                    this.screenStateIndex = null
                }else{
                    this.screenStateIndex = index
                }
                
            },
            //处理筛选重置按钮
            handleScreenReset(){
                let items = this.screenClassifyData
                for(let item in items){
                    items[item].childActive = null
                }
                this.region = ['广东省','广州市','白云区']
                this.regionValue = this.region
                this.screenStateIndex = null
            }
        }
    }
</script>

<style lang="stylus">


</style>