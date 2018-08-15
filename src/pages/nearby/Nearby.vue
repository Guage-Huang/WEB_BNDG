<template>
    <div class="nearby">
        <search placeholder="找好工匠，上工匠云家" :auto-fixed="false" cancel-text=" ">
            <div slot="right" style="line-height:33px; margin-left:5px;" @click="monitorSrceenOpen">
                <span>筛选</span>
                <i class="iconfont" style="top:1px;">&#xe74a;</i>
            </div>
        </search>
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
                        <div class="title">现居区域</div>
                        <div class="weui-flex__item">
                            <x-address title="" :show="regionShow" :raw-value="true" v-model="region" :list="regionData" placeholder="选择现居区域" value-text-align="right" :popup-style="{zIndex:5003}" @on-shadow-change="handleScreenRegionChoose"></x-address>
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
        <scroller lock-x scrollbarY height="-143" ref="scroller">
            <div>
                 <nearby-swiper></nearby-swiper>
                 <nearby-nav></nearby-nav>
                 <nearby-recommend></nearby-recommend>
            </div>
        </scroller>
        <nearby-timeline></nearby-timeline>
        <div class="navig-fixed">
            <div class="navig-fixed_box">
                <router-link :to="'/map/workers/'+position.lat+'/'+position.lng" class="navig-btn">
                    <i class="iconfont">&#xe62e;</i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { Scroller,Search,XAddress,ChinaAddressV4Data } from 'vux'
    import CommonScreen from '../../common/screen/Screen'
    import NearbyTimeline from './components/Timeline'
    import NearbySwiper from './components/Swiper'
    import NearbyNav from './components/Nav'
    import NearbyRecommend from './components/Recommend'

     //筛选选择数据
    let screenClassifyData =  [{
        id: 0,
        title: '工种类型',
        child: [
            { id: 0, name: '全部', },
            { id: 1, name: '电工',},
            { id: 2, name: '水工',},
            { id: 3, name: '泥瓦工',},
            { id: 4, name: '油漆工',},
            { id: 5, name: '木工',},
            { id: 6, name: '空调工',},
            { id: 7, name: '焊工',},
            { id: 8, name: '小工',},
        ],
        childActive: null,
        toggle: true,
    },
    ]

    export default {
        name:'nearby',
        components:{
            Scroller,
            Search,
            XAddress,
            CommonScreen,
            NearbySwiper,
            NearbyTimeline,//平台数据提示
            NearbyNav,
            NearbyRecommend,
        },
        data(){
            return {
                position:'',
                srceenToggle:false, //初始化将筛选弹窗关闭
                screenClassifyData, //筛选数据
                region:[], //现居区域
                regionData: ChinaAddressV4Data,
                regionValue: [], //现居区域值
                regionShow:null,
            }
        },
        computed: {
            
        },
        mounted(){
           this.getLocation();
        },
        methods: {
            getLocation(){
                geolocation.getLocation(this.showPosition, this.showErr,geolocationOpation)
            },
            showPosition(position){
                this.position = position
                this.$store.commit('updateGeolocation',position)
            },
            showErr(err){
                console.log(err)
                this.$store.commit('updateGeolocation',err)
            },

            //打开筛选
            monitorSrceenOpen(){
                this.srceenToggle = true
                this.regionShow = null
            },
            //监听筛选框关闭
            monitorSrceenClose(toggle){
                this.srceenToggle = toggle
                this.regionShow = false
            },
              //处理筛选内容显示隐藏
            handleScreenConToggle(index){
                let item = this.screenClassifyData[index]
                item.toggle = !item.toggle

               // this.$set(this.screenClassifyData,index,item)
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
            //处理筛选重置按钮
            handleScreenReset(){
                let items = this.screenClassifyData
                for(let item in items){
                    items[item].childActive = null
                }
            }
        },
    }
</script>
<style lang="stylus" scoped>
    .nearby>>>.weui-search-bar
        &::before
            border-top: none !important;
        .weui-search-bar__form
                flex:1;




</style>