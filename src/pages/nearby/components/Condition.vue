<template>
    <div>
        <div class="stance"></div>
        <div class="condition">
            <div class="weui-flex align-center">
                <div class="weui-flex__item" :class="[conditionChooseType == 'number' ? 'condition-active' : '']" @click="handleConditionChoose('number')">
                    <div class="condition-evel">参加次数<i class="iconfont" style="top:1px;">&#xe63b;</i></div>
                </div>
                <div class="weui-flex__item" :class="[conditionChooseType == 'comment' ? 'condition-active' : '']" @click="handleConditionChoose('comment')">
                    <div class="condition-evel">好评度<i class="iconfont" style="top:1px;">&#xe63b;</i></div>
                </div>
                <div class="weui-flex__item" :class="[conditionChooseType == 'distance' ? 'condition-active' : '']" @click="handleConditionChoose('distance')">
                    <div class="condition-evel">最近距离<i class="iconfont" style="top:1px;">&#xe63b;</i></div>
                </div>
                <div class="weui-flex__item">
                    <div class="condition-evel">
                        <x-address title="" :show="regionShow" :raw-value="true"  v-model='region' :list="regionData" placeholder="区域" value-text-align="center" :popup-style="{zIndex:5003}" @on-shadow-change="handleRegionChoose" @on-show="handleRegionShow" @on-hide="handleRegionConfirm"></x-address>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
   
    import {XAddress,ChinaAddressV4Data} from 'vux'
    export default {
        name: 'condition',
        data(){
            return {
                conditionChooseType:null, //选择类型
                region:[], //现居区域
                regionData: ChinaAddressV4Data,
                regionValue: [], //现居区域值
                regionPrev:[],
                regionShow: null,
            }
        },
        components: {
            XAddress,
        },
        methods:{
            handleConditionChoose(_type){
                if(this.conditionChooseType == _type){
                    this.conditionChooseType = null;
                    this.$emit('change',null);
                }else{
                    this.conditionChooseType = _type
                    this.$emit('change',_type);
                }
                this.regionShow = false
            },
            //处理筛选区域选择
            handleRegionChoose(region,value){
                this.regionValue = value
            },
            handleRegionShow(){
                this.regionShow = null;
                this.conditionChooseType = null;
            },
            handleRegionConfirm(b){
                this.regionShow = null;
                if(b){
                    if(this.regionPrev == this.regionValue) return;
                    this.regionPrev = this.regionValue
                    this.$emit('change',this.regionValue);
                }
            }
        },
    }
</script>



<style lang='stylus' scoped>
    
    .stance
        overflow:hidden;
        position: relative;
        height: 0;
        padding-bottom:40px;
    .condition::after
        content:'';
        position: absolute;
        left 0;
        bottom:0;
        width:100%;
        height:0;
        border-bottom:1px solid #ededed;
    .condition
        position: absolute;
        top:0;
        left:0;
        right:0;
        z-index:100;
        background-color: white
        width:100%;
        font-size: .26rem
        .weui-flex__item
            padding: 10px 0
            text-align: center
            color: #333
            font-weight: bold
            .condition-evel 
                position:relative;
                height: 20px;
                line-height: 20px;
            .condition-evel::after
                content: ''; 
                width: 1px; 
                height: 100%; 
                border-right: 1px solid #dfdfdf; 
                position: absolute; 
                right: 0; 
                top: 0;
        .weui-flex__item:last-child
            .condition-evel::after
                border-right:none;
        .condition-left
            position: absolute;
            left: 10px;
            top: 0;
            padding-top: 7.5px;
            .condition-region
                overflow: hidden;
                width:72px;
                height: 25px;
                line-height: 25px;
                color:#4c91ca;
                background-color: #f3f3f3;
                border-radius: 25px;
                padding: 0 5px;
                i
                    font-size: .40rem;
                span 
                    width: 52px;
                    line-height: 25px;
                    position: relative;
                    padding-right: 13px;
                    box-sizing: border-box;
                span:after
                    content: " ";
                    display: inline-block;
                    height: 5px;
                    width: 5px;
                    border-width: 1px 1px 0 0;
                    border-color: #999999;
                    border-style: solid;
                    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(90deg);
                    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(90deg);
                    position: absolute;
                    top: 50%;
                    margin-top: -4px;
                    right: 2px;
            .condition-ul
                display: none; 
                position: absolute;
                left: 0;
                top: 32px;
                width: 100%;
                max-height: 235px;
                padding: 0 10px;
                box-sizing: border-box;
                background-color:#f3f3f3;
                border-radius: 0 0 12.5px 12.5px;
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
                z-index: 999;
        .condition-active
            color:#ff8712;
            .condition-region
                border-radius:12.5px 12.5px 0 0;
            .condition-ul
                display: block;
                li
                    height:30px;
                    line-height:30px;
                    text-align:center;
                    position:relative;
                    color: #666;
                li::before
                    content:'';
                    width: 100%;
                    height: 0;
                    border-top: 1px solid #ededed;
                    position:absolute;
                    left: 0;
                    top: 0; 
                    z-index: 99;
    //清除滚动条
    .no-scrollbar::-webkit-scrollbar
        width: 0;
        height: 0;
    
    .condition-evel>>>.weui-cell
        padding:0;
    
    .condition-evel>>>.weui-cell .vux-popup-picker-select
        height:20px;
        line-height 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;	
        

    .condition-evel>>>.weui-cell .vux-cell-value
        display: block;
        font-size: .2rem;
        //transform: scale(0.6);
    .condition-evel>>>.weui-cell_access .weui-cell__ft:after
        width: 4px;
        height: 4px;
        margin-top: -2px;
        right: 5px;


</style>