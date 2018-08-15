<template>
    <div class="category">
        <nearby-condition @change="monitorConditionChange"></nearby-condition>
        <scroller lock-x scrollbarY height="-40" use-pullup v-model="scrollerValue"  :pullup-config="pullupConfig" @on-pullup-loading="handleScrollerUpLode">
            <div>
                <nearby-list></nearby-list>
                <div class="scroller-more" v-show="more">没有更多内容了</div>
            </div>
        </scroller>
        <!-- <nearby-timeline></nearby-timeline>
        <div class="navig-fixed">
            <div class="navig-fixed_box">
                <router-link to="" class="navig-btn">
                    <i class="iconfont">&#xe62e;</i>
                </router-link>
            </div>
        </div> -->
    </div>
</template>

<script>
    import { Scroller} from 'vux'
    import NearbyCondition from './components/Condition'
    import NearbyList from './components/List'
    import NearbyTimeline from './components/Timeline'


    export default {
        name:'nearby',
        components:{
            Scroller,
            NearbyCondition, //附近条件组件
            NearbyList,//附近师傅列表
            NearbyTimeline,//平台数据提示
        },
        data(){
            return {
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
            monitorConditionChange(val){
                if(typeof val == 'object'){
                    console.log(val)
                }else{
                    console.log(val)
                }
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
                }, 1000)
            }   
         
        }
    }
</script>
<style lang="stylus" scoped>

</style>