<template>
    <div class="communicate">
        <div class="top-absolute">
            <tab :line-width="2" active-color="#ff8712" default-color="#333" :animate="tabAnimate">
                <tab-item :selected="tabIndex == index" @on-item-click="getTabSwiperIndex" v-for="(item,index) in tabItems" :key="index">
                    <div>{{item}}</div>
                </tab-item>
            </tab>
        </div>
        <div class="communicate-container">
            <keep-alive>
                <div v-if="tabIndex == 0">
                    <scroller lock-x height="-94" ref="scroller" >
                        <div>
                            <small-talk></small-talk>
                        </div>
                    </scroller>
                </div>
                <address-book v-else-if="tabIndex == 1"></address-book>
                <div v-else>
                    <scroller lock-x height="-94" ref="scroller">
                        <div>
                             <new-friend></new-friend>
                        </div>
                    </scroller>
                </div>      
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import { Tab, TabItem } from 'vux'
    import { Scroller } from 'vux'
    import SmallTalk from './components/SmallTalk'
    import AddressBook from './components/AddressBook'
    import NewFriend from './components/NewFriend'

    //import { setTimeout } from 'timers';
    export default {
        name:"communicate",
        components: {
            Tab,
            TabItem,
            Scroller,
            SmallTalk,
            AddressBook,
            NewFriend
        },
        data(){
            return {
                tabItems:['微聊','我的朋友','新的朋友'],
                tabIndex: sessionStorage.communicateId || 0,
                tabAnimate:false,
            }
        },
        methods:{
            getTabSwiperIndex(index){
                this.tabIndex = index;
                sessionStorage.communicateId = index;
            },
        },
        mounted(){
            this.tabAnimate = true;
        }
    }
</script>

<style lang="stylus" scoped>
    .communicate
        padding-top:44px;

</style>
