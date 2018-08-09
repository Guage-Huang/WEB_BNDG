<template>
    <div class="wireman">
        <div class="top-absolute">
            <tab :line-width="2" active-color="#ff8712" default-color="#333" >
                <tab-item :selected="tabIndex == index" @on-item-click="getTabSwiperIndex" v-for="(item,index) in tabItems" :key="index">
                    <div>{{item}}</div>
                    <div class='tc cl_b9 f12' v-if="index < 3">({{'第'+(index+1)+'步'}})</div>
                    <div class='tc cl_b9 f12' v-else>({{'选填'}})</div>
                </tab-item>
            </tab>
        </div>
        <wireman-info v-show="tabIndex == 0"></wireman-info>
        <wireman-real v-show="tabIndex == 1"></wireman-real>
        <wireman-skill v-show="tabIndex == 2"></wireman-skill>
        <wireman-case v-show="tabIndex == 3"></wireman-case>
    </div>
</template>

<script>
    import { Tab, TabItem } from 'vux'
    import WiremanInfo from './components/Info'
    import WiremanReal from './components/Real'
    import WiremanSkill from './components/Skill'
    import WiremanCase from './components/Case'

    const tabItems = ['基本信息','实名认证','我的技能','经典案例']
    export default {
        name:"userWireman",
        components: {
            Tab,
            TabItem,
            WiremanInfo,
            WiremanReal,
            WiremanSkill,
            WiremanCase
        },
        data(){
            return {
                tabItems,
                tabIndex:sessionStorage.wiremanTabIndex || 0,
            }
        },
        methods:{
            getTabSwiperIndex(index){
                this.tabIndex = index;
                sessionStorage.wiremanTabIndex = index
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .vux-tab .vux-tab-item
        line-height:normal;
        padding-top:3px;

        
</style>