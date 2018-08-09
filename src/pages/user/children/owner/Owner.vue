<template>
    <div class="owner">
        <div class="top-absolute">
            <tab :line-width="2" active-color="#ff8712" default-color="#333" >
                <tab-item :selected="tabIndex == index" @on-item-click="getTabSwiperIndex" v-for="(item,index) in tabItems" :key="index">
                    <div>{{item}}</div>
                    <div class='tc cl_b9 f12' v-if="index < 1">({{'第'+(index+1)+'步'}})</div>
                    <div class='tc cl_b9 f12' v-else>({{'选填'}})</div>
                </tab-item>
            </tab>
        </div>
        <owner-info @change="getOwnerInfoType" v-show="tabIndex == 0"></owner-info>
        <owner-license v-show="tabIndex == 1"></owner-license>
        <owner-introduce v-show="tabIndex == 2"></owner-introduce>
    </div>
</template>

<script>
    import { Tab, TabItem } from 'vux'
    import OwnerInfo from './components/Info'
    import OwnerLicense from './components/License'
    import OwnerIntroduce from './components/Introduce'

    const unit = ['基本信息','证照上传','企业介绍']
    const personal = ['基本信息']
    export default {
        name:"userOwner",
        components: {
            Tab,
            TabItem,
            OwnerInfo,
            OwnerLicense,
            OwnerIntroduce
        },
        data(){
            return {
                tabItems:unit,
                tabIndex:sessionStorage.ownerTabIndex || 0,
            }
        },
        methods:{
            getTabSwiperIndex(index){
                this.tabIndex = index;
                sessionStorage.ownerTabIndex = index
            },
            getOwnerInfoType(type){
                if(type == 'unit'){
                    this.tabItems = unit
                }else{
                    this.tabItems = personal
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .vux-tab .vux-tab-item
        line-height:normal;
        padding-top:3px;
</style>