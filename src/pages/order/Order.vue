<template>
    <div>
        <common-screen :toggle="srceenToggle" @change="monitorSrceenClose">
            <template slot="container">
                <div class="screen_slide" v-for="(item,index) in screenClassifyData" :key="item.id">
                    <div class="screen-title weui-flex align-center" @click="handleScreenConToggle('type',index)">
                        <div class="title">{{item.title}}</div>
                        <div class="weui-flex__item"></div>
                        <div class="gt">
                            <i :class="{down:item.toggle}"></i>
                        </div>
                    </div>
                    <div class="btns" v-show="item.toggle">
                        <div class="first">
                            <div v-for="(child,cindex) in item.child" :key="child.id" @click="handleScreenBtnChoose('type',index,cindex)">
                                <span :class='[item.childActive == cindex ? "active" : ""]'>{{child.name}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="screen_slide" >
                    <div class="screen-title weui-flex align-center" >
                        <div class="title">选择区域</div>
                        <div class="weui-flex__item">
                            <x-address title="" :show="regionShow" :raw-value="true" v-model="region" :list="regionData" placeholder="区域查找" value-text-align="right" :popup-style="{zIndex:5003}" @on-shadow-change="handleScreenRegionChoose"></x-address>
                        </div>
                    </div>
                </div>
                <div class="screen_slide" v-for="(item,index) in screenState" :key="item.id" >
                    <div class="screen-title weui-flex align-center" @click="handleScreenConToggle('status',index)">
                        <div class="title">{{item.title}}</div>
                        <div class="weui-flex__item"></div>
                        <div class="gt">
                            <i :class="{down:item.toggle}"></i>
                        </div>
                    </div>
                    <div class="btns" v-show="item.toggle">
                        <div class="first">
                            <div v-for="(child,cindex) in item.child" :key="child.id" @click="handleScreenBtnChoose('status',index,cindex)">
                                <span :class='[item.childActive == cindex ? "active" : ""]'>{{child.name}}</span>
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
        </common-screen> <!--:pullup-config="pullupConfig"-->
        <scroller lock-x scrollbarY height="100%"  use-pullup v-model="scrollerValue"  :pullup-config="pullupConfig" @on-pullup-loading="handleScrollerUpLode">
            <div>
                <index-swiper></index-swiper>
                <index-condition @change="monitorConditionChange"></index-condition>
                <index-notice v-if='noticeToggle' @change="moitorNoticeClose"></index-notice>
                <index-release></index-release>
                <div class="scroller-more" v-show="more">没有更多内容了</div>
            </div>
        </scroller>
    </div>
</template>


<script>
    import {Group,XAddress,ChinaAddressV4Data,Scroller} from 'vux'
    import CommonScreen from '../../common/screen/Screen'
    
    import IndexSwiper from './components/Swiper'
    import IndexCondition from './components/Condition'
    import IndexNotice from './components/Notice'
    import IndexRelease from './components/Release'

    

    //筛选选择数据
    let screenClassifyData =  [
        {
            id: 0, title: '活动类型',
            child: [
                    { id: 0,name: '全部', },
                    { id: 1, name: '工程项目',},
                    { id: 2, name: '商务联谊',},
                    { id: 3,name: '拜师傅',},
                    { id: 4,name: '找老乡',},
                    { id: 5,name: '招聘电工',},
                    { id: 6,name: '求职应聘',},
                    { id: 7,name: '电工聚会',}
            ],
            childActive: null, toggle: true,
        }, 
        {
            id: 1, title: '工种类型',
            child: [
                    { id: 0, name: '全部',},
                    { id: 1, name: '瓦工',},
                    { id: 2, name: '木工',},
                    { id: 3, name: '水工',},
                    { id: 4, name: '电工',},
                    { id: 5, name: '油工', },
                    { id: 6, name: '小工',}
            ],
            childActive: null,
            toggle: true,
        }
    ]
    let screenState = [
        {
            id: 2, title: '参与状态',
            child: [
                    { id: 0,name: '全部', },
                    { id: 1, name: '未参加',},
                    { id: 2, name: '已参加',},
            ],
            childActive: null, toggle: true,
        },
        {
            id: 3, title: '满员状态',
            child: [
                    { id: 0,name: '全部', },
                    { id: 1, name: '未满员',},
                    { id: 2, name: '已满员',},
            ],
            childActive: null, toggle: true,
        },
        {
            id: 4, title: '过期状态',
            child: [
                    { id: 0,name: '全部', },
                    { id: 1, name: '未过期',},
                    { id: 2, name: '已过期',},
            ],
            childActive: null, toggle: true,
        }
    ]
    
    export default {
        name:'index',
        components:{
            Scroller,
            Group,
            XAddress,//选择区域组件
            CommonScreen, //筛选弹窗组件
            //CommonTabbar,//底部导航
            IndexSwiper, //轮播图组件
            IndexCondition, //条件筛选组件
            IndexNotice, //广告通知组件
            IndexRelease, //发布列表
        },
        data(){
            return {
                srceenToggle:false, //初始化将筛选弹窗关闭
                screenClassifyData, //筛选数据
                region:[], //选择区域
                regionData: ChinaAddressV4Data,
                regionValue: [], //选择区域初始值
                regionShow:null,
                screenState, //筛选状态类型选择
                //screenStateIndex:null, //筛选状态类型选中值
                noticeToggle:true, //初始化广告通知组件开启

                pullupConfig: {
                    content: '上拉加载更多',
                    //downContent: '松开进行加载',
                    upContent: '上拉加载更多',
                    loadingContent: '加载中...'
                },
                page:1,
                count:5,
                scrollerValue: {
                    pullupStatus: ''
                },
                more:false,

            }
        },
        methods: {
            //监听条件返回的某个条件
            monitorConditionChange(_type){
                console.log(_type)
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
                    this.regionShow = null
                }
            },
            //监听筛选框关闭
            monitorSrceenClose(toggle){
                this.srceenToggle = toggle
                this.regionShow = false
            },
            //监听公告关闭
            moitorNoticeClose(toggle){
                this.noticeToggle = toggle;
            },
             //处理筛选内容显示隐藏
            handleScreenConToggle(type,index){
                let item = '';
                if(type === 'type'){
                    item = this.screenClassifyData[index]
                }else{
                    item = this.screenState[index]
                }
                item.toggle = !item.toggle
            },
            //处理筛选内容选择
            handleScreenBtnChoose(type,pindex,cindex){
                let item = ''
                if(type === 'type'){
                    item = this.screenClassifyData[pindex]
                }else{
                    item = this.screenState[pindex]
                }
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
            //处理筛选重置按钮
            handleScreenReset(){
                let screenClassifyData = this.screenClassifyData
                let screenState = this.screenState
                for(let item in screenClassifyData){
                    screenClassifyData[item].childActive = null
                }
                for(let item in screenState){
                    screenState[item].childActive = null
                }

                this.region = ['广东省','广州市','白云区']
                this.regionValue = this.region
            },
            handleScrollerUpLode () {
                setTimeout(() => {
                    this.page += 1
                    this.count += 5
                    setTimeout(() => {
                        this.scrollerValue.pullupStatus = 'disabled'
                        this.more = true
                    }, 10)
                    // this.$nextTick(() => {
                    //     this.scrollerValue.pullupStatus = 'default'
                    // })
                }, 2000)
            }   
            
        }
    }
</script>

<style lang="stylus">


</style>