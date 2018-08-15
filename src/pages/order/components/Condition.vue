<template>
    <div class="condition">
        <div class="weui-flex align-center">
            
            <div class="weui-flex__item">
                <div class="condition-evel" style="line-height:13px;">
                    <i class="iconfont f20" style="top:2px;">&#xe62e;</i> 地图
                </div>
            </div>
            <div class="weui-flex__item" :class="[conditionChooseType == 'newest' ? 'condition-active' : '']" @click="handleConditionChoose('newest')">
                <div class="condition-evel">最新发布</div>
            </div>
            <div class="weui-flex__item" :class="[conditionChooseType == 'lately' ? 'condition-active' : '']" @click="handleConditionChoose('lately')">
                <div class="condition-evel">离我最近</div>
            </div>
            <div class="weui-flex__item" :class="[conditionChooseType == 'classify' ? 'condition-active' : '']" @click="handleConditionChoose('classify')">
                <div class="condition-evel">发布分类</div>
            </div>
            <div class="weui-flex__item" :class="[conditionChooseType == 'screen' ? 'condition-active' : '']" @click="handleConditionChoose('screen')">
                <div class="condition-evel">
                    筛选 <i class="iconfont" style="top:1px;">&#xe74a;</i>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='stylus' scoped>
    .condition
        position: relative
        background-color: white
        font-size: .26rem
        //padding: 0 0 0 90px
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
    

</style>

<script>
   
    export default {
        name: 'condition',
        data(){
            return {
                cityToggle:false, //城市选择框是否显示
                conditionChooseType:null, //选择类型
            }
        },
        methods:{
            handleConditionChoose(_type){
                if(this.conditionChooseType == _type) {
                    this.conditionChooseType = null; 
                    this.$emit('change',null);
                }else{
                    if(_type == 'screen'){
                        this.conditionChooseType = null;
                    }else{
                        this.conditionChooseType = _type
                    }
                    this.$emit('change',_type)
                }
                
            }
        },
        components:{
        },
    }
</script>
